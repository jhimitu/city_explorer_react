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
        <DarkSky />
        <Yelp />
        <EventBrite />
        <MovieDB />
      </React.Fragment>
    );
  }
}

export default SearchResults;
