import React from "react";
import { Card, Button } from "semantic-ui-react";

function SearchResultsList(props) {
  // create that list of jsx
  const plants = props.plantsResults.map((plant, i) => {
    return (
      <Card centered key={i}>
        <Card.Content>
          <Card.Header>{plant.scientific_name.toUpperCase()}</Card.Header>
          <Button primary>A D D</Button>
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
