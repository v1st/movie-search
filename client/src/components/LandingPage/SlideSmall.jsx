import React, { Component } from 'react'
import Swiper from 'swiper';

class SlideSmall extends Component {
  constructor() {
    super();
    this.state = {
      poster: ['https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg']
    }


  }

  componentDidMount() {
    // Init Swiper.js Carousel
    // eslint-disable-next-line
    const swiper2 = new Swiper('.swiper2', {
      init: true,
      slidesPerView: 6,
      spaceBetween: 15,
      loop: true,
      autoplayDisableOnInteraction: false,
      effect: 'slide',
      centeredSlides: true,
    });
  }


  render() {
    const renderedSlides =
      <div className="swiper-slide slide--small">
        <div className="slide__bg">
          <img src={this.state.poster[0]} alt="slide" />
        </div>

        <div className="slide__info">
          <div className="title">Title</div>
          <div className="rating">9.1</div>
          <div className="date">2008</div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      ;

    return (
      <div className="slider__section">
        <h2 className="title">{this.props.title}</h2>
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
            {renderedSlides}
            {renderedSlides}
            {renderedSlides}
            {renderedSlides}
            {renderedSlides}
            {renderedSlides}
          </div>

        </div>
        <div className="underline"></div>
      </div>
    )
  }
}

export default SlideSmall;
