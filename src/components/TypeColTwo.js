import React, { Component } from 'react';
import TypeCol from './TypeCol.js';

const colData = {
	title: 'Talk Papers',
	text: 'Some Text',
}	

const TypeColTwo = (props) => {
  return <TypeCol colData={colData} />
}

export default TypeColTwo;