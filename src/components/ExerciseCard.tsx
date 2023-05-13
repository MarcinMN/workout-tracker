import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

const ExerciseCard = () => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading>Exercise Name</Heading>
      </CardHeader>
      <CardBody>
        <Text>Equipment Name</Text>
      </CardBody>
    </Card>
  );
};

export default ExerciseCard;
