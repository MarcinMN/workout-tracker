import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import SetTotals from "./SetTotals";

const SetCard = () => {
  return (
    <Card align="center" padding="20px" backgroundColor="lightblue">
      <CardBody>
        <Text align="center" fontSize="4xl">
          Weight
        </Text>
        <Text align="center" paddingTop="20px">
          Previous:
        </Text>
        <SetTotals />
        <Text align="center" fontSize="sm">
          Date
        </Text>
        <Text align="center" paddingTop="20px">
          Current:
        </Text>
        <SetTotals />
      </CardBody>
    </Card>
  );
};

export default SetCard;
