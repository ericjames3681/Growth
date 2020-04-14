import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.getPlants(this.state.plantSearch);
        }}
      >
        <Form.Input
          type="text"
          name="plantSearch"
          value={this.state.plantSearch}
          onChange={this.handleChange}
        />
        <Button>S E A R C H</Button>
      </Form>
    );
  }
}

export default SearchBar;
