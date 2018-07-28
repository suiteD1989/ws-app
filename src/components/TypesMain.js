import React from 'react';
import TypeColOne from './TypeColOne.js';
import TypeColTwo from './TypeColTwo.js';
import TypeColThree from './TypeColThree.js';
import TypeColFour from './TypeColFour.js';


class TypeMain extends React.Component {
  render() {
    return (
      <div className="types">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <TypeColOne />
            <TypeColTwo />
            <TypeColThree />
            <TypeColFour />
          </div>
        </div>
      </div>
    );
  }
}

export default TypeMain;