import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React, { useState } from "react";

import { BookingValidation } from "./booking.validation";

const hours = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function BookingForm() {
  const [values, setValues] = useState({
    date: "",
    resTime: "",
    guests: 0,
    occasion: "",
  });

  const handleChange =
    (name: keyof typeof values) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { currentTarget } = event;

      const { value } = currentTarget;
      setValues({ ...values, [name]: value });
    };

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
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            id="res-time"
            options={hours}
            value={values.resTime}
            fullWidth
            renderInput={(props) => <TextField {...props} label={"time"} />}
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
