import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { SpecialsCard } from "../../../../components/specials/specialsCard";

export function WeekSpecialsSection() {
  return (
    <Container maxWidth={"lg"} sx={{ paddingY: 2 }}>
      <Grid item container xs={12}>
        <Grid
          item
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <h2
              style={{ color: "black", fontSize: 44, padding: 0, margin: 10 }}
            >
              This weeks specials!
            </h2>
          </Grid>
          <Grid item>
            <Button variant={"contained"} color={"secondary"} fullWidth>
              Online Menu
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <SpecialsCard />
          <SpecialsCard />
          <SpecialsCard />
        </Grid>
      </Grid>
    </Container>
  );
}
