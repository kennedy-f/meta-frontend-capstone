import React from "react";
import "./styles.css";
import { Home } from "pages/home";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { RootNavigator } from "./navigation ";

function App() {
  return (
    <>
      <Header />
      <RootNavigator />

      <Footer />
    </>
  );
}

export default App;
