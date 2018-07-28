import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Three',
	subtitle: 'Sub Title Three',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.',
	image: 'slider_image_3.png' 
}

const SliderThree = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderThree;