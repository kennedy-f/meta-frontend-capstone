import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import { BookingScreen } from "../pages/booking";
import { Home } from "../pages/home";

function AppOutlet() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppOutlet />}>
          <Route path={"/"} element={<Home />} index />
          <Route element={<BookingScreen />} path={"/booking"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
