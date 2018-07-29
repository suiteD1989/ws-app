import React from 'react';
import Image from '../images/tick.png';

const ButtonInfo = [
    { 
      id: 1,
      title: 'About', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.'
    },
    {
      id: 2,
      title: 'Paper', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.'
    },
    {
      id: 3,
      title: 'Privacy', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.'
    },
  ];

class FaqMain extends React.Component {
 
  render() {
    return (
      <div id="faq" className="faq">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <Button items={ButtonInfo} />
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <img alt="FAQ" src={Image}/>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-10">
              <p>Paper is a thin material produced by pressing together moist fibers, typically cellulose pulp derived from wood, rags or grasses, and drying them into flexible sheets.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Button({ items }) {
    return items.map((item, index) => (
      <div key={index}  className="col-md-2 d-flex justify-content-center button-container ">
        <div id={item.id} className="button">
          <span>{item.title}</span>
        </div>
      </div>
    ));
}

export default FaqMain;