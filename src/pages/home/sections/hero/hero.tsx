import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";

export function HeroSection() {
  return (
    <Box
      className={"container-xlg bg-green"}
      sx={{ height: "fit-content", background: "var(--bg-green)", paddingY: 2 }}
    >
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <article>
              <div>
                <h1> Little lemon </h1>
                <h2> Chicago </h2>
                <p>
                  We are a family owned Mediterranean restaurant, focused on
                  traditional recipes served with a modern twist
                </p>
                <Button>Reserve a Table</Button>
              </div>
            </article>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifySelf={"flex-end"}
            justifyContent={"flex-end"}
          >
            <img
              src={"/imgs/restauranfood.jpg"}
              alt={"restaurant food"}
              width={500}
              style={{
                borderRadius: "16px",
                width: "400px",
                height: "450px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
