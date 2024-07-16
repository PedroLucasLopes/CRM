interface TInput {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  style?: "primary" | "secondary" | "alert";
  type: "text" | "password" | "textarea" | "email";
  onChange: () => void;
}
