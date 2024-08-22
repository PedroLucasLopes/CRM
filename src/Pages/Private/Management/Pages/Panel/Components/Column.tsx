import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Divider from "../../../../../../Components/Divider";
import Task from "./Task";

interface IProps {
  title: string;
  tasks: { name: string; tags: string[]; id: string }[] | null;
}

const Column: React.FC<IProps> = ({ title, tasks }) => {
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
      {tasks &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      <button className="opacity-80 hover:shadow-md hover:opacity-100 transition-all p-2 w-full">
        <FontAwesomeIcon icon={faPlus} className="mr-1" /> Criar Item
      </button>
    </div>
  );
};

export default Column;
