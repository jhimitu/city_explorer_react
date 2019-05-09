'use strict';

import React from "react";
import Header from "./header.js";
import SearchForm from "./search-form.js";
import SearchResults from "./search-result.js";
import Map from "./map.js";
import DarkSky from "./dark-sky.js";
import Yelp from "./yelp.js";
import EventBrite from "./eventbrite.js";
import MovieDB from "./the-movie-db.js";

// AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc
// https://peaceful-headland-95472.herokuapp.com/


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      geocode_api_key: '',
      api_url: '',
      search_query: ''
    }
  }

  handleApiChange = e => {
    console.log(e.target.value);
    this.setState({ 
      geocode_api_key: e.target.value,
    });
  }

  handleUrlChange = e => {
    console.log(e.target.value);
    this.setState({ 
      api_url: e.target.value,
    });
  }

  handleCityChange = e => {
    console.log(e.target);
    this.setState({
      search_query: e.target.value
    });
  }

  handleSubmit = e => {
    console.log(e.target.value);
    e.preventDefault();
  }
  
  render() {
    if (this.state.search_query) {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.api_url} googleApi={this.state.geocode_api_key} handleApiChange={this.handleApiChange} handleUrlChange={this.handleUrlChange} handleCityChange={this.handleCityChange} handleSubmit={this.handleSubmit} />
          <Map />
          <DarkSky />
          <Yelp />
          <EventBrite />
          <MovieDB />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.api_url} googleApi={this.state.geocode_api_key} handleApiChange={this.handleApiChange} handleUrlChange={this.handleUrlChange} handleCityChange={this.handleCityChange} handleSubmit={this.handleSubmit} />
        </React.Fragment>
      );
    }
  }
}

export default App;
