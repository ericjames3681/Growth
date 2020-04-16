import React, { Component } from "react";
import { Card, Button, List } from "semantic-ui-react";
import PlantDetail from "../DetailForm/DetailForm";
import { Link } from "react-router-dom";
class SearchResultsList extends Component {
  constructor() {
    super();
  }

  render() {
    const plants = this.props.searchTerm.map((plant, i) => {
      return (
        <Card key={i}>
          <Card.Content>
            <Card.Header>{plant.common_name}</Card.Header>
            <p>{plant.scientific_name.toUpperCase()}</p>
            <p>{plant.id}</p>
            <Button
              primary
              onClick={(e) => {
                e.preventDefault();
                this.props.handleID(plant.id);
              }}
            >
              {" "}
              <Link to="/detail" plantId={props.plantId}>
                V I E W
              </Link>
            </Button>
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
}

export default SearchResultsList;
