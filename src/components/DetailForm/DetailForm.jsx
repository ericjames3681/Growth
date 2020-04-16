import React from "react";
import { Card, Header } from "semantic-ui-react";

const DetailForm = (props) => {
  let detail = this.props.plantId ? (
    <Card.Content>
      <Header>{props.plantId.scientific_name}</Header>
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
