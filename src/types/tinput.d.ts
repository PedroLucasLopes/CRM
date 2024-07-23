interface TInput {
  value?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  pattern?: "primary" | "secondary" | "alert";
  type: "text" | "password" | "textarea" | "email";
  onBlur: FocusEvent<HTMLInputElement, Element>;
}
