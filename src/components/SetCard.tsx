import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import SetTotals from "./SetTotals";

const SetCard = () => {
  return (
    <Card align="center">
      <CardBody>
        <SetTotals />
      </CardBody>
    </Card>
  );
};

export default SetCard;
