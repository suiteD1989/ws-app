import React, { Component } from 'react';
import SliderOne from './SliderOne.js';
import SliderTwo from './SliderTwo.js';
import SliderThree from './SliderThree.js';
import SliderFour from './SliderFour.js';
import RightArrow from './RightArrow.js';
import LeftArrow from './LeftArrow.js';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  render() {

    return (
      <div className="slider no-padding d-flex">
        <LeftArrow previousSlide={this.previousSlide} />
        
        { this.state.slideCount === 1 ? <SliderOne /> : null }
        { this.state.slideCount === 2 ? <SliderTwo /> : null }
        { this.state.slideCount === 3 ? <SliderThree /> : null }
        { this.state.slideCount === 4 ? <SliderFour /> : null }

        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
 
  nextSlide() {
      if(this.state.slideCount == 4) {
        this.setState({ slideCount: 1 })
      }
      else {
        this.setState({ slideCount: this.state.slideCount + 1 })
      }
  }

  previousSlide() {
      if(this.state.slideCount == 1) {
        this.setState({ slideCount: 4 })
      }
      else {
        this.setState({ slideCount: this.state.slideCount - 1 })
      }
  }
}