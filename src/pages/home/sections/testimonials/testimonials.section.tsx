import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { TestimonialCard } from "pages/home/sections/testimonials/testimonial-card";

export function TestimonialsSection() {
  return (
    <Box
      sx={{
        background: "rgba(227,227,227,0.65)",
        height: "fit-content",
        padding: 2,
        width: "100%",
      }}
    >
      <Container maxWidth={"lg"}>
        <Grid container direction={"column"}>
          <Grid item>
            <h2 style={{ color: "black", textAlign: "center", fontSize: 48 }}>
              Testimonials
            </h2>
          </Grid>
          <Grid item container gap={2} xs={12} justifyContent={"center"}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
