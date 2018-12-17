import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import '../../scss/partials/moviecontent.scss';
import axios from 'axios';

class MovieContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      details: {},
      isLoading: true,
    }

    this.fetchAPI = this.fetchAPI.bind(this);
  }
  // Need to import Genres, tagline, runtime, cast -credits
  // Possibly get video

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    axios.post(`/api/movie/${this.props.match.params.id}`, {
      id: `${this.props.match.params.id}`
    })
      .then(response =>
        this.setState({
          cast: response.data.param.cast,
          details: response.data.param.details,
          isLoading: false
        }))
      .catch(err => console.log(err));
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    if (this.state.isLoading) {
      return (
        <main className="main__container">
          <div className="LoaderBalls">
            <div className="LoaderBalls__item"></div>
            <div className="LoaderBalls__item"></div>
            <div className="LoaderBalls__item"></div>
          </div>
        </main>
      );
    }
    let img = null;
    let { overview, backdrop_path, title, release_date, vote_average } = this.state.details
    let imgURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    img = <img src={imgURL} alt="moive poster" />

    return (
      <main className="main__container">
        <div className="poster__wrap">
          {img}
        </div>

        <div className="movie__container">
          <div className="movie-info__wrap">
            <h1 className="movie__title">{title}</h1>
            <div className="movie__rating">{vote_average}/10</div>
            <div className="movie__release">{release_date}</div>
            <div className="movie__summary">{overview}</div>
          </div>

        </div>
      </main>
    )
  }
}

export default withRouter(MovieContent);
