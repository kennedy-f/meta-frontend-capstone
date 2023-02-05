import React from "react";
import { InputTypeProps, UIInput } from "../inputs";
import { UILabel } from "../inputs/label";

interface TextFieldProps extends InputTypeProps {
  label: string;
}

export function TextField({ label, ...props }: TextFieldProps) {
  return (
    <>
      <UILabel htmlFor={props.id} style={{ color: "black" }}>
        {label}
      </UILabel>
      <UIInput {...props} />
    </>
  );
}
