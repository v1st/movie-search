import React, { Component } from 'react'
import Swiper from 'swiper';

import profile from '../../images/blank-profile.png';
import '../../scss/partials/castbar.scss';

class CastBar extends Component {
  componentDidMount() {
    this.forceUpdate();

    // Init Swiper.js Carousel
    // eslint-disable-next-line
    const swiper3 = new Swiper('.swiper3', {
      init: true,
      grabCursor: true,
      slidesPerView: 7,
      spaceBetween: 5,
      loop: true,
      autoplayDisableOnInteraction: false,
      effect: 'slide',
      centeredSlides: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 3500,
      },
      breakpoints: {
        // when window width is >= 800px
        800: {
          slidesPerView: 5,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
        },
        // when window width is >= 0px
        0: {
          slidesPerView: 2,
        }
      }
    });
  }
  
  render() {
    // Generate Cast Cards
    let renderedCards = this.props.data.map((actor, index) => {
      const { character, name, profile_path, } = actor;
      let img = `https://image.tmdb.org/t/p/w185${profile_path}`;
      if (!profile_path) {
        img = profile
      }

      return (
        <div key={index} className="swiper-slide cast__card">
          <div className="cast__pic-wrap">
            <img className="cast__pic" src={img} alt={name} />
          </div>
          <div className="cast__names">
            <span className="name">{name}</span>
            <span className="name">{character}</span>
          </div>
        </div>
      )
    });

    return (
      <React.Fragment>
        <div className="swiper-container swiper3">
          <div className="swiper-wrapper">
            {renderedCards}
          </div>
        </div>

        <div className="underline"></div>
      </React.Fragment >
    )
  }
}

export default CastBar;

