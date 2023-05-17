import { HStack, StackDivider, Text } from "@chakra-ui/react";

const SetTotals = () => {
  // Show set values inside boxes with borders
  /*return (
    <HStack>
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
      <Box w="50px" h="50px" padding="5px 5px" textAlign="center" border="1px">
        <Text fontSize="2xl">10</Text>
      </Box>
    </HStack>
  );*/

  // Show set values with vertical dividers between the values
  return (
    <HStack divider={<StackDivider borderColor="gray.900" />}>
      <Text fontSize="4xl" padding="5px">
        10
      </Text>
      <Text fontSize="4xl" padding="5px">
        10
      </Text>
      <Text fontSize="4xl" padding="5px">
        10
      </Text>
    </HStack>
  );
};

export default SetTotals;
