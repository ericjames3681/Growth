import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import DisplayPage from "../DisplayPage/DisplayPage";
import LoginPage from "../LoginPage/LoginPage";
import GardenPage from "../GardenPage/GardenPage";
import userService from "../../services/userService";
import * as plantsAPI from "../../services/plants-api-service";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      searchTerm: [],
      plantId: "",
      garden: [],
      loading: false,
      result: true,
    };
  }

  handleSearch = async (term) => {
    this.setState({ loading: true });

    try {
      const response = await plantsAPI.findOne(term);
      const newPlant = await JSON.parse(response);
      if (newPlant.length === 0) {
        this.setState({ result: false, loading: false });
      } else {
        this.setState({
          searchTerm: newPlant.data,
          loading: false,
          result: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleID = async (id) => {
    try {
      const response = await plantsAPI.findId(id);
      const detailId = await JSON.parse(response);
      this.setState({ plantId: detailId.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleAddPlant = async (newPlantData) => {
    const newPlant = await plantsAPI.create(newPlantData);
    this.setState(
      (state) => ({
        garden: [...state.garden, newPlant],
      }),

      () => this.props.history.push("/")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleGarden = async () => {
    const data = await plantsAPI.index();

    this.setState({ garden: data });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleDeletePlant = async ({ id, plantId }) => {
    await plantsAPI.deleteOne(id);
    this.setState(
      () => ({
        garden: this.state.garden.filter((plant) => plant.plantId !== plantId),
      }),
      () => this.props.history.push("/garden")
    );
    const data = await plantsAPI.index();
    this.setState({ garden: data });
  };
  componentDidMount() {
    if (userService.getUser()) {
      this.handleGarden();
    }
  }

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
                searchTerm={this.state.searchTerm}
                plantId={this.state.plantId}
                result={this.state.result}
                loading={this.state.loading}
                garden={this.state.garden}
                handleSearch={this.handleSearch}
                handleID={this.handleID}
                handleLogout={this.handleLogout}
                handleGarden={this.handleGarden}
                handleAddPlant={this.handleAddPlant}
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
          <Route
            exact
            path="/garden"
            render={() =>
              userService.getUser() ? (
                <GardenPage
                  garden={this.state.garden}
                  handleGarden={this.handleGarden}
                  handleDeletePlant={this.handleDeletePlant}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
export default App;
