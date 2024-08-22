import React, { useState, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  size?: string;
}

const Modal: React.FC<IProps> = ({ children, isOpen, size = "md" }) => {
  const [open, setOpen] = useState<boolean>(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(!isOpen);
  };

  return (
    open && (
      <div
        className="bg-neutral-700 bg-opacity-30 w-screen h-screen absolute top-0 left-0 flex justify-center items-center"
        onClick={handleClose}
      >
        <div
          className={`${size} bg-white z-50 animate-moveContainerDown`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
