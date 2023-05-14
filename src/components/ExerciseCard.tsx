import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

const ExerciseCard = () => {
  return (
    <Card align="center" padding="20px" backgroundColor="gray">
      <CardHeader padding="5px">
        <Heading>Exercise Name</Heading>
      </CardHeader>
      <CardBody padding="5px">
        <Text align="center" fontSize="4xl">
          Weight
        </Text>
        <Text align="center">Equipment Name</Text>
      </CardBody>
    </Card>
  );
};

export default ExerciseCard;
