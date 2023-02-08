import { Autocomplete, Grid, TextField } from "@mui/material";
import { ClockPickerView, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React, { useMemo } from "react";
import { fetchAPI } from "../../../services";

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
    handleBlur,
    setErrors,
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

  const availableTimes = fetchAPI(new Date());

  const enableAvalableTimes = (
    timeValue: number,
    clockType: ClockPickerView
  ): boolean => {
    if (clockType === "hours") {
      const availableHours = availableTimes.find(
        (time) => Number(time.split(":")[0]) === timeValue
      );
      return !availableHours;
    }

    if (clockType === "minutes") {
      const findThisHoursMinutes = availableTimes.filter(
        (time) => Number(time.split(":")[0]) === values.time.getHours()
      );

      if (findThisHoursMinutes.length > 0) {
        const availableMinute = findThisHoursMinutes.find(
          (findMinutes) => Number(findMinutes.split(":")[1]) === timeValue
        );

        return !availableMinute;
      }
    }
    return true;
  };

  const isAvailable = useMemo(() => {
    const isValidHour = enableAvalableTimes(values.time.getHours(), "hours");
    const isValidMinute = enableAvalableTimes(
      values.time.getMinutes(),
      "minutes"
    );

    const isValidTime = !isValidHour && !isValidMinute;

    if (!isValidTime) {
      setErrors({ ...errors, time: "Not available time" });
      return !isValidTime;
    }

    const { time, ...rest } = errors;

    setErrors({ ...rest });

    return !isValidTime;
  }, [values.time, errors]);

  return (
    <form onSubmit={handleSubmit} id={"booking-form"}>
      <Grid container gap={2} item xs={12}>
        <Grid item xs={12} md={5}>
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
        <Grid item xs={12} md={5}>
          <TimePicker
            label={"time"}
            shouldDisableTime={enableAvalableTimes}
            onChange={(timeValue) => setFieldValue("time", timeValue)}
            value={values.time}
            renderInput={(props) => (
              <TextField
                {...props}
                label={"time"}
                onBlur={handleBlur("time")}
                fullWidth
                // @ts-ignore
                helperText={touched.time && errors.time}
                error={touched.time && isAvailable}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label={"Number of guests"}
            type={"number"}
            fullWidth
            {...getFieldProps("numberOfGuests")}
            error={touched.numberOfGuests && !!errors.numberOfGuests}
            helperText={touched.numberOfGuests && errors.numberOfGuests}
          />
        </Grid>
        <Grid item xs={12} md={5}>
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
      </Grid>
    </form>
  );
}
