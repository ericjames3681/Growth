import React from "react";
import { Link } from "react-router-dom";
import { Form, Header, Card, CardContent } from "semantic-ui-react";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <CardContent size="large">
      <Header as="p" color="red">
        W E L C O M E : {props.user.name}
      </Header>
      <hr></hr>
      <Link to="" onClick={props.handleLogout}>
        L O G &nbsp; O U T
      </Link>
    </CardContent>
  ) : (
    <CardContent size="large">
      <Link to="/login">L O G &nbsp; I N</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/signup">S I G N &nbsp; U P</Link>
    </CardContent>
  );

  return (
    <Card size="huge" centered>
      {nav}
    </Card>
  );
};

export default NavBar;
