'use strict';

import React from "react";
import DarkSky from "./dark-sky.js";
import EventBrite from "./eventbrite.js";
import Yelp from "./yelp.js";
import MovieDB from "./the-movie-db.js";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <DarkSky latitude={this.props.latitude} longitude={this.props.longitude} />
        <Yelp search={this.props.search} />
        <EventBrite latitude={this.props.latitude} longitude={this.props.longitude} />
        <MovieDB search={this.props.search} />
      </React.Fragment>
    );
  }
}

export default SearchResults;
