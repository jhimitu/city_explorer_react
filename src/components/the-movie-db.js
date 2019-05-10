'use strict';

import React from "react";
import superagent from "superagent";
import { async } from "q";

class MovieDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  getMovies = async () => {
    let data = await superagent.get(`${this.props.url}/movies`)
      .query({ data: this.props.search });
    let movies = data.body;
    this.setState({
      movies
    });
  }

  componentDidMount() {
    if(this.props.search !== undefined) {
      this.getMovies();
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.search !== this.props.search) {
      this.getMovies();
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <section>
          <h3>Results from the Movie DB API</h3>
          <ul className="movies-results">{this.state.movies.map((data, i) => (
            <li key={i}>{<div className="movies">
              <a href={data.url}><h4>{data.title}</h4></a>
              <img src={data.image_url} />
              <p>Popularity: {data.popularity}</p>
              <p>Release Date: {data.released_on}</p>
              <p>Average Votes: {data.average_votes}</p>
              <h4>Overview</h4>
              <p>{data.overview}</p>
              </div>}</li>
          ))}</ul>
        </section>
      </React.Fragment>
    );
  }
}

export default MovieDB;