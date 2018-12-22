import React, { Component } from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import '../../scss/partials/searchpage.scss';

export class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
    }
  }

  componentDidUpdate(prevProps) {
    // Check search input and gather requested data
    if (this.props.match.params.query !== prevProps.match.params.query) {
      console.log(this.props.match.params.query)
      axios.post(`/api/search/${this.props.match.params.query}`, {
        query: this.props.match.params.query
      })
        .then(response => {
          this.setState({
            searchResults: response.data.payload.results
          });
        })
        .catch(err => console.log(err));
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    // const { match, location, history } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <main className="searchpage">
          
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(SearchPage);

