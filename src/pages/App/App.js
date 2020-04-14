import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import DisplayPage from "../DisplayPage/DisplayPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchForm from "../../components/SearchForm/SearchForm";
// import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
// import * as plantAPI from "../../services/plants-api";
import userService from "../../services/userService";
import { getAll } from "../../services/plants-api-service";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      plantsResults: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await getAll();
      const { data } = JSON.parse(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
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
        <Header className="App-header" size="huge" inverted>
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
                plantsResults={this.plantsResults}
                getPlants={this.getPlants}
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
        {/* {this.state.plants.map((plant) => {
          return (
            <>
            <p key={plant.id}> {plant.Species.toUpperCase()} </p>
            {/* <img key={plant.id} src={plant.image} alt="img" /> */}
        {/* </>
        ); })} */} */}
        {/* <SearchForm getPlants={this.getPlants} /> */}
      </div>
    );
  }
}
export default App;
