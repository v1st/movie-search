import React, { Component } from 'react'
import SlideSmall from '../LandingPage/SlideSmall';
import axios from 'axios';

import '../../scss/partials/maincontent.scss';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ['Popular', 'Upcoming', 'Now Playing'],
      movieData: []
    }
  }

  componentDidMount() {
    // Serve Movie Database info from backend
    axios.get('/api')
      .then(res => this.setState({
        movieData: res.data
      }))
      .catch(e => console.log(e));
  }


  render() {
    const renderSmallSlides = this.state.titles.map((slide,index) => 
      <SlideSmall key={index} title={slide} data={this.state.movieData[index]}/>
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
