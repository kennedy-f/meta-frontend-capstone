import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React from "react";

import { BookingValidation } from "./booking.validation";

export interface Booking {
  date: Date;
  numberOfGuests: number;
  occasion: string;
  time: Date;
}

export function BookingForm({
  onSubmit,
}: {
  onSubmit: (data: Booking) => void;
}) {
  const {
    getFieldProps,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    values,
  } = useFormik({
    initialValues: {
      date: new Date(),
      numberOfGuests: 0,
      occasion: "",
      time: new Date(),
    },
    validationSchema: BookingValidation,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container gap={2}>
        <Grid item xs={12} md={6}>
          <DatePicker
            label={"date"}
            onChange={(dateValue) => setFieldValue("date", dateValue)}
            value={values.date}
            minDate={new Date()}
            renderInput={(params) => (
              <TextField
                name={"date"}
                error={touched.date && !!errors.date}
                {...params}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker
            label={"time"}
            onChange={(timeValue) => setFieldValue("time", timeValue)}
            value={values.time}
            renderInput={(props) => (
              <TextField {...props} label={"time"} fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label={"Number of guests"}
            type={"number"}
            fullWidth
            {...getFieldProps("numberOfGuests")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            value={values.occasion}
            renderInput={(params) => (
              <TextField {...params} label={"Occasion"} />
            )}
            onChange={(_, value) => setFieldValue("occasion", String(value))}
            fullWidth
            options={["Birthday", "Anniversary"]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            variant={"contained"}
            type={"submit"}
            data-testid={"booking-submit-button"}
          >
            Make your reservation
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
