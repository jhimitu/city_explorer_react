'use strict';

import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </React.Fragment>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello from Main Component!</h1>
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
