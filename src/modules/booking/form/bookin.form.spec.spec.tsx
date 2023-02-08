import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { UILocalizationProvider } from "../../../contexts/localization";
import { Booking, BookingForm } from "./booking.form";

describe("bookin.form.spec", () => {
  it("Should render", () => {
    const { container } = render(
      <UILocalizationProvider>
        <BookingForm onSubmit={() => null} />
      </UILocalizationProvider>
    );
    expect(container).toMatchSnapshot();
  });
  it("Should fill inputs and submit form", async () => {
    const mockFn = jest.fn((data: Booking) => console.log(data));
    render(
      <UILocalizationProvider>
        <BookingForm onSubmit={mockFn} />
      </UILocalizationProvider>
    );

    const dataInput = screen.getByLabelText("date");
    const timeInput = screen.getByLabelText("time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionInput = screen.getByLabelText("Occasion");
    const confirmButton = screen.getByTestId("booking-submit-button");

    act(() => {
      fireEvent.change(dataInput, {
        target: {
          value: "01/01/2050",
        },
      });

      fireEvent.change(timeInput, {
        target: {
          value: "09:05 pm",
        },
      });

      fireEvent.change(guestsInput, {
        target: {
          value: "2",
        },
      });

      userEvent.click(confirmButton);
    });

    const values = {
      date: new Date("2050-01-01T03:00:00.000Z"),
      numberOfGuests: 2,
      occasion: "",
      time: new Date("2023-02-06T00:05:00"),
    };

    await waitFor(() => expect(mockFn).toHaveBeenCalled());
  });
});
