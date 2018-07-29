import React from 'react';
import HeaderImage from '../images/header_image.png';

class HeaderMain extends React.Component {
  render() {
    return (
      <div className="header d-flex">
        <HeaderContents />
      </div>
    );
  }
}

class HeaderContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "We make baautiful papers and books that you'll love to have.",
      subtitle: "see our papers",
    };
  }

  render() {
    return (
      <div id="home" className="header-text justify-content-center align-self-center mx-auto" ref={(section) => { this.home = section; }}>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
        <img alt="header" src={HeaderImage}></img>
      </div>
    );
  }
}

export default HeaderMain;