import React, { useEffect } from "react";
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
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ModalPopup from "./components/ModalPopup";

export default function Login(props) {
  const history = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [userDetail, setUserDetail] = React.useState("");

  const onLogin = () => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    console.log(userDetails);

    props.auth.login({ username: userDetails.username }).then((res) => {
      res.status === "ok" ? validUser() : window.alert("Error occured");
    });
  };

  useEffect(() => {
    let userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      userDetails = JSON.parse(userDetails);
      setUserDetail(JSON.parse(localStorage.getItem("userDetails")).username);
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  const validUser = () => {
    localStorage.setItem("isValid", "yes");
    history("/dashboard");
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
        <Row style={{ paddingTop: 100 }}>
          <Col>
            {" "}
            <h1 style={{ marginBottom: 35 }}>Sign in</h1>
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
              <Button
                variant="primary"
                onClick={onLogin}
                size="lg"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form>
            <div
              className={"highlight-policy central-row"}
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Forgot Password?
            </div>
            <div
              className="central-row"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Don't have an account?{" "}
              <span className={"highlight-policy"} onClick={() => history("/")}>
                Create One
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
        <ModalPopup
          open={open}
          setOpen={setOpen}
          username={userDetail}
          isLogin={() => onLogin()}
        />
      </Container>
    </div>
  );
}
