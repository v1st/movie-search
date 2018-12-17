import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

class SlideSmall extends Component {
  constructor() {
    super();
    this.state = {
      poster: ['https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg'],
    }
  }

  componentDidUpdate() {
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
    let renderedSlides;
    if (this.props.data) {
      renderedSlides = this.props.data.pageResults.results.map((slide, index) => {
        const { id, overview, poster_path, title, release_date, vote_average } = slide
        let img = `https://image.tmdb.org/t/p/original${poster_path}`;

        return (
          <React.Fragment key={index}>
            <Link to={{ pathname: `/movie/${id}` }} key={index} className="swiper-slide slide--small">
              <div className="slide__bg">
                <img src={img} alt="slide" />
              </div>

              <div className="slide__info">
                <div className="title">{title}</div>
                <div className="rating">{vote_average}/10</div>
                <div className="date">{release_date}</div>
                <div className="text">
                  {/* <p>{overview}</p> */}
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      });
    }

    return (
      <div className="slider__section">
        <h2 className="title">{this.props.title}</h2>
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
            {renderedSlides}
          </div>
        </div>
        <div className="underline"></div>
      </div>
    )
  }
}

export default SlideSmall;
