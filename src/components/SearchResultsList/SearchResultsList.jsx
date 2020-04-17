import React, { Component } from "react";
import {
  Card,
  Button,
  Message,
  Modal,
  Header,
  Icon,
  Image,
  Divider,
} from "semantic-ui-react";

class SearchResultsList extends Component {
  render() {
    const name = this.props.plantId.common_name;
    const plants = this.props.searchTerm.map((plant, i) => {
      return (
        <Card key={i}>
          <Card.Content>
            <Card.Header>{plant.common_name}</Card.Header>
            <p>{plant.scientific_name.toUpperCase()}</p>
            <Modal
              trigger={
                <Button
                  color="green"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.handleID(plant.id);
                  }}
                >
                  V I E W
                </Button>
              }
              closeIcon
            >
              {" "}
              {name ? (
                <Header content={this.props.plantId.common_name} />
              ) : (
                <Header content={this.props.plantId.scientific_name} />
              )}
              <Modal.Content>
                <div>
                  {this.props.plantId.images &&
                  this.props.plantId.images.length ? (
                    <Image src={this.props.plantId.images[0].url} size="big" />
                  ) : (
                    <Image
                      src="https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg"
                      size="medium"
                    />
                  )}
                </div>

                <Divider hidden />
                <p>NAME:{this.props.plantId.scientific_name}</p>
                <p>DURATION:{this.props.plantId.duration}</p>
                <p>FAMILY:{this.props.plantId.family_common_name}</p>
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
        <Card.Group>{plants}</Card.Group>
      </React.Fragment>
    );
  }
}

export default SearchResultsList;
