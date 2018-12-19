import React, { Component } from 'react'

import '../../scss/partials/lightbox.scss';

class LightBox extends Component {
  render() {
    return (
      <div className={this.props.lightboxState} onClick={this.props.onClick}>
        <div className="video__container">
          <iframe src={this.props.videoURL} frameBorder="0" allowFullScreen title={this.props.title}></iframe>
        </div>
      </div>
    )
  }
}

export default LightBox;