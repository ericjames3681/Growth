import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import {
  Card,
  Form,
  Header,
  CardContent,
  Button,
  Grid,
} from "semantic-ui-react";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignup();
      this.props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(
      this.state.name &&
      this.state.email &&
      this.state.password === this.state.passwordConf
    );
  }

  render() {
    return (
      <Card centered>
        <CardContent>
          <Header>S I G N &nbsp; U P</Header>
          <Grid columns={1} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input
                  type="text"
                  className="form-control"
                  placeholder="N A M E"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  type="email"
                  className="form-control"
                  placeholder="E M A I L"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Input
                  type="password"
                  className="form-control"
                  placeholder="P A S S W O R D"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  type="password"
                  className="form-control"
                  placeholder="C O N F I R M"
                  value={this.state.passwordConf}
                  name="passwordConf"
                  onChange={this.handleChange}
                />
                <br></br>
                <Button
                  content="L O G&nbsp;&nbsp;&nbsp;&nbsp;I N"
                  disabled={this.isFormInvalid()}
                  primary
                />
              </Form>
              <br></br>
              &nbsp;&nbsp;
              <Link to="/">C A N C E L </Link>
            </Grid.Column>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default SignupForm;
