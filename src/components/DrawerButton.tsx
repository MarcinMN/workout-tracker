import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const DrawerButton = () => {
  return (
    <IconButton aria-label="Select Exercises" icon={<RxHamburgerMenu />} />
  );
};

export default DrawerButton;
