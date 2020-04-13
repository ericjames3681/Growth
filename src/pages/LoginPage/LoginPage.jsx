import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert("Invalid Credentials!");
    }
  };

  render() {
    return (
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="E M A I L"
                type="email"
                className="form-control"
                placeholder="E M A I L"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="P A S S W O R D"
                type="password"
                className="form-control"
                placeholder="P A S S W O R D"
                name="pw"
                value={this.state.pw}
                onChange={this.handleChange}
              />
              <br></br>
              <Button content="L O G&nbsp;&nbsp;&nbsp;&nbsp;I N" primary />
            </Form>
            <br></br>
            <Link to="/">C A N C E L</Link>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default LoginPage;
