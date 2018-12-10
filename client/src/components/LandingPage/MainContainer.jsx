import React, { Component } from 'react'
import SlideSmall from '../LandingPage/SlideSmall';

import '../../scss/partials/maincontent.scss';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ['Popular', 'Upcoming', 'Now Playing']
    }
  }

  render() {
    return (
      <div className="main__container">
        <div className="main__wrap">
          <SlideSmall title={this.state.titles[0]}/>
          <SlideSmall title={this.state.titles[1]}/>
          <SlideSmall title={this.state.titles[2]}/>
        </div>
      </div>
    )
  }
}

export default MainContainer;
