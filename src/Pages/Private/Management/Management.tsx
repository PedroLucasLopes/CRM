import React from "react";
import Button from "../../../Components/Button";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Management = () => {
  return (
    <>
      <div className="md:w-md-fit-container xl:w-xl-fit-container pr-4 pl-4">
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={() => {}}
            pattern="secondary-button"
          >
            <FontAwesomeIcon icon={faTableList} />
            Linha do tempo
          </Button>
          <Button onClick={() => {}} pattern="secondary-button">
            Painel
          </Button>
          <Button onClick={() => {}} pattern="secondary-button">
            Backlog
          </Button>
          <Button onClick={() => {}} pattern="secondary-button">
            Itens
          </Button>
        </div>
      </div>
    </>
  );
};

export default Management;
