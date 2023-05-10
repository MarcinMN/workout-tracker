import { HStack, Heading } from "@chakra-ui/react";
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

const NavBar = () => {
  return (
    <HStack padding="5px" justifyContent="space-between">
      <MenuButton />
      <Heading size="lg">Workout Tracker</Heading>
      <SearchButton />
    </HStack>
  );
};

export default NavBar;
