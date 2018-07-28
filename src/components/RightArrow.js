import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide}  className="nextArrow my-auto">
      <i className="fa fa-angle-right" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;