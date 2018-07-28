import React, { Component } from 'react';
import TypeCol from './TypeCol.js';

const colData = {
	title: '⌘ Fun Papers',
	text: 'Some Text',
}	

const TypeColOne = (props) => {
  return <TypeCol colData={colData} />
}

export default TypeColOne;