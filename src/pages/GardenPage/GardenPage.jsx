import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Card, CardContent, Responsive } from "semantic-ui-react";
import userService from "../../services/userService";
import UserPlants from "../../components/UserPlants/UserPlants";
import * as plantsAPI from "../../services/plants-api-service";


class GardenPage extends Component {
  async componentDidMount() {
    const userPlants = await plantsAPI.index();
    console.log(userPlants)
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
        {this.props.garden.map((plant, idx) => (
          <Responsive centered as={Card.Group} key={idx}>
            <UserPlants key={idx}
              garden={this.props.garden}
              plant={plant} />
          </Responsive>
        ))}
      </div>
    )
  }
}
export default GardenPage;
