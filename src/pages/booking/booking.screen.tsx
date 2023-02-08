import { LoadingButton } from "@mui/lab";
import { Grid, Container, Typography } from "@mui/material";
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Booking, BookingForm } from "../../modules";
import { BookingValidation } from "../../modules/booking/form/booking.validation";
import { submitAPI } from "../../services";
import { AboutSection, HeroSection } from "../home/sections";

export function BookingScreen() {
  const [loading, setLoading] = useState(false);
  const handleConfirm = async (booking: Booking) => {
    setLoading(true);
    const isValid = await BookingValidation.validate(booking);
    if (isValid) {
      const response = submitAPI(booking);
      await wait(600);
      if (response) {
        toast.success("Agendado com sucesso");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <HeroSection />
      <Container>
        <Grid
          container
          gap={2}
          justifyContent={"center"}
          alignContent={"center"}
          sx={{ height: 560 }}
        >
          <Grid item xs={12}>
            <Typography variant={"h3"} color={"primary"}>
              Reservations
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <BookingForm onSubmit={handleConfirm} />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={3}>
              <LoadingButton
                variant={"contained"}
                type={"submit"}
                form={"booking-form"}
                loading={loading}
                fullWidth
                data-testid={"booking-submit-button"}
              >
                Make your reservation
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
