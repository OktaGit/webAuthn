import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./SnackBar.css";

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const msg = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "10px 0px 0px 0px",
        }}
      >
        <img
          style={{ width: "60px", height: "40px", borderRadius: "50%" }}
          alt="img"
          src="https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"
        />
        <span>
          Save upto 10% on thousands of properties on you book in the app.
        </span>
      </div>
    </>
  );
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Snackbar
        style={{
          display: "flex",
          justifyItems: "start",
          alignItems: "center",
          position: "relative",
          marginTop: "10px",
          marginLeft: "0px !important",
          left: "0px !important",
          right: "0px !important",
        }}
        vertical={"top"}
        horizontal={"center"}
        open={open}
        autoHideDuration={200000000}
        onClose={handleClose}
        message={msg}
        action={action}
      />
    </div>
  );
}
