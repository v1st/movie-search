import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
