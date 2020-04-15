import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Header } from "semantic-ui-react";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <div>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <Header as="h1" color="red">
          {this.state.message}
        </Header>
      </div>
    );
  }
}

export default SignupPage;
