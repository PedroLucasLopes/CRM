import Button from "../../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBook,
  faTableColumns,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        onClick={() => {}}
        pattern="secondary-button"
        style="animate-moveContainerDown"
      >
        <FontAwesomeIcon icon={faTableList} className="icon-management" />
        Linha do tempo
      </Button>
      <Button
        onClick={() => {}}
        pattern="secondary-button"
        style="animate-moveContainerDown100"
      >
        <FontAwesomeIcon icon={faTableColumns} className="icon-management" />
        Painel
      </Button>
      <Button
        onClick={() => {}}
        pattern="secondary-button"
        style="animate-moveContainerDown200"
      >
        <FontAwesomeIcon icon={faBook} className="icon-management" />
        Backlog
      </Button>
      <Button
        onClick={() => {}}
        pattern="secondary-button"
        style="animate-moveContainerDown300"
      >
        <FontAwesomeIcon icon={faAward} className="icon-management" />
        Itens
      </Button>
    </div>
  );
};

export default Header;
