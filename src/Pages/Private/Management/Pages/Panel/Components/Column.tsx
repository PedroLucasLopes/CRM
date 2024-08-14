import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Divider from "../../../../../../Components/Divider";

interface IProps {
  title: string;
}

const Column: React.FC<IProps> = ({ title }) => {
  return (
    <div className="w-64 h-xl-fit-column p-3 shadow-md rounded-sm bg-slate-100">
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center font-medium">
          {title}
          <button className="opacity-50 hover:opacity-100 transition-all p-0 m-0">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default Column;
