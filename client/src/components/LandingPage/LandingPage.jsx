import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import Swiper from 'swiper';

import '../../scss/partials/landingpage.scss';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['https://image.tmdb.org/t/p/original/5yAEbTXiJZQpNx7eCyyOhnY9MYw.jpg', 'https://image.tmdb.org/t/p/original/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg',
        'https://image.tmdb.org/t/p/original/7IBpOrw0ATwL1AOV97mtsceDpYs.jpg', 'https://image.tmdb.org/t/p/original/ujAY1ad7yS2TfV0GDNGUZ7DK0mo.jpg'],
    }
  }

  componentDidMount() {
    // Init Swiper.js Carousel
    const swiper = new Swiper('.swiper-container', {
      init: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      autoplayDisableOnInteraction: false,
      effect: 'slide',
      centeredSlides: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


  render() {
    // Render slides for Landing carousel
    const renderedSlides = this.state.slides.map((slide, index) => {
      return <div key={index} className="swiper-slide"><img src={slide} alt="slide" /></div>
    });

    return (
      <div>
        <NavBar />
        <div className="carsouel__wrap swiper-container">
          <div className="swiper-wrapper">
            {renderedSlides}
          </div>
          <button className="previous__button swiper-button-prev" onClick={this.changeSlides} value="prev">Prev</button>
          <button className="next__button swiper-button-next" onClick={this.changeSlides} value="next">Next</button>
          <div className="swiper-pagination"></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default LandingPage;
