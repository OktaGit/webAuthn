import React from "react";
import { Container, Row, Col, Form, Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  FaEye,
  FaEyeSlash,
  FaApple,
  FaFacebookSquare,
  FaGoogle,
} from "react-icons/fa";
import headerImg from "./assets/logo2.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Signup(props) {
  const history = useNavigate();
  // const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [publicShared, setPublicShared] = React.useState(false);
  const [biometric, setBiometric] = React.useState(true);

  const onRegister = async () => {
    props.auth.register({ name, username }).then((res) => {
      console.log(res.user.callback, ".....res...");
      if (res) {
        localStorage.setItem("userDetails", JSON.stringify({ name, username }));
        res.status === "ok"
          ? // ? console.log(res.user.callback, ".....res...")
            window.location.assign(res.user.callback)
          : // history("www.google.com", { replace: true })
            window.alert("Error occured");
      } else {
        window.alert("Error occured");
      }
    });
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Navbar className="navbar-wrapper">
        <Container className="container-navbar">
          <Navbar.Brand>
            <img src={headerImg} height="42px" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row style={{ paddingTop: 80 }}>
          <Col>
            {" "}
            <h1 style={{ marginBottom: 35 }}>Sign Up</h1>
            <Form>
              <Form.Group>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Email"
                  label="Email"
                  type="email"
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    className: "text-field-default",
                  }}
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Password"
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    className: "text-field-default",
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Form.Group>
              <div className="checkbox-class">
                <div>
                  <Checkbox
                    size="md"
                    aria-label="option 1"
                    checked={publicShared}
                    style={{ width: 20, height: 20 }}
                  />
                </div>
                <div>This is a public or shared device</div>
              </div>
              <div className="checkbox-class2">
                <div>
                  <Checkbox
                    size="md"
                    aria-label="option 1"
                    checked={biometric}
                    style={{ width: 20, height: 20 }}
                  />
                </div>
                <div>Use biometric authentication for Signup.</div>
              </div>
              <div style={{ marginBottom: 20 }}>
                {`By signing in, I agree to Expedia `}
                <span className={"highlight-policy"}>
                  Terms and Condition's, Privacy Statement{" "}
                </span>
                {` and `}
                <span className={"highlight-policy"}>
                  Expedia Rewards terms and Conditions.
                </span>
              </div>

              <Button
                variant="primary"
                onClick={onRegister}
                size="lg"
                style={{ width: "100%" }}
              >
                Signup
              </Button>
            </Form>
            {/* <div
              className={"highlight-policy central-row"}
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Forgot Password?
            </div> */}
            <div
              className="central-row"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              {`Already have an account? `}
              <span
                className={"highlight-policy"}
                onClick={() => history("/login")}
              >
                {` Login`}
              </span>
            </div>
            <div
              className="central-row"
              style={{ marginTop: 40, marginBottom: 30 }}
            >
              or continue with
            </div>
            <div className="central-row">
              <div style={{ marginRight: "12px" }}>
                <FaApple fontSize="30px" />
              </div>
              <div style={{ marginRight: "12px" }}>
                <FaFacebookSquare
                  color={"#004085"}
                  fontSize="30px"
                  marginRight={"12px"}
                />
              </div>
              <div style={{ marginRight: "12px" }}>
                <FaGoogle
                  color={"#004085"}
                  fontSize="30px"
                  marginRight={"12px"}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
