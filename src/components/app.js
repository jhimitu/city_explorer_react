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
      api_key: '',
      url: '',
      search_query: ''
    }
  }

  handleSubmit = e => {
    console.log(e.target.children[1].name);
    console.log(e.target.children[1].id);
    if (e.target.children[1].id === 'back-end-url') {
      this.setState({ 
        url: e.target.children[1].value,
      });
    } else if (e.target.children[1].id === 'api-key') {
      this.setState({ 
        api_key: e.target.children[1].value,
      });
    } else if (e.target.children[1].name === 'search') {
      this.setState({
        search_query: e.target.children[1].value,
      });
    }
    e.preventDefault();
  }
  
  render() {
    if (!this.state.search_query) {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.url} googleApi={this.state.api_key} search={this.state.search_query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <SearchForm backendUrl={this.state.url} googleApi={this.state.api_key} search={this.state.search_query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <Map />
          <SearchResults />
        </React.Fragment>
      );
    }
  }
}

export default App;
