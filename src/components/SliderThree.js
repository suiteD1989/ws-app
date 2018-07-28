import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Three',
	subtitle: 'Sub Title Three',
	text: 'Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.',
	image: 'slider_image_3.png' 
}

const SliderThree = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderThree;