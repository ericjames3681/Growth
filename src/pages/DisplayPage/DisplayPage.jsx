import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";
import SearchForm from "../../components/SearchForm/SearchForm";

const DisplayPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
        getPlant={props.getPlant}
      />
      <SearchForm getPlant={props.getPlant} />
    </>
  );
};
export default DisplayPage;
