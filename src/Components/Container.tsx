import React from "react";

interface IProps {
  children: TChildren;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className="bg-white w-auto rounded-lg shadow-lg mt-4 mb-4 p-7 xl:h-xl-fit-container">
      {children}
    </div>
  );
};

export default Container;
