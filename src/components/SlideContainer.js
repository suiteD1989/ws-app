import React from 'react';

class SlideContainer extends React.Component {
  render() {
    return (
      <div className="slider-text slider justify-content-center align-self-center mx-auto">
        <div className="row">
          <span className="slide-title mx-auto">Featured work.</span>
        </div>
        <div className="row">
          <div className="image-container">
            <img alt="slider" src={require('../images/'+this.props.slideData.image)}></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-left title">
            <span>{this.props.slideData.title}</span>
          </div>
        </div> 
        <div className="row">
          <div className="col-md-12 text-left subtitle">
            <span>{this.props.slideData.subtitle}</span> <span>&#8594; View more details</span>
          </div>
        </div>  
        <div className="row">
          <div className="col-md-12 text-left">
            <p>{this.props.slideData.text}</p>
          </div>
        </div>   
      </div>
    );
  }
}

export default SlideContainer;