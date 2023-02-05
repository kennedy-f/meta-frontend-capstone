import React from "react";
import "../ui-input.css";

export type UISelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export function UISelect({ children, ...props }: UISelectProps) {
  return (
    <select className={"input"} {...props}>
      {children}
    </select>
  );
}
