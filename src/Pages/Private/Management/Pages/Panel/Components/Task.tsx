import React from "react";
import MidTitle from "../../../../../../Components/MidTitle";

interface IProps {
  task: { name: string; tags: string[]; id: string } | null;
}

const Task: React.FC<IProps> = ({ task }) => {
  return (
    <button className="bg-white shadow-md w-full h-28 rounded-lg mb-4 p-2">
      <MidTitle size="sm font-bold">{task?.name}</MidTitle>
      <div className="flex gap-2">
        {task?.tags.map((tag: string) => {
          return <button className="mt-2 mb-2">{tag}</button>;
        })}
      </div>
      <p className="text-left font-medium">{task?.id}</p>
    </button>
  );
};

export default Task;
