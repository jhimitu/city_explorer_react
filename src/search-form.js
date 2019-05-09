'use strict';

import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">Search for a location</label>
        <input type="text" name="search" placeholder="Enter a location here" />
        <button>Explore!</button>
      </React.Fragment>
    );
  }
}

export default SearchForm;