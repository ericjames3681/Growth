import React from "react";
import { Link } from "react-router-dom";
import { Segment, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item header as="h1">
          G&nbsp;&nbsp;R&nbsp;&nbsp; O&nbsp;&nbsp; W&nbsp;&nbsp; T&nbsp;&nbsp; H
        </Menu.Item>
        <Link to="/login" className="NavBar-link">
          <Menu.Item>L O G &nbsp; &nbsp; I N</Menu.Item>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className="NavBar-link">
          <Menu.Item>S I G N&nbsp; &nbsp; &nbsp; U P</Menu.Item>
        </Link>
      </Menu>
    </Segment>
  );
};

export default NavBar;
