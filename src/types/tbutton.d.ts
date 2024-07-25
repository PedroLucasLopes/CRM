interface IButtonProps {
  children: TChildren;
  pattern?: "primary-button" | "secondary-button";
  type?: "button" | "reset" | "submit";
  style?: string;
  onClick: () => void;
}
