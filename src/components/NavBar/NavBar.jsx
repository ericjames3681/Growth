import React from "react";
import { Link } from "react-router-dom";
import { Form, Header, Card, CardContent } from "semantic-ui-react";
import "./NavBar.css";
import SearchForm from "../../components/SearchForm/SearchForm";

const NavBar = (props) => {
  let nav = props.user ? (
    <CardContent>
      <Link to="" onClick={props.handleLogout}>
        L O G &nbsp; O U T
      </Link>

      <Form size="huge"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; </Form>

      <span className="NavBar-welcome">
        W E L C O M E,&nbsp;{props.user.name}
      </span>
    </CardContent>
  ) : (
    <CardContent size="large">
      <Link to="/login">L O G &nbsp; I N</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
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
