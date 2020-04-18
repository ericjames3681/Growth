import React, { Component } from "react";
import {
  Card,
  Button,
  Responsive,
  Modal,
  Header,
  Icon,
  Image,
  Divider,
} from "semantic-ui-react";

const SearchResultsList = (props) => {
  const user = props.user;
  const plants = props.searchTerm.map((plant, i) => {
    const name = plant.common_name;
    return (
      <Card key={i}>
        <Card.Content>
          {name ? (
            <Header content={plant.common_name} />
          ) : (
            <Header content={plant.scientific_name} />
          )}
          <Modal
            className="Modal"
            trigger={
              <Button
                color="green"
                onClick={(e) => {
                  e.preventDefault();
                  props.handleID(plant.id);
                }}
              >
                V I E W
              </Button>
            }
            closeIcon
          >
            {" "}
            {name ? (
              <Header content={props.plantId.common_name} />
            ) : (
              <Header content={props.plantId.scientific_name} />
            )}
            <Modal.Content>
              {props.plantId.images && props.plantId.images.length ? (
                <Image src={props.plantId.images[0].url} size="big" />
              ) : (
                <Image
                  src="https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg"
                  size="small"
                />
              )}

              <strong>NAME: {props.plantId.scientific_name}</strong>
              <br />
              <strong>DURATION: {props.plantId.duration}</strong>
              <br />
              <strong>FAMILY: {props.plantId.family_common_name}</strong>
              <br />
              <Divider />
            </Modal.Content>
            {user ? (
              <Modal.Actions>
                <Button
                  color="green"
                  onClick={() => props.handleAddPlant(props.plantId.id)}
                >
                  <Icon name="plus" /> A D D
                </Button>
              </Modal.Actions>
            ) : (
              <></>
            )}
          </Modal>
        </Card.Content>
      </Card>
    );
  });

  return (
    <React.Fragment>
      <Responsive centered as={Card.Group}>
        {plants}
      </Responsive>
    </React.Fragment>
  );
};

export default SearchResultsList;
