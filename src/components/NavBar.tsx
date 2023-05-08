import { HStack, Heading } from "@chakra-ui/react";
import React from "react";
import DrawerButton from "./DrawerButton";
import SearchButton from "./SearchButton";

const NavBar = () => {
  return (
    <HStack>
      <DrawerButton />
      <Heading>Workout Tracker</Heading>
      <SearchButton />
    </HStack>
  );
};

export default NavBar;
