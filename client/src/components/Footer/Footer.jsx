import React, { Component } from 'react'

import '../../scss/partials/footer.scss';
import logo from '../../images/tmdb.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrap">
          <div className="image__wrap">
            <img src={logo} alt="the movie database logo" />
          </div>
          <div className="footer-content__container">
          
          </div>
        </div>
        <div className="footer--small">
          <div className="copyright">Copyright&copy; 2018. Created by v1st, powered by <a href="https://www.themoviedb.org/" className="tmdb__link">TheMovieDB</a> API.</div>
        </div>
      </footer>
    )
  }
}

export default Footer;
