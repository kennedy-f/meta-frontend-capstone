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
          <Grid item xs={12} sm={8} md={6}>
            <h2
              style={{ color: "black", fontSize: 44, padding: 0, margin: 10 }}
            >
              This weeks specials!
            </h2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              marginBottom: {
                xs: 2,
                md: 0,
              },
            }}
          >
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
