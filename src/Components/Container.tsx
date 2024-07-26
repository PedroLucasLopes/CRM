import React from "react";

interface IProps {
  children: TChildren;
}

const Container: React.FC<IProps> = ({ children }) => {
  return <div className="bg-white w-full h-full">{children}</div>;
};

export default Container;
