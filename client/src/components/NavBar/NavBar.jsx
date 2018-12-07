import React, { Component } from 'react'
import '../../scss/partials/navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">Movie Search</div>

        <form className="searchbar__form">
          <input className="searchbar__input" type="search" placeholder="Search" aria-label="Search" />
          <button className="searchbar__button" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

export default NavBar;
