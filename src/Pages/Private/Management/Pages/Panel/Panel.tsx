import Kanban from "./Components/Kanban";
import Container from "../../../../../Components/Container";
import Title from "../../../../../Components/Title";
import Divider from "../../../../../Components/Divider";
import Button from "../../../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useDisclosure from "../../../../../hooks/useDisclosure";
import Modal from "../../../../../Components/Modal";

const Panel = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Container>
        <div className="animate-changeOpacity">
          <div className="flex justify-between items-center">
            <Title>Nome da Sprint</Title>
            <Button onClick={onOpen}>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Adicionar Coluna
            </Button>
          </div>
          <Divider />
        </div>
        <Kanban />
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        Oi
      </Modal>
    </>
  );
};

export default Panel;
