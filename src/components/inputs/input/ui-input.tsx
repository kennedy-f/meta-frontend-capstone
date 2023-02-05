import React from "react";
import "../ui-input.css";

export type InputTypeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function UIInput({ ...props }: InputTypeProps) {
  return <input className={"input"} {...props} />;
}
