import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import Carousel from '../LandingPage/Carousel';
import MainContainer from '../LandingPage/MainContainer';
import Footer from '../Footer/Footer';

import '../../scss/partials/landingpage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <MainContainer />
        <Footer />
      </div>
    )
  }
}

export default LandingPage;
