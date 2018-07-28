import React, { Component } from 'react';
import TypeCol from './TypeCol.js';

const colData = {
	title: '⌘ Business papers',
	text: 'Some Text',
}	

const TypeColFour = (props) => {
  return <TypeCol colData={colData} />
}

export default TypeColFour;