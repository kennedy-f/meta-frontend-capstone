import { CssBaseline } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootNavigator } from "./navigation ";
import "./styles.css";

function App() {
  return (
    <>
      <CssBaseline />
      <RootNavigator />
      <ToastContainer />
    </>
  );
}

export default App;
