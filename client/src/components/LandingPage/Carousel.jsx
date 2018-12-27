import React, { Component } from 'react';
import Swiper from 'swiper';
import axios from 'axios';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      isLoading: true
    }

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  signal = axios.CancelToken.source();

  componentDidMount() {
    this.fetchAPI();
  }

  componentDidUpdate() {
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

  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

  fetchAPI() {
    // Serve Movie Database info from backend
    axios.get('/api/header', {
      cancelToken: this.signal.token
    })
      .then(res => {
        let slicedArr = res.data.pageResults.results.slice(0, 4);
        this.setState({
          carouselData: slicedArr,
          isLoading: false
        })
      })
      .catch(e => console.log(e));
  }

  render() {
    // Render slides for Landing carousel
    const renderedSlides = this.state.carouselData.map((slide, index) => {
      const { overview, backdrop_path, title, release_date, vote_average } = slide
      let img = `https://image.tmdb.org/t/p/original${backdrop_path}`;

      return (
        <div key={index} className="swiper-slide">
          <img src={img} alt="slide" />

          <div className="banner__info">
            <div className="banner__title">{title}</div>
            <div className="banner__rating">{vote_average}/10</div>
            <div className="banner__text-wrap">
              <div className="banner__date">{release_date}</div>
              <div className="banner__text">
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="swiper-container swiper1">
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
