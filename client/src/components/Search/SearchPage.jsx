import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Loader from '../Loader';

import '../../scss/partials/searchpage.scss';
import '../../scss/partials/maincontent.scss';

export class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isLoading: true
    }

    this.loadMovie = this.loadMovie.bind(this);
  }

  signal = axios.CancelToken.source();

  componentDidMount() {
    this._isMounted = true;

    this.loadMovie();
  }

  componentDidUpdate(prevProps) {
    // Check search input and gather requested data
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.loadMovie();
    }
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

  async loadMovie() {
    try {
      this.setState({ isLoading: true });

      await axios.post(`/api/search/${this.props.match.params.query}`, {
        query: this.props.match.params.query,
      },
        {
          cancelToken: this.signal.token
        })
        .then(response => {
          this.setState({
            searchResults: response.data.payload.results,
            isLoading: false
          });
        })
        .catch(err => console.log(err));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message); // => prints: Api is being canceled
      } else {
        this.setState({ isLoading: false });
      }
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    // Loading animation before api call
    if (this.state.isLoading) {
      return (
        <Loader />
      );
    }

    const renderSearchResults = this.state.searchResults.map((movie, index) => {
      const { id, poster_path, title, release_date, vote_average } = movie
      let img = `https://image.tmdb.org/t/p/original${poster_path}`;

      return (
        <React.Fragment key={index}>
          <Link to={{ pathname: `/movie/${id}` }} key={index} className="search__card">
            <div className="slide__bg">
              <img className="bg__img" src={img} alt="slide" />
            </div>

            <div className="slide__info">
              <div className="title">{title}</div>
              <div className="rating">{vote_average}/10</div>
              <div className="date">{release_date}</div>
              <div className="text">
              </div>
            </div>
          </Link>
        </React.Fragment>
      )
    });

    return (
      <React.Fragment>
        <NavBar />
        <main className="searchpage">
          <div className="search__container">
            <ul className="search__card-wrap">
              {renderSearchResults}
            </ul>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(SearchPage);

