import React from "react";

import { Container, Grid } from "@mui/material";

export function Header() {
  return (
    <header>
      <Container maxWidth={"lg"}>
        <Grid container alignItems={"center"}>
          <Grid item md={4}>
            <img alt={"little lemon logo "} src={"/imgs/Logo .svg"} />
          </Grid>
          <Grid item md={8}>
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
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
