import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Two',
	subtitle: 'Sub Title Two',
	text: 'Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.', 
	image: 'slider_image_2.png'
}

const SliderTwo = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderTwo;