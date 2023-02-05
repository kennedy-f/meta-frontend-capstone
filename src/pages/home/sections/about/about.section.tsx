import { Container, Grid } from "@mui/material";
import React from "react";

export function AboutSection() {
  return (
    <Container>
      <Container
        maxWidth={"lg"}
        sx={{ color: "#000", height: { md: 400, xs: 800 } }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <article>
              <h3 style={{ fontSize: 40, marginBottom: 0, color: "#000000" }}>
                Little Lemon
              </h3>
              <h4 style={{ fontSize: 20, marginTop: 0 }}> Chicago </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum esse reiciendis reprehenderit? Dolore dolorem doloribus
                dolorum excepturi itaque maxime modi non nulla possimus, quia
                quisquam saepe sed, veritatis voluptas voluptatum.
              </p>
            </article>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <img
                src={"/imgs/Mario and Adrian b.jpg"}
                alt={"food"}
                height={250}
                width={350}
                style={{
                  position: "absolute",
                  top: 130,
                  right: -15,
                  borderRadius: 20,
                }}
              />
              <img
                src={"/imgs/Mario and Adrian A.jpg"}
                alt={"food"}
                height={250}
                width={350}
                style={{
                  top: 30,
                  position: "absolute",
                  borderRadius: 20,
                  left: 0,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
