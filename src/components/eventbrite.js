'use strict';

import React from "react";
import superagent from "superagent";
import { async } from "q";

class EventBrite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  getEvents = async () => {
    let data = await superagent.get(`${this.props.url}/events`)
      .query({ data: {latitude: this.props.latitude, longitude: this.props.longitude} });
    let events = data.body;
    this.setState({
      events
    });
  }

  componentDidMount() {
    if(this.props.latitude !== undefined) {
      this.getEvents();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.latitude !== this.props.latitude) {
      this.getEvents();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Eventbrite API</h3>
          <ul className="events-results">{this.state.events.map((data, i) => (
            <li key={i}>
              {<div>
                <a href={data.url}><h4>{data.title}</h4></a>
                <p>Event Date: {data.event_date}</p>
                <h4>Summary</h4>
                <p>{data.summary}</p>
              </div>}
            </li>
          ))}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default EventBrite;