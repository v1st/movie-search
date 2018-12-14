import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import MovieContent from './MovieContent';
import Footer from '../Footer/Footer';

class Movie extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MovieContent />
        <Footer />
      </div>
    )
  }
}

export default Movie;
