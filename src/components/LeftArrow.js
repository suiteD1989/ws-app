import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide}  className="backArrow my-auto">
      <i className="fa fa-angle-left" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;