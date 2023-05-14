import { Button, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

const RepInput = () => {
  return (
    <HStack padding="10px">
      <Text whiteSpace="nowrap">Set #1:</Text>
      <Input placeholder="Enter number of reps" />
      <Button colorScheme="green">Submit</Button>
    </HStack>
  );
};

export default RepInput;
