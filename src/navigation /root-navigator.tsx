import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookingForm } from "../modules/booking/form/booking.form";
import { Home } from "../pages/home";

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path={"/"} />
        <Route
          element={<BookingForm onSubmit={(values) => console.log(values)} />}
          path={"/booking"}
        />
      </Routes>
    </BrowserRouter>
  );
}
