import React from "react";

interface IProps {
  children: TChildren;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div
      className={`bg-white w-full h-full rounded-lg shadow-lg mt-4 mb-4 p-5 xl:h-xl-fit-container`}
    >
      {children}
    </div>
  );
};

export default Container;
