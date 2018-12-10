import React, { Component } from 'react';
import Swiper from 'swiper';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: ['https://image.tmdb.org/t/p/original/5yAEbTXiJZQpNx7eCyyOhnY9MYw.jpg', 'https://image.tmdb.org/t/p/original/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg',
        'https://image.tmdb.org/t/p/original/7IBpOrw0ATwL1AOV97mtsceDpYs.jpg', 'https://image.tmdb.org/t/p/original/ujAY1ad7yS2TfV0GDNGUZ7DK0mo.jpg'],
    }
  }

  componentDidMount() {
    // Init Swiper.js Carousel
    // eslint-disable-next-line
    const swiper = new Swiper('.swiper1', {
      init: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      effect: 'slide',
      centeredSlides: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next__button',
        prevEl: '.previous__button',
      },
    });
  }

  render() {
    // Render slides for Landing carousel
    const renderedSlides = this.state.slides.map((slide, index) => {
      return (
        <div key={index} className="swiper-slide">
          <img src={slide} alt="slide" />

          <div className="banner__info">
          <div className="banner__title">Title</div>
          <div className="banner__rating">9.1</div>
          <div className="banner__date">2008</div>
          <div className="banner__text">
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        </div>
      )});

    return (
      <div className="carousel__wrap swiper-container swiper1">
        <div className="swiper-wrapper">
          {renderedSlides}
        </div>
        <button className="previous__button swiper-button-prev">&#8249;</button>
        <button className="next__button swiper-button-next">&#8250;</button>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Carousel;
