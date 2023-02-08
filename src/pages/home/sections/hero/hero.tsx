import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export function HeroSection() {
  return (
    <Box
      className={"container-xlg bg-green"}
      sx={{
        background: "var(--bg-green)",
        height: {
          md: 400,
          xs: "fit-content",
        },
        marginBottom: {
          md: 6,
          xs: 0,
        },
        paddingY: 2,
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            alignItems={"center"}
            container
            sx={{
              height: {
                md: 400,
                xs: "fit-content",
              },
            }}
          >
            <article>
              <Typography variant={"h1"} color={"secondary"}>
                Little lemon
              </Typography>
              <Typography variant={"h2"} color={"white"} mb={2}>
                Chicago
              </Typography>
              <Typography variant={"body1"} color={"white"} mb={2}>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist
              </Typography>
              <Button
                color={"secondary"}
                variant={"contained"}
                component={Link}
                to={"/booking"}
              >
                Reserve a Table
              </Button>
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
              loading={"lazy"}
              style={{
                borderRadius: "16px",
                width: "400px",
                height: "450px",
                position: "absolute",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
