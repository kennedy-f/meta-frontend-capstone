import React from "react";
import "./styles.css";
import { Home } from "pages/home";

function Header() {
  return (
    <header>
      <img alt={"little lemon logo "} src={"/imgs/Logo .svg"} />
      <ul>
        <li>
          <a href={"/home"}> Home </a>
        </li>
        <li>
          <a href={"#ABOUT"}> About </a>
        </li>
        <li>
          <a href={"#MENU"}> Menu </a>
        </li>
        <li>
          <a href={"#RESERVATIONS"}> Reservations </a>
        </li>
        <li>
          <a href={"#ORDER-ONLINE"}> Order Online </a>
        </li>
        <li>
          <a href={"/login"}> Login </a>
        </li>
      </ul>
    </header>
  );
}

function Footer() {
  return <footer></footer>;
}

function App() {
  return (
    <>
      <Header />
      {/*Add routes */}
      <Home />
      {/*<BookingForm />*/}
      <Footer />
    </>
  );
}

export default App;
