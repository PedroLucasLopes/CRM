import React from "react";

const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  pattern = "primary-button",
  style,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} className={`${pattern} ${style}`}>
      {children}
    </button>
  );
};

export default Button;
