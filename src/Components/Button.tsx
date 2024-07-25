import React from "react";

const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  pattern = "primary-button",
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} className={pattern}>
      {children}
    </button>
  );
};

export default Button;
