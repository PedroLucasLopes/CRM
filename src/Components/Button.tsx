import React from "react";

const Button: React.FC<IButtonProps> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#DB4A2B] text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out
  hover:bg-[#c74326] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4A2B] active:bg-[#b23b21] mt-3"
    >
      {children}
    </button>
  );
};

export default Button;
