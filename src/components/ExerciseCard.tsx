import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import SetTotals from "./SetTotals";

const ExerciseCard = () => {
  return (
    <Card align="center">
      <CardHeader>
        <Heading>Exercise Name</Heading>
      </CardHeader>
      <CardBody>
        <SetTotals />
      </CardBody>
    </Card>
  );
};

export default ExerciseCard;
