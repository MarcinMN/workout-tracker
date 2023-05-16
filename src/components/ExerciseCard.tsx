import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const ExerciseCard = () => {
  return (
    <Card align="center" padding="20px" backgroundColor="gray">
      <CardHeader padding="5px">
        <Heading>Exercise Name</Heading>
      </CardHeader>
      <CardBody padding="5px">
        <Text align="center">Equipment Name</Text>
      </CardBody>
      <CardFooter padding="5px">
        <HStack>
          <Button colorScheme="green">Change Weight</Button>
          <Button colorScheme="green">Change Equipment</Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
