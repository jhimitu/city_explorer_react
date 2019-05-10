'use strict';

import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.backendUrl) {
      return (
        <React.Fragment>
          <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="search">Search for a location</label>
            <input type="text" name="search" placeholder="Enter a location here" />
            <button>Explore!</button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <form onSubmit={this.props.handleSubmit}>
            <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
            <input type="text" id="back-end-url" />
          </form>
        </React.Fragment>
      );
    }
  }
}

export default SearchForm;