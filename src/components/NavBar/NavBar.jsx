import React from "react";
import { Link } from "react-router-dom";
import { Header, Card, CardContent } from "semantic-ui-react";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <CardContent>
      <Header as="p" color="red">
        W E L C O M E : {props.user.name.toUpperCase()}
      </Header>
      <hr></hr>
      <Link to="" onClick={props.handleLogout}>
        L O G &nbsp; O U T
      </Link>
      &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
      <Link to="/garden" onClick={props.handleGarden}>
        M Y &nbsp; G A R D E N
      </Link>
    </CardContent>
  ) : (
    <CardContent>
      <Link to="/login">L O G &nbsp; I N</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/signup">S I G N &nbsp; U P</Link>
    </CardContent>
  );

  return (
    <Card size="massive" centered>
      {nav}
    </Card>
  );
};

export default NavBar;
