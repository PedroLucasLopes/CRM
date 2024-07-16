interface TInput {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  type: "text" | "password" | "textarea" | "email";
  onChange: () => void;
}
