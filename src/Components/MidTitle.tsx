import React from "react";

interface IProps {
  children: TChildren;
}

const MidTitle: React.FC<IProps> = ({ children }) => {
  return <p className="text-3xl mb-5">{children}</p>;
};

export default MidTitle;
