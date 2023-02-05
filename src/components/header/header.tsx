import React from "react";

import { Container, Grid, List, ListItem, ListItemButton } from "@mui/material";

export function Header() {
  return (
    <header style={{ width: "100%" }}>
      <Container maxWidth={"lg"}>
        <Grid container xs={12} alignContent={"center"} sx={{ height: 100 }}>
          <Grid item md={3}>
            <img alt={"little lemon logo "} src={"/imgs/Logo .svg"} />
          </Grid>
          <Grid item md={8}>
            <List
              component={"ul"}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <ListItem>
                <ListItemButton component={"a"} href={"/home"}>
                  Home
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={"a"} href={"#ABOUT"}>
                  About
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={"a"} href={"#MENU"}>
                  Menu
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={"a"} href={"/booking"}>
                  Reservations
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={"a"} href={"#ORDER-ONLINE"}>
                  Order Online
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={"a"} href={"/login"}>
                  Login
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
