import React from 'react';

const colData = [
  {
    icon: '⌘',
    title: ' Fun Papers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.',
  },
  {
    icon: <i className="fa fa-comments"></i>,
    title: ' Talk Papers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.',
  },
  {
    icon: <i className="fa fa-comments"></i>,
    title: ' Creative papers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.',
  },
  {
    icon: '⌘',
    title: ' Business papers',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet enim orci, at pretium lectus rhoncus at. Vivamus laoreet ullamcorper turpis eu scelerisque. Integer ornare urna leo, id aliquet arcu luctus ut. Pellentesque eu sem molestie, fermentum nulla pulvinar, imperdiet massa.',
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
      <div key={index} className="col-md-6 col-lg-3 col-sm-12 type-col">
        <div className="col-12">
          <span>{item.icon}{item.title}</span>
        </div>
        <div className="col-12">
          <p>{item.text}</p>
        </div>
      </div>
    ));
}

export default TypeMain;