/**
 * Dependencies
 * @ignore
 */
import React, { useEffect, useState } from "react";
import Client from "./lib/webauthn/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./containers/Dashboard";

/**
 * Module Dependencies
 * @ignore
 */

/**
 * App
 * @ignore
 */
function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  // const [webauthn] = useState(
  //   new Client({ pathPrefix: "http://localhost:3000/webauthn" })
  // );
  const [webauthn] = useState(new Client());
  useEffect(() => {
    localStorage.setItem("isValid", "yes");
  }, []);
  function onRegister() {
    webauthn.register({ name, username });
  }

  function onLogin() {
    webauthn.login({ username });
  }

  function onLogout() {
    webauthn.logout();
  }

  return (
    <div>
      {" "}
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup auth={webauthn} />}></Route>
          <Route
            exact
            path="/login"
            element={<Login auth={webauthn} />}
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={<Dashboard logout={onLogout} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

/**
 * Exports
 * @ignore
 */
export default App;
