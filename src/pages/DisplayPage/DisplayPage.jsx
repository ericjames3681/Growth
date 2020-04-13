import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";
import Form from "../../components/SearchForm/SearchForm";

const DisplayPage = (props) => {
  return (
    <>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
        getPlant={props.getPlant}
      />
      <div className="DisplayPage"></div>
    </>
  );
};
export default DisplayPage;
