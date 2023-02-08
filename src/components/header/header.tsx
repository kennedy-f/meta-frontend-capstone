import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const navOptions: { label: string; href: string }[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/#about" },
  { label: "menu", href: "/#menu" },
  { label: "reservations", href: "/booking" },
  { label: "Order Online", href: "/#order-online" },
  { label: "login", href: "/#login" },
];

export function NavMenuLink({ href, label }: { href: string; label: string }) {
  const navigate = useLocation();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(navigate?.pathname === href);
  }, [navigate]);

  return (
    <Button
      variant={isActive ? "contained" : "text"}
      component={NavLink}
      to={href}
      ref={buttonRef}
    >
      {label.toUpperCase()}
    </Button>
  );
}

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
              <NavMenuLink label={label} href={href} key={`${label}${href}`} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
