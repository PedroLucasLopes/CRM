import React from "react";

interface IProps {
  children: TChildren;
  size?: string;
}

const MidTitle: React.FC<IProps> = ({ children, size = "3xl" }) => {
  return (
    <p className={`text-${size} sm:w-auto md:w-full text-center`}>{children}</p>
  );
};

export default MidTitle;
