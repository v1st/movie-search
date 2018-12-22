import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../scss/partials/navbar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSubmit(e) {
    // e.preventDefault();
  }

  render() {
    return (
      <nav className="navbar">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className="logo">Movie Search</div>
        </Link>

        <form className="searchbar__form" onSubmit={this.handleSubmit}>
          <input onChange={(e) => this.handleInput(e)} value={this.state.searchInput} className="searchbar__input" type="search" placeholder="Search" aria-label="Search" />
          <Link to={`/search/${this.state.searchInput}`}>
            <button className="searchbar__button" type="submit">Search</button>
          </Link>
        </form>
      </nav>
    )
  }
}

export default NavBar;
