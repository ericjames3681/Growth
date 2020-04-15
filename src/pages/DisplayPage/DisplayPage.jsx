import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import { SearchResults } from "semantic-ui-react";
import SearchBar from "../../components/SearchBar/SearchBar";

const DisplayPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <SearchBar handleSearch={props.handleSearch} />
      <SearchResultsList searchTerm={props.searchTerm} />
    </>
  );
};
export default DisplayPage;
