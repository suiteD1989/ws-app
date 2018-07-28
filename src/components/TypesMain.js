import React from 'react';
// import TypeColOne from './TypeColOne.js';
// import TypeColTwo from './TypeColTwo.js';
// import TypeColThree from './TypeColThree.js';
// import TypeColFour from './TypeColFour.js';

const colData = [
  {
    title: '⌘ Fun Papers',
    text: 'Some Text',
  },
  {
    title: 'Talk Papers',
    text: 'Some Text',
  },
  {
    title: 'Creative paper',
    text: 'Some Text',
  },
  {
    title: '⌘ Business papers',
    text: 'Some Text',
  }
]

class TypeMain extends React.Component {
  render() {
    return (
      <div className="types">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <TypeCol items={colData}/>
          </div>
        </div>
      </div>
    );
  }
}


function TypeCol({ items }) {
    return items.map((item, index) => (
      <div key={index} className="col-md-3 col-sm-12 type-col">
        <div className="col-12">
          <span>{item.title}</span>
        </div>
        <div className="col-12">
          <p>{item.text}</p>
        </div>
      </div>
    ));
}

export default TypeMain;