import React from "react";
import "./Filter.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Filter = () => {
  return (
    <div>
      {" "}
      <div className="wrapper">
        <div className="defaultMargin">
          <select name="cars" id="cars" className="customDropdown">
            <option>1 room, 2 travelers</option>
            <option>1 room, 2 travelers</option>
            <option>1 room, 2 travelers</option>
            <option>1 room, 2 travelers</option>
          </select>
        </div>
        <div className="defaultMargin">
          <input type="text" className="icon" placeholder="Going to" />
        </div>

        <div className="defaultMargin">
          <div id="leftbox" className="defaultMargin">
            <TextField
              id="date"
              label="Check-in"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: "90%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <div id="middlebox" className="defaultMargin"></div>

          <div id="rightbox" className="defaultMargin">
            <TextField
              id="date"
              label="Check-out"
              type="date"
              defaultValue="2017-05-25"
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>

        <div className="defaultMargin">
          <div id="leftbox">
            <input type="checkbox" className="customCheckbox" />
            <label>Add a flight</label>
          </div>

          <div id="middlebox"></div>

          <div id="rightbox">
            <input type="checkbox" className="customCheckbox" />
            <label>Add a car</label>
          </div>
        </div>
        <div style={{ textAlign: "center" }} className="defaultMargin">
          <Button
            variant="contained"
            disableElevation
            style={{ width: "100%", marginTop: "40px" }}
          >
            Search
          </Button>
        </div>
        <div style={{ margin: "auto" }}>
          <img
            style={{ width: "100%", height: "350px" }}
            src="https://images.unsplash.com/photo-1546552768-2e5b568b0680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="beachImg"
          />
        </div>
      </div>
      ;
    </div>
  );
};
export default Filter;
