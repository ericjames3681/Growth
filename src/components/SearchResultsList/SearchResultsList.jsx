import React from "react";
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
      <Card size="large" key={i}>
        <Card.Content>
          {plant.common_name ? (
            <Header content={plant.common_name} />
          ) : (
            <Header content={plant.scientific_name} />
          )}
          {plant.image_url ? (
            <img src={plant.image_url} alt="" />
          ) : (
            <img
              src="https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg"
              alt=""
            />
          )}
          <Divider hidden />
          <Divider />
          <h3>S C I E N T I F I C &nbsp; N A M E</h3>
          <strong>{plant.scientific_name}</strong>
          <br />
          <h3>F A M I L Y</h3>
          <strong>{plant.family_common_name}</strong>
          <br />
          <Divider hidden />
          {user ? (
            plant.image_url ? (
              <Button
                color="green"
                onClick={() =>
                  props.handleAddPlant({
                    name: plant.common_name,
                    sci_name: plant.scientific_name,
                    family: plant.family_common_name,
                    img: plant.image_url,
                  })
                }
              >
                <Icon name="plus" /> A D D
              </Button>
            ) : (
              <Button
                color="green"
                onClick={() =>
                  props.handleAddPlant({
                    name: plant.common_name,
                    sci_name: plant.scientific_name,
                    family: plant.family_common_name,
                    img:
                      "https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg",
                  })
                }
              >
                <Icon name="plus" /> A D D
              </Button>
            )
          ) : (
            <></>
          )}
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
