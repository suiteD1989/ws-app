import React from 'react';

const ButtonInfo = [
    { 
      id: 1,
      title: 'About', 
      text: 'Some text about the about page.'
    },
    {
      id: 2,
      title: 'Paper', 
      text: 'Paper is a thin material produced by pressing together moist fibers, typically cellulose pulp derived from wood, rags or grasses, and drying them into flexible sheets.'
    },
    {
      id: 3,
      title: 'Privacy', 
      text: 'Some text about the privacy page.'
    },
  ];

class FaqMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="faq">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <Button items={ButtonInfo} />
          </div>
        </div>
      </div>
    );
  }
}

function Button({ items }) {
    return items.map((item, index) => (
      <div key={index}  className="col-md-2 d-flex justify-content-center button-container type-col">
        <div id={index} className="button">
          <span>{item.title}</span>
        </div>
      </div>
    ));
}

export default FaqMain;