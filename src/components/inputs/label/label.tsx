export type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export function UILabel({ children, ...props }: LabelProps) {
  return (
    <label {...props} style={{ color: "#000" }}>
      {children}
    </label>
  );
}
