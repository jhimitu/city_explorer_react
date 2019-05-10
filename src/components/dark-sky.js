'use strict';

import React from "react";
import superagent from "superagent";

class DarkSky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    }
  }

  getWeather = async () => {
    let data = await superagent.get(`${this.props.url}/weather`)
      .query({ data: { latitude: this.props.latitude, longitude: this.props.longitude } });
      let weatherData = data.body;
    this.setState({
      weatherData
    });
  }

  componentDidMount() {
    if(this.props.latitude !== undefined) {
      this.getWeather();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.latitude !== this.props.latitude) {
      this.getWeather();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Dark Sky API</h3>
          <ul className="weather-results">{this.state.weatherData.map((data, i) => 
            <li key={i}>{data.forecast} {data.time}</li>  
          )}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default DarkSky;