import { useCallback, useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { onOpen, onClose, isOpen };
};

export default useDisclosure;
