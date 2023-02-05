import * as yup from "yup";

export const BookingValidation = yup.object({
  date: yup.date().min(new Date()).required(),
  numberOfDinners: yup.number().min(1).required(),
  occasion: yup.string().nullable(),
  time: yup.string().nullable(),
});
