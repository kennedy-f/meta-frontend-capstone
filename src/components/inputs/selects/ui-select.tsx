import React from "react";
import "../ui-input.css";
import { LabelProps, UILabel } from "../label";

export type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export interface UISelectProps extends SelectProps {
  label: React.ReactNode;
  labelProps?: LabelProps;
}

export function UISelect({ children, label, ...props }: UISelectProps) {
  return (
    <>
      <UILabel>{label}</UILabel>
      <select className={"input"} {...props}>
        {children}
      </select>
    </>
  );
}
