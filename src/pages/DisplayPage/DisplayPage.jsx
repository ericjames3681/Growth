import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";

const DisplayPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
        getPlants={props.getPlants}
      />
    </>
  );
};
export default DisplayPage;
