import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import DisplayPage from "../DisplayPage/DisplayPage";
import LoginPage from "../LoginPage/LoginPage";

import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
// import * as plantAPI from "../../services/plants-api";
import userService from "../../services/userService";
import { findOne, findId } from "../../services/plants-api-service";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      searchTerm: [],
      plantId: "",
    };
  }

  handleSearch = async (term) => {
    try {
      const response = await findOne(term);
      const newPlant = await JSON.parse(response);
      this.setState({ searchTerm: newPlant });
    } catch (error) {
      console.log(error);
    }
  };

  handleID = async (id) => {
    try {
      const response = await findId(id);
      const detailId = await JSON.parse(response);
      this.setState({ plantId: detailId });
    } catch (error) {
      console.log(error);
    }
  };

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
        <br></br>
        <Header centered="true" className="App-header" size="huge" inverted>
          G &nbsp; &nbsp;R &nbsp; &nbsp;O &nbsp; &nbsp;W &nbsp; &nbsp;T &nbsp;
          &nbsp;H
        </Header>
        <br></br>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <DisplayPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                searchTerm={this.state.searchTerm}
                handleSearch={this.handleSearch}
                handleID={this.handleID}
                plantId={this.state.plantId}
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
