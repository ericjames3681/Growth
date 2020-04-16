import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import DetailForm from "../../components/DetailForm/DetailForm";

const DetailPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <SearchBar handleSearch={props.handleSearch} />
      <DetailForm plantId={props.plantId} />
    </>
  );
};
export default DetailPage;
