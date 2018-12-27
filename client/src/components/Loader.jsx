import React, { Component } from 'react'
import '../scss/partials/loader.scss'

class Loader extends Component {
  render() {
    return (
      <main className="loader__container">
        <div className="LoaderBalls">
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
          <div className="LoaderBalls__item"></div>
        </div>
      </main>
    )
  }
}

export default Loader;
