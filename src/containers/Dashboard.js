import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import Tabs from "../components/Tabs";
import Snackbar from "../components/SnackBar";
import Filter from "../components/Filter";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ logout }) {
  const history = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userDetails")) === null) {
      history("/");
    }
  }, []);
  return (
    <>
      <Snackbar />
      <AppBar
        logout={logout}
        userDetail={JSON.parse(localStorage.getItem("userDetails"))}
      />
      <Tabs />
      <Filter />
    </>
  );
}
