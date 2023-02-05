import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React, { useState } from "react";

import { BookingValidation } from "./booking.validation";

const hours = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function BookingForm() {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      date: new Date(),
      numberOfDinners: 0,
      occasion: null,
      time: null,
    },
    validationSchema: BookingValidation,
    onSubmit: () => {
      //
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container gap={2}>
        <Grid item xs={12} md={6}>
          <DatePicker
            label={"data"}
            {...getFieldProps("date")}
            // helperText={touched.date && errors.date}
            renderInput={(params) => (
              <TextField
                error={touched.date && !!errors.date}
                helperText={touched.date && String(errors.date)}
                {...params}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TimePicker
            {...getFieldProps("time")}
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
            {...getFieldProps("numberOfDinners")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            renderInput={(params) => <TextField {...params} />}
            {...getFieldProps("occasion")}
            fullWidth
            options={["Birthday", "Anniversary"]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant={"contained"} type={"submit"}>
            Make your reservation
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
