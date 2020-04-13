import React from "react";

const SearchForm = (props) => (
  <form onSubmit={props.getPlant}>
    <input type="text" name="plantName" />
    <button>Search</button>
  </form>
);

export default SearchForm;
