import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes';
import ScrollToTop from './components/ScrollToTop';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Routes />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
