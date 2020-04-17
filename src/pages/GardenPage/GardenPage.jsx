import React, { Component } from "react";
import { Link } from "react-router-dom";
import plantsService from "../../services/plantsService";

class GardenPage extends Component {
  async componentDidMount() {
    const userPlants = await plantsService.index();
    this.props.handleUpdatePlants(userPlants);
  }

  render() {
    <>
      <h1>G A R D E N</h1>
    </>;
  }
}
export default GardenPage;
