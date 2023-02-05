import React, { useState } from "react";
import { UISelect } from "../../../components/inputs";
import { TextField } from "../../../components/text-field";

import "./form.style.css";
import "../../../components/buttom/button.style.css";

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

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <TextField placeholder={"text"} label={"Teste"} />
      <TextField
        label={"data"}
        type="date"
        id="res-date"
        value={values.date}
        onChange={handleChange("date")}
      />
      <label htmlFor="res-time">Choose time</label>
      <UISelect
        label={"time"}
        id="res-time"
        value={values.resTime}
        onChange={handleChange("resTime")}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </UISelect>
      <TextField
        label={"Number of guests"}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={values.guests}
        onChange={handleChange("guests")}
      />
      <label htmlFor="occasion">Occasion</label>
      <UISelect
        id="occasion"
        value={values.occasion}
        label={"occasion"}
        placeholder={"Occasion"}
        onChange={handleChange("occasion")}
      >
        <option> </option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </UISelect>
      <input
        type="submit"
        className={"button radius"}
        value="Make Your reservation"
      />
    </form>
  );
}
