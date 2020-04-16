import React from "react";
import { Card, Header } from "semantic-ui-react";

const DetailForm = (props) => {
  let detail = props.plantId ? (
    <Card.Content>
      <Header>{plantId.scientific_name}</Header>
    </Card.Content>
  ) : (
    <Card.Content>
      <Header>N O &nbsp; R E S U L T</Header>
    </Card.Content>
  );
  return (
    <Card size="huge" centered>
      {detail}
    </Card>
  );
};

export default DetailForm;
