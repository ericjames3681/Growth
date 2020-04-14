import React, { Component } from "react";
import { Segment, Menu, Header } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import DisplayPage from "../../pages/DisplayPage/DisplayPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchForm from "../../components/SearchForm/SearchForm";
import * as plantAPI from "../../services/plants-api";
import userService from "../../services/userService";
// import * as quoteAPI from "../services/quotes-api";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      plants: [],
    };
  }
  getPlant = async (e) => {
    const plantName = e.target.elements.plantName.value;
    e.preventDefault();
    const api_call = await fetch(
      "https://plantsdb.xyz/search/?limit=10&fields=Genus,Species,Common_Name,Image"
    );

    const data = await api_call.json();
    this.setState({ plants: data.data });
    console.log(this.state.plants);
  };

  // async componentDidMount() {
  //   const plants = await plantAPI.getAll();
  //   this.setState({ plants });
  // }
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
                getPlant={this.getPlant}
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
        {this.state.plants.map((plant) => {
          return (
            <>
              <p key={plant.id}> {plant.Species.toUpperCase()} </p>
              {/* <img key={plant.id} src={plant.image} alt="img" /> */}
            </>
          );
        })}
      </div>
    );
  }
}
export default App;
