import { Button, Container, Grid } from "@mui/material";
import React from "react";

const navOptions: { label: string; href: string }[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/" },
  { label: "menu", href: "" },
  { label: "reservations", href: "/" },
  { label: "Order Online", href: "/" },
  { label: "login", href: "/" },
];

export function Header() {
  return (
    <header style={{ width: "100%" }}>
      <Container maxWidth={"lg"}>
        <Grid
          container
          xs={12}
          alignItems={"center"}
          sx={{ height: "fit-content", pt: 2 }}
        >
          <Grid item md={3}>
            <img
              alt={"little lemon logo "}
              src={"/imgs/Logo .svg"}
              height={60}
            />
          </Grid>
          <Grid item md={8} container justifyContent={"flex-end"}>
            {navOptions.map(({ label, href }) => (
              <Button component={"a"} href={href}>
                {label.toUpperCase()}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
