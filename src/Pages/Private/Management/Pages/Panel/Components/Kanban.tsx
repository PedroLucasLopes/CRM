import { useState } from "react";
import Column from "./Column";

const Kanban = () => {
  const defaultColumns = [
    {
      title: "A Fazer",
    },
    {
      title: "Fazendo",
    },
    {
      title: "Concluído",
    },
  ];
  const [columns] = useState(defaultColumns);
  return (
    <div className="flex justify-start items-center h-xl-fit-column gap-5">
      {columns &&
        columns.map(({ title }: { title: string }) => {
          return <Column title={title} />;
        })}
    </div>
  );
};

export default Kanban;
