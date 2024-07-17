import React from "react";

interface IProps {
  children: TChildren;
}

const MidTitle: React.FC<IProps> = ({ children }) => {
  return <p className="text-3xl sm:w-80 md:w-full text-center">{children}</p>;
};

export default MidTitle;
