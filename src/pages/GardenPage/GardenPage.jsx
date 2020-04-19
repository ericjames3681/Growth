import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Card, CardContent, Responsive, Grid } from "semantic-ui-react";

import UserPlants from "../../components/UserPlants/UserPlants";
import * as plantsAPI from "../../services/plants-api-service";


class GardenPage extends Component {
  async componentDidMount() {
    const userPlants = await plantsAPI.index();

    this.props.handleGarden(userPlants);

  }

  render() {
    return (
      <div>

        <Card centered>
          <CardContent>
            <h1>M Y &nbsp; P L A N T S</h1>
            <Link to="/">H O M E</Link>
          </CardContent>
        </Card>
        <br></br>
        <Responsive centered as={Card.Group}>
          {this.props.garden.map((plant, idx) => (
            <UserPlants key={idx}
              garden={this.props.garden}
              plant={plant}
              handleDeletePlant={this.props.handleDeletePlant}
            />

          ))}
        </Responsive>
      </div>
    )
  }
}
export default GardenPage;
