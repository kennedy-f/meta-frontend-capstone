import React from "react";

export type InputTypeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function UIInput({ ...props }: InputTypeProps) {
  return <input className={"input"} {...props} />;
}
