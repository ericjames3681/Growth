import React from "react";
import { Card, Button, List } from "semantic-ui-react";

function SearchResultsList(props) {
  // create that list of jsx
  const plants = props.searchTerm.map((plant, i) => {
    return (
      <Card key={i}>
        <Card.Content>
          <Card.Header>{plant.common_name}</Card.Header>
          <p>{plant.scientific_name.toUpperCase()}</p>
          <Button primary>V I E W</Button>
        </Card.Content>
      </Card>
    );
  });

  return (
    <React.Fragment>
      <h1>L I S T</h1>
      <List>{plants}</List>
    </React.Fragment>
  );
}

export default SearchResultsList;
