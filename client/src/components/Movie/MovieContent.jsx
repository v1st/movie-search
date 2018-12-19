import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import '../../scss/partials/moviecontent.scss';
import axios from 'axios';

import CastBar from './CastBar';

class MovieContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      details: {},
      isLoading: true,
    }

    this.fetchAPI = this.fetchAPI.bind(this);
    this.renderTime = this.renderTime.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  // Fetch movie details and cast info
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

  // Format run time 
  renderTime(n) {
    return `${n / 60 ^ 0} HRS ${n % 60} MINS`;
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    // Loading animation before api call
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

    const { genres, overview, backdrop_path, title, release_date, runtime, vote_average } = this.state.details
    const { cast } = this.state

    const imgURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const threeCastMembers = cast.splice(0, 3).map(actor => actor.name).join(", ");
    const formatTime = this.renderTime(runtime);
    const renderGenres = genres.map((genre, index) => <li key={index} className="movie__genre">{genre.name}</li>);

    return (
      <main className="main-movie__container">
        <div className="poster__wrap">
          <img src={imgURL} alt="moive poster" />
        </div>

        <div className="movie__container">
          <div className="movie-info__wrap">
            <ul className="genre__container">
              {renderGenres}
            </ul>
            <h1 className="movie__title">{title}</h1>
            <div className="movie__cast--preview">{threeCastMembers}</div>
            <div className="movie__release">{formatTime} &bull; {release_date}</div>
            <div className="movie__summary">{overview}</div>
            <div className="movie__rating">{vote_average}/10</div>
            <CastBar data={cast} />
          </div>

        </div>
      </main>
    )
  }
}

export default withRouter(MovieContent);
