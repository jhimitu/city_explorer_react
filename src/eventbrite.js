'use strict';

import React from "react";

class EventBrite extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Eventbrite API</h3>
          <ul className="events-results"></ul>
        </section>
      </React.Fragment>
    );
  }
}

export default EventBrite;