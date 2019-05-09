'use strict';

import React from "react";

class DarkSky extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Dark Sky API</h3>
          <ul className="weather-results"></ul>
        </section>
      </React.Fragment>
    );
  }
}

export default DarkSky;