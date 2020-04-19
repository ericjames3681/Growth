import React from "react";
import { Header, Card, CardContent, Image, Divider, Button, Icon } from 'semantic-ui-react';
import "./UserPlants.css"


const UserPlants = ({ plant, handleDeletePlant }) => {
    const name = plant.common_name;
    return (

        <Card size="large">
            <CardContent>
                {name ? (
                    <Header content={plant.name} />
                ) : (
                        <Header content={plant.sci_name} />
                    )}
                {plant.img ? (
                    <img src={plant.img} />
                ) : (
                        <img
                            src="https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg"

                        />
                    )}
                <Divider hidden />
                <Divider />
                <h3>S C I E N T I F I C &nbsp; N A M E</h3>
                <strong>{plant.sci_name}</strong>
                <br />
                <h3>D U R A T I O N</h3>
                <strong>{plant.duration}</strong>
                <br />
                <h3>F A M I L Y</h3>
                <strong>{plant.family_common_name}</strong>
                <Button color="red"
                    onClick={() => handleDeletePlant({ id: plant._id, plantId: plant.plantId })}
                >

                    <Icon name="trash" />
                    D E L E T E
                </Button>



            </CardContent>

        </Card>
    )
}
export default UserPlants;