import { HStack, Heading } from "@chakra-ui/react";
import DrawerButton from "./DrawerButton";
import SearchButton from "./SearchButton";

const NavBar = () => {
  return (
    <HStack padding="5px" justifyContent="space-between">
      <DrawerButton />
      <Heading size="lg">Workout Tracker</Heading>
      <SearchButton />
    </HStack>
  );
};

export default NavBar;
