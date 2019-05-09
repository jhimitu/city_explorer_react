'use strict';

import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.backendUrl, this.props.googleApi);
    if (this.props.backendUrl && this.props.googleApi) {
      return (
        <React.Fragment>
          <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="search">Search for a location</label>
            <input type="text" name="search" placeholder="Enter a location here" />
            <button>Explore!</button>
          </form>
        </React.Fragment>
      );
    } else if (this.props.backendUrl) {
      return (
        <React.Fragment>
            <form id="geocode-form" onSubmit={this.props.handleSubmit}>
              <label>Enter your Geocoding API Key:</label>
              <input type="text" id="api-key" />
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

          <form id="geocode-form" onSubmit={this.props.handleSubmit}>
            <label>Enter your Geocoding API Key:</label>
            <input type="text" id="api-key" />
          </form>
        </React.Fragment>
      );
    }
  }
}

export default SearchForm;