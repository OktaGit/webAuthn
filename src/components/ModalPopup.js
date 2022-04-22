import React, { useEffect } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "34%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginTop: "10%",
};
export default function ModalPopup({ open, setOpen, username, isLogin }) {
  const history = useNavigate();

  const registerUser = () => {
    setOpen((value) => !value);
    history("/");
  };

  return (
    <div className="wrapper" style={{ zIndex: 9999 }}>
      <Modal
        open={open}
        onClose={() => {
          setOpen((value) => !value);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <span style={{ fontWeight: 600 }}>
              {" "}
              You could be getting lower prices
            </span>
          </div>

          <div>
            Save 10% or more on thousands of properties with member prices.
          </div>

          <div style={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              disableElevation
              style={{ width: "100%", marginTop: "20px" }}
              onClick={isLogin}
            >
              {`Signed in as ${username ? username : "No user"}`}
            </Button>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              style={{ width: "100%", marginTop: "20px" }}
              onClick={registerUser}
            >
              Sign up it's free
            </Button>
          </div>
          <div className="defaultMargin">List of favorites</div>
          <div className="defaultMargin">Expedia Rewards</div>
          <Divider />
          <div
            className="defaultMargin"
            style={{ marginTop: "20px", color: "#1976D2" }}
          >
            Customer Support
          </div>
          <div className="defaultMargin">Feedback</div>

          <div className="defaultMargin">List your property</div>

          <div className="defaultMargin">
            English-USD $<span style={{ marginLeft: "8px" }}></span>
            <img
              alt="United States"
              height="30"
              width="30"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
