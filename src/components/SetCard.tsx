import { Button, Card, CardBody, CardFooter, Text } from "@chakra-ui/react";
import SetTotals from "./SetTotals";

const SetCard = () => {
  return (
    <Card align="center" padding="20px" backgroundColor="lightblue">
      <CardBody>
        <Text align="center" fontSize="6xl">
          30 lbs
        </Text>
        <Text align="center" paddingTop="20px">
          Previous:
        </Text>
        <SetTotals />
        <Text align="center" fontSize="sm" paddingTop="5px">
          05/15/2023
        </Text>
        <Text align="center" paddingTop="20px">
          Current:
        </Text>
        <SetTotals />
      </CardBody>
      <CardFooter padding="5px">
        <Button colorScheme="green">Change Weight</Button>
      </CardFooter>
    </Card>
  );
};

export default SetCard;
