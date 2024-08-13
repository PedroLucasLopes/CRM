import React from "react";

interface IProps {
  children: TChildren;
}

const Title: React.FC<IProps> = ({ children }) => {
  return <h1 className="text-left font-bold text-3xl">{children}</h1>;
};

export default Title;
