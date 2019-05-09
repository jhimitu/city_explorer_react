'use strict';

import React from "react";

class MovieDB extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Movie DB API</h3>
          <ul className="movies-results"></ul>
        </section>
      </React.Fragment>
    );
  }
}

export default MovieDB;