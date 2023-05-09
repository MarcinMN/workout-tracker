import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const DrawerButton = () => {
  return (
    <IconButton
      variant="ghost"
      aria-label="Select Exercises"
      icon={<RxHamburgerMenu />}
    />
  );
};

export default DrawerButton;
