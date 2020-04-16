import React, { Component } from "react";
import {
  Card,
  Button,
  List,
  Modal,
  Header,
  Icon,
  Image,
  Divider,
} from "semantic-ui-react";
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
            <Modal
              trigger={
                <Button
                  primary
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.handleID(plant.id);
                  }}
                >
                  {" "}
                  V I E W
                </Button>
              }
              closeIcon
            >
              {" "}
              <Header content={this.props.plantId.common_name} />
              <Modal.Content>
                {this.props.plantId.images && (
                  <Image src={this.props.plantId.images[0].url} size="big" />
                )}
                <Divider hidden />
                <p>{this.props.plantId.scientific_name}</p>
              </Modal.Content>
              <Modal.Actions>
                <Button color="green">
                  <Icon name="plus" /> A D D
                </Button>
              </Modal.Actions>
            </Modal>
          </Card.Content>
        </Card>
      );
    });

    return (
      <React.Fragment>
        <List>{plants}</List>
      </React.Fragment>
    );
  }
}

export default SearchResultsList;
