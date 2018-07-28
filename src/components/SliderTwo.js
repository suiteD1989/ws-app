import React from 'react';
import SlideContainer from './SlideContainer.js';

const slideData = {
	title: 'Title Two',
	subtitle: 'Sub Title Two',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.', 
	image: 'slider_image_2.png'
}

const SliderTwo = (props) => {
  return <SlideContainer slideData={slideData} />
}

export default SliderTwo;