import React from "react";
import Kanban from "./Components/Kanban";
import Container from "../../../../../Components/Container";
import Title from "../../../../../Components/Title";
import Divider from "../../../../../Components/Divider";
import Button from "../../../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Panel = () => {
  return (
    <Container>
      <div className="animate-changeOpacity">
        <div className="flex justify-between items-center">
          <Title>Nome da Sprint</Title>
          <Button onClick={() => {}}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Adicionar Coluna
          </Button>
        </div>
        <Divider />
      </div>
      <Kanban />
    </Container>
  );
};

export default Panel;
