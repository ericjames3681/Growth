import React, { Component } from "react";
import { Segment, Menu, Header } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import DisplayPage from "../../pages/DisplayPage/DisplayPage";
import LoginPage from "../LoginPage/LoginPage";

import userService from "../../services/userService";
// import * as quoteAPI from "../services/quotes-api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
    };
  }

  // async componentDidMount() {}
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Header size="huge">
          G&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;W&nbsp;&nbsp;&nbsp;&nbsp;T&nbsp;&nbsp;&nbsp;&nbsp;H
        </Header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <DisplayPage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />

          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
