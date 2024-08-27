import Button from "../../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBook,
  faTableColumns,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import usePathEmphasis from "../../../../hooks/usePathEmphasis";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        onClick={() => {
          navigate("/management/timeline");
        }}
        pattern="secondary-button"
        style={usePathEmphasis(
          "/management/timeline",
          "animate-moveContainerDown"
        )}
      >
        <FontAwesomeIcon
          icon={faTableList}
          className="icon-management sm:hidden md:inline-block"
        />
        Linha do tempo
      </Button>
      <Button
        onClick={() => {
          navigate("/management/panel");
        }}
        pattern="secondary-button"
        style={usePathEmphasis(
          "/management/panel",
          "animate-moveContainerDown"
        )}
      >
        <FontAwesomeIcon
          icon={faTableColumns}
          className="icon-management sm:hidden md:inline-block"
        />
        Painel
      </Button>
      <Button
        onClick={() => {
          navigate("/management/backlog");
        }}
        pattern="secondary-button"
        style={usePathEmphasis(
          "/management/backlog",
          "animate-moveContainerDown"
        )}
      >
        <FontAwesomeIcon
          icon={faBook}
          className="icon-management sm:hidden md:inline-block"
        />
        Backlog
      </Button>
      <Button
        onClick={() => {
          navigate("/management/items");
        }}
        pattern="secondary-button"
        style={usePathEmphasis(
          "/management/items",
          "animate-moveContainerDown"
        )}
      >
        <FontAwesomeIcon
          icon={faAward}
          className="icon-management sm:hidden md:inline-block"
        />
        Itens
      </Button>
    </div>
  );
};

export default Header;
