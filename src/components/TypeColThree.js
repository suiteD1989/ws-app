
import React, { Component } from 'react';
import TypeCol from './TypeCol.js';

const colData = {
	title: 'Creative paper',
	text: 'Some Text',
}	

const TypeColThree = (props) => {
  return <TypeCol colData={colData} />
}

export default TypeColThree;