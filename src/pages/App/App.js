import React, { Component } from "react";
import { Segment, Menu } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import NavBar from "../../components/NavBar/NavBar";
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
        <NavBar handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage history={history} handleSignup={this.handleSignup} />
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
