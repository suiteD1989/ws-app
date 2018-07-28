import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Four',
	subtitle: 'Sub Title Four',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.', 
	image: 'slider_image_4.png'
}

const SliderFour = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderFour;