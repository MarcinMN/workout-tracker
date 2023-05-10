import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="ghost"
        aria-label="Select Exercises"
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Choose Exercise...
          </DrawerHeader>
          <DrawerBody>
            <p>Exercise #1</p>
            <p>Exercise #2</p>
            <p>Exercise #3</p>
            <p>Exercise #4</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuButton;
