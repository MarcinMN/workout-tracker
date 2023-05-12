import { Box, Divider, HStack, Text } from "@chakra-ui/react";

const SetTotals = () => {
  return (
    <HStack>
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
      <Divider orientation="vertical" />
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
      <Divider orientation="vertical" />
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
    </HStack>
  );
};

export default SetTotals;
