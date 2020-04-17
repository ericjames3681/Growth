import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

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
        centered="true"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSearch(this.state.searchTerm);
        }}
      >
        <Input
          icon="search"
          placeholder="S E A R C H . . ."
          type="text"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <br></br>
        <br></br>
        <Button color="green">S E A R C H</Button>
        <br></br>
        <br></br>
      </Form>
    );
  }
}

export default SearchBar;
