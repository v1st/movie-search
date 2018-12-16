import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../scss/partials/navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className="logo">Movie Search</div>
        </Link>

        <form className="searchbar__form">
          <input className="searchbar__input" type="search" placeholder="Search" aria-label="Search" />
          <button className="searchbar__button" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

export default NavBar;
