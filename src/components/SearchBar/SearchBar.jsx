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
          this.props.getPlants(this.state.searchTerm);
        }}
      >
        <Form.Input
          type="text"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <Button primary>S E A R C H</Button>
      </Form>
    );
  }
}

export default SearchBar;
