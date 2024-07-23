interface IButtonProps {
  children: TChildren;
  onClick: () => void;
  type?: "button" | "reset" | "submit";
}
