"use strict";

/**
 * Dependencies
 * @ignore
 */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const Webauthn = require("./lib/webauthn");
var cors = require("cors");

/**
 * Module Dependencies
 * @ignore
 */
const LevelAdapter = require("./lib/webauthn/src/LevelAdapter");

/**
 * Example
 * @ignore
 */
const app = express();

// Session
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Static
app.use(express.static(path.join(__dirname, "build")));

// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create webauthn
const webauthn = new Webauthn({
  // origin: "https://tranquil-reaches-89447.herokuapp.com",
  // origin: "http://localhost:3000",
  // origin: "https://wenauthnpoc.herokuapp.com",
   origin: "https://trialwebauthn.herokuapp.com", 
  usernameField: "username",
  userFields: {
    username: "username",
    name: "displayName",
  },
  store: new LevelAdapter("db"),
  rpName: "GLoballogic",
});
app.use("/webauthn", webauthn.initialize());

// Endpoint without passport
app.get("/secret", webauthn.authenticate(), (req, res) => {
  res.status(200).json({
    status: "ok",
    message: `Super secret message for ${req.user.displayName}`,
  });
});

// Debug
app.get("/db", async (req, res) => {
  res.status(200).json(await webauthn.store.search());
});

// Debug
app.get("/session", (req, res) => {
  res.status(200).json(req.session);
});

// Serve React App
app.use("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
