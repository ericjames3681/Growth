import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import { SearchResults } from "semantic-ui-react";

const DisplayPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
        plantsResults={props.plantsResults}
      />
      <SearchResultsList plantsResults={props.plantsResults} />
    </>
  );
};
export default DisplayPage;
