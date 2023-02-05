import React from "react";

export function Header() {
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
          <a href={"/booking"}> Reservations </a>
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
