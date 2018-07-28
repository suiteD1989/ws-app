import React, { Component } from 'react';
import SlideContainer from './SlideContainer.js';
import Image from '../images/slider_image_1.png';

const slideData = {
	title: 'Title One',
	subtitle: 'Sub Title One',
	text: 'Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.',
	image: 'slider_image_1.png' 
}	

const SliderOne = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderOne;