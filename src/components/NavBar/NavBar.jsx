import React from "react";
import { Link } from "react-router-dom";
import { Segment, Form, Header } from "semantic-ui-react";
import "./NavBar.css";
import SearchForm from "../../components/SearchForm/SearchForm";

const NavBar = (props) => {
  let nav = props.user ? (
    <Segment size="huge">
      <Link to="" className="NavBar-link" onClick={props.handleLogout}>
        L O G &nbsp; O U T
      </Link>

      <Form size="small"> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; </Form>

      <span className="NavBar-welcome">
        W E L C O M E,&nbsp;{props.user.name}
      </span>
      <SearchForm getPlant={props.getPlant} />
    </Segment>
  ) : (
    <Segment size="huge">
      <Link to="/login" className="NavBar-link">
        L O G &nbsp; I N
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
        S I G N &nbsp; U P
      </Link>
    </Segment>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
