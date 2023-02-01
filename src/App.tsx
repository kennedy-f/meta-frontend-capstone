import React from "react";
import "./styles.css";
import { Button } from "./components/buttom";
import { Specials } from "./components/specials/specials";
import { BookingForm } from "./modules/booking/form/booking.form";

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

function Main() {
  return (
    <main>
      <div className={"container-xlg about-container bg-green"}>
        <div className={"container"}>
          <div className={"about"}>
            <h1> Little lemon </h1>
            <h2> Chicago </h2>
            <span>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </span>
            <Button style={{ marginTop: 10 }}>Reserve a Table</Button>
          </div>
          <div className={"about-2"}>
            <img src={"/imgs/restauranfood.jpg"} alt={"restaurant food"} />
          </div>
        </div>
      </div>
      <div className={"container-xlg"} style={{ marginTop: "200px" }}>
        <div className={"container"} style={{ flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h2
              style={{ color: "black", fontSize: 44, padding: 0, margin: 10 }}
            >
              This weeks specials!
            </h2>
            <Button> Online Menu </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 50,
              marginTop: 30,
            }}
          >
            <Specials />
            <Specials />
            <Specials />
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return <footer></footer>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;
