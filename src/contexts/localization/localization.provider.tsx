import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface LocalizationProvider {
  children: React.ReactNode | React.ReactElement;
}

export function UILocalizationProvider({ children }: LocalizationProvider) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
}
