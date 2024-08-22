import { useCallback, useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { onOpen, isOpen };
};

export default useDisclosure;
