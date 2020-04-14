import React from "react";
import { Card } from "semantic-ui-react";

function SearchResultsList(props) {
  // create that list of jsx
  const plants = props.plantsResults.map((plant, i) => {
    return (
      <Card key={i}>
        <Card.Content>
          <Card.Header>{plant.Species}</Card.Header>
          <Card.Description>DESCRIPTION</Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return (
    <React.Fragment>
      <h1>L I S T</h1>
      <ul>{plants}</ul>
    </React.Fragment>
  );
}

export default SearchResultsList;
