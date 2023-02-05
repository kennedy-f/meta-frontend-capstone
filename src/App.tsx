import { CssBaseline } from "@mui/material";
import React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { RootNavigator } from "./navigation ";
import "./styles.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <RootNavigator />
      <Footer />
    </>
  );
}

export default App;
