import { Container, Grid } from "@mui/material";
import React from "react";

export function Footer() {
  return (
    <footer>
      <Container>
        <Grid container>
          <Grid
            item
            container
            style={{
              color: "#000",
              gap: "4em",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>
              <img src={"/imgs/footer-logo.png"} alt={"logo "} width={200} />
            </div>
            <div>
              <div>
                <h3>Navigation </h3>
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order online</li>
                <li>Login</li>
              </ul>
            </div>
            <div>
              <div>
                <h3>Contact </h3>
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order online</li>
                <li>Login</li>
              </ul>
            </div>{" "}
            <div>
              <div>
                <h3>Social media links </h3>
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order online</li>
                <li>Login</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
