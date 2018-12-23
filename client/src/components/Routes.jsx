import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import Movie from './Movie/Movie';
import Search from './Search/SearchPage';
import Missing from './Missing';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/search/:query" component={Search} />
        <Route path="/search/" component={Search} />
        <Route component={Missing} />
      </Switch>
    )
  }
}

export default Routes;