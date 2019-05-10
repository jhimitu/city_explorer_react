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
        <DarkSky latitude={this.props.latitude} longitude={this.props.longitude} url={this.props.url} id={this.props.id} />
        <Yelp search={this.props.search} url={this.props.url} />
        <EventBrite latitude={this.props.latitude} longitude={this.props.longitude} url={this.props.url} />
        <MovieDB search={this.props.search} url={this.props.url} />
      </React.Fragment>
    );
  }
}

export default SearchResults;
