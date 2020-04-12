import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";

const DisplayPage = (props) => {
  return (
    <div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
    </div>
  );
};
export default DisplayPage;
