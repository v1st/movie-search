import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import '../../scss/partials/moviecontent.scss';
import axios from 'axios';

import CastBar from './CastBar';
import LightBox from './LightBox';
import Loader from '../Loader';

class MovieContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: [],
      details: {},
      video: '',
      isLoading: true,
      lightboxState: "lightbox--closed",
      videoURL: '',
      isOpen: true
    }

    this.fetchAPI = this.fetchAPI.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.openLightBox = this.openLightBox.bind(this);
    this.closeLightBox = this.closeLightBox.bind(this);
  }

  signal = axios.CancelToken.source();

  componentDidMount() {
    this.fetchAPI();
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

  // Fetch movie details and cast info
  fetchAPI() {
    try {
      this.setState({ isLoading: true });

      axios.post(`/api/movie/${this.props.match.params.id}`, {
        id: `${this.props.match.params.id}`
      }, {
          cancelToken: this.signal.token
        })
        .then(response =>
          this.setState({
            cast: response.data.param.cast,
            details: response.data.param.details,
            video: response.data.param.video.results,
            isLoading: false,
          }))
        .catch(err => console.log(err));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message); // => prints: Api is being canceled
      } else {
        this.setState({ isLoading: false });
      }
    }
  }

  // Format run time 
  renderTime(n) {
    return `${n / 60 ^ 0} HRS ${n % 60} MINS`;
  }

  // Open video lightbox on click of trailer btn
  openLightBox(e) {
    this.setState({
      lightboxState: "lightbox",
      isOpen: true
    });
  }

  // Close video lightbox from clicking anywhere out of box
  closeLightBox() {
    if (this.state.lightboxState === "lightbox") {
      this.setState({
        lightboxState: "lightbox--closed",
        isOpen: false
      });
    }
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
        <Loader />
      );
    }

    const { genres, overview, backdrop_path, title, release_date, runtime, vote_average } = this.state.details
    const { cast } = this.state

    const imgURL = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    const threeCastMembers = cast.slice(0, 3).map(actor => actor.name).join(", ");
    const formatTime = this.renderTime(runtime);
    const renderGenres = genres.map((genre, index) => <li key={index} className="movie__genre">{genre.name}</li>);
    const videoURL = `https://www.youtube.com/embed/${this.state.video[0].key}?enablejsapi=1`;

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
            <div className="rating-video__wrapper">
              <div className="movie__rating">{vote_average}/10</div>
              <button className="movie__video" onClick={(e) => this.openLightBox(e)} value={videoURL}>Trailer</button>
            </div>
            <CastBar data={cast} />
          </div>
        </div>

        <LightBox
          videoURL={this.state.isOpen ? videoURL : ''}
          title={title}
          lightboxState={this.state.lightboxState}
          onClick={this.closeLightBox} />
      </main>
    )
  }
}

export default withRouter(MovieContent);
