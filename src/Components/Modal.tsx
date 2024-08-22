import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

interface IProps {
  children: TChildren;
  isOpen: boolean;
  size?: string;
  onOpen: () => void;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({
  children,
  isOpen,
  onOpen,
  onClose,
  size = "md",
}) => {
  useEffect(() => {
    onOpen;
    onClose;
  }, [isOpen, onClose, onOpen]);

  return (
    isOpen && (
      <div
        className="bg-neutral-700 bg-opacity-30 w-screen h-screen absolute top-0 left-0 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className={`${size} bg-white z-50 animate-moveContainerDown relative`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="opacity-30 transition-all hover:opacity-100 absolute right-7 top-4"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
