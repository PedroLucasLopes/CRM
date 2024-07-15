import React from "react";
import Navbar from "../Components/Navbar";

interface IProps {
  children: TChildren;
}

const PrivateTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PrivateTemplate;
