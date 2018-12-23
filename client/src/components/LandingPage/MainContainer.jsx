import React, { Component } from 'react'
import SlideSmall from '../LandingPage/SlideSmall';
import axios from 'axios';

import '../../scss/partials/maincontent.scss';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ['Popular', 'Upcoming', 'Now Playing'],
      movieData: [],
      isLoading: false
    }

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  signal = axios.CancelToken.source();

  componentDidMount() {
    // Serve Movie Database info from backend
    this.fetchAPI();
  }

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

  fetchAPI() {
    try {
      this.setState({ isLoading: true });

      axios.get('/api', {
        cancelToken: this.signal.token
      })
        .then(res => this.setState({
          movieData: res.data
        }))
        .catch(e => console.log(e));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message); // => prints: Api is being canceled
      } else {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const renderSmallSlides = this.state.titles.map((slide, index) =>
      <SlideSmall key={index} title={slide} data={this.state.movieData[index]} />
    );

    return (
      <div className="main__container">
        <div className="main__wrap">
          {renderSmallSlides}
        </div>
      </div>
    )
  }
}

export default MainContainer;
