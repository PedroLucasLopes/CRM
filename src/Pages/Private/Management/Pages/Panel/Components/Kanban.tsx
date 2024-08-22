import { useState } from "react";
import Column from "./Column";

const Kanban = () => {
  const defaultColumns = [
    {
      title: "A Fazer",
      tasks: [
        {
          name: "Task Name",
          tags: ["Custom", "Epic"],
          id: "TSK-001",
        },
        {
          name: "Task Name 2",
          tags: ["Test"],
          id: "TSK-002",
        },
        {
          name: "Task Name 3",
          tags: ["Epic"],
          id: "TSK-003",
        },
      ],
    },
    {
      title: "Fazendo",
      tasks: [
        {
          name: "Task Name 4",
          tags: ["Custom"],
          id: "TSK-004",
        },
        {
          name: "Task Name 5",
          tags: ["Epic", "Bug"],
          id: "TSK-005",
        },
      ],
    },
    {
      title: "Concluído",
      tasks: [
        {
          name: "Task Name 6",
          tags: ["Test"],
          id: "TSK-006",
        },
        {
          name: "Task Name 7",
          tags: ["Epic"],
          id: "TSK-007",
        },
      ],
    },
  ];
  const [columns] = useState(defaultColumns);
  return (
    <div className="flex justify-start items-center h-xl-fit-column gap-5">
      {columns &&
        columns.map(
          ({
            title,
            tasks,
          }: {
            title: string;
            tasks: { name: string; tags: string[]; id: string }[] | null;
          }) => {
            return <Column title={title} tasks={tasks} key={title} />;
          }
        )}
    </div>
  );
};

export default Kanban;
