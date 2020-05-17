import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./DisplayPage.css";
import SearchResultsList from "../../components/SearchResultsList/SearchResultsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "react-loader-spinner";

const DisplayPage = (props) => {
  return (
    <>
      <div className="DisplayPage"></div>
      <NavBar
        user={props.user}
        garden={props.garden}
        handleLogout={props.handleLogout}
        handleGarden={props.handleGarden}
      />
      <h1>F I N D &nbsp; A &nbsp; P L A N T </h1>
      <h3>
        S I G N &nbsp; U P &nbsp; T O &nbsp; P L A N T &nbsp; A &nbsp; G A R D E
        N
      </h3>
      <br></br>
      <SearchBar handleSearch={props.handleSearch} />
      {props.loading == true ? (
        <Loader
          type="TailSpin"
          color="white"
          height={200}
          width={200}
          timeout={3000} //3 secs
        />
      ) : (
        <SearchResultsList
          user={props.user}
          searchTerm={props.searchTerm}
          handleID={props.handleID}
          plantId={props.plantId}
          handleAddPlant={props.handleAddPlant}
        />
      )}
      ;
    </>
  );
};
export default DisplayPage;
