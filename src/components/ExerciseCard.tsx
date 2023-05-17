import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const ExerciseCard = () => {
  return (
    <Card align="center" padding="20px" backgroundColor="gray">
      <CardHeader padding="5px">
        <Heading>Bicep Curls</Heading>
      </CardHeader>
      <CardBody padding="5px">
        <Text align="center">Dumbbells</Text>
      </CardBody>
      <CardFooter padding="5px">
        <Button colorScheme="green">Change Equipment</Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
