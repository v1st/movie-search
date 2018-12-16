import React, { Component } from 'react'
import '../../scss/partials/moviecontent.scss';

class MovieContent extends Component {
  render() {
    return (
      <main className="main__container">
        <div className="poster__wrap">
          <img src="https://image.tmdb.org/t/p/original/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg" alt="moive poster" />
        </div>

        <div className="movie__container">
          <div className="movie-info__wrap">
            <h1 className="movie__title">Aquaman</h1>
            <div className="movie__rating">5/10</div>
            <div></div>
            <div className="movie__summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae officiis pariatur vel iure, mollitia corrupti. Esse enim quidem consectetur ex velit doloremque odio, ad natus et, fuga cupiditate ratione voluptates!</div>
          </div>

        </div>
      </main>
    )
  }
}

export default MovieContent;
