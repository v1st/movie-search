import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Movie from './components/Movie/Movie';
import Search from './components/Search/SearchPage';
import Missing from './components/Missing';
import ScrollToTop from './components/ScrollToTop';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Switch>
              <Route path='/' component={LandingPage} exact />
              <Route path="/movie/:id" component={Movie}/>
              <Route path="/search/:query" component={Search} />
              <Route path="/search/" component={Search} />
              <Route component={Missing} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
