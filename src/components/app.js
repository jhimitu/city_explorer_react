'use strict';

import React from "react";
import superagent from "superagent";
import Header from "./header.js";
import SearchForm from "./search-form.js";
import SearchResults from "./search-result.js";
import Map from "./map.js";
import DarkSky from "./dark-sky.js";
import Yelp from "./yelp.js";
import EventBrite from "./eventbrite.js";
import MovieDB from "./the-movie-db.js";
import { async } from "q";

// AIzaSyBfOxvSAEhF0bINfqhSTthhNKEBb8eHfHc
// https://peaceful-headland-95472.herokuapp.com/


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      url: '',
      search_query: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (e.target.children[1].id === 'back-end-url') {
      this.setState({ 
        url: e.target.children[1].value,
      });
    } else if (e.target.children[1].name === 'search') {
      this.setState({
        search_query: e.target.children[1].value,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search_query !== this.state.search_query) {
        this.getLocation();
    }
  }

  getLocation = async () => {
    return await superagent.get(`${this.state.url}/location`)
      .query({ data: this.state.search_query })
      .then((result) => {
        this.setState({ location: result.body });
      });
  }
  // GET superagent.get(`${this.state.url}/location`).query({ query: this.state.search_query });

  render() {
    if (!this.state.search_query) {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.url} search={this.state.search_query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.url} search={this.state.search_query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <Map latitude={this.state.location.latitude} longitude={this.state.location.longitude} />
          <SearchResults />
        </React.Fragment>
      );
    }
  }
}

export default App;
