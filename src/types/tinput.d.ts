interface TInput {
  value?: string;
  placeholder?: string;
  label?: string;
  pattern?: "primary" | "secondary" | "alert";
  type: "text" | "password" | "textarea" | "email";
  onChange: () => void;
  props?: TInputProps;
}
