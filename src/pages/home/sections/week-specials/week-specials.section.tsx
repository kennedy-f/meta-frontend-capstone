import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Specials } from "../../../../components/specials/specials";

export function WeekSpecialsSection() {
  return (
    <Container>
      <Grid item container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "black", fontSize: 44, padding: 0, margin: 10 }}>
            This weeks specials!
          </h2>
          <Button> Online Menu </Button>
        </div>
        <Grid container gap={3} justifyContent={"center"}>
          <Specials />
          <Specials />
          <Specials />
        </Grid>
      </Grid>
    </Container>
  );
}
