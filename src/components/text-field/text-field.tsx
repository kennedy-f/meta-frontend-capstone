import React from "react";
import { InputTypeProps, UIInput } from "../inputs";

interface TextFieldProps extends InputTypeProps {
  label: string;
}

export function TextField({ label, ...props }: TextFieldProps) {
  return (
    <>
      <label htmlFor={props.id} style={{ color: "black" }}>
        {label}
      </label>
      <UIInput {...props} />
    </>
  );
}
