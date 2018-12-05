import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import '../../scss/partials/landingpage.scss';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['https://image.tmdb.org/t/p/original/5yAEbTXiJZQpNx7eCyyOhnY9MYw.jpg', 'https://image.tmdb.org/t/p/original/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg',
        'https://image.tmdb.org/t/p/original/7IBpOrw0ATwL1AOV97mtsceDpYs.jpg', 'https://image.tmdb.org/t/p/original/ujAY1ad7yS2TfV0GDNGUZ7DK0mo.jpg'],
      isDown: false,

    }
  }





  render() {
    const renderedSlides = this.state.slides.map(slide => {
      return <div className="carousel__item"><img src={slide} alt="slide" /></div>
    });

    return (
      <div>
        <NavBar />
        <div className="carousel carousel-slider">
          {renderedSlides}
        </div>
        <Footer />
      </div>
    )
  }
}

export default LandingPage;
