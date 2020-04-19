import React from "react";
import { Header, Card, CardContent, Image } from 'semantic-ui-react'


const UserPlants = ({ plant }) => {
    const name = plant.common_name;
    return (

        <Card >
            <CardContent>
                {name ? (
                    <Header content={plant.name} />
                ) : (
                        <Header content={plant.sci_name} />
                    )}
                {plant.img ? (
                    <Image src={plant.img} size="small" />
                ) : (
                        <Image
                            src="https://i.pinimg.com/236x/cf/79/0d/cf790d318088a962f7db227a4263af35.jpg"
                            size="small"
                        />
                    )}
                <strong>{plant.sci_name}</strong>
                <br />
                <strong>{plant.duration}</strong>
                <br />
                <strong>{plant.family_common_name}</strong>



            </CardContent>

        </Card>
    )
}
export default UserPlants;