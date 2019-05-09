'use strict';

import React from "react";

class Yelp extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Yelp API</h3>
          <ul className="yelp-results"></ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Yelp;
