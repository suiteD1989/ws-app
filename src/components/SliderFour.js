import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Four',
	subtitle: 'Sub Title Four',
	text: 'Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.', 
	image: 'slider_image_4.png'
}

const SliderFour = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderFour;