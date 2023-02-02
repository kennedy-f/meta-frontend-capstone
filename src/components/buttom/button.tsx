import React, { ButtonHTMLAttributes } from "react";
import "./button.style.css";

export function Button({ children, ...props }: ButtonHTMLAttributes<any>) {
  return (
    <button {...props} className={"radius"}>
      {" "}
      {children}{" "}
    </button>
  );
}
