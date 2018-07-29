import React from 'react';
import NavLogo from '../images/nav_logo.png';
import Scrollchor from 'react-scrollchor';

class NavContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand">
            <img alt="Logo" src={NavLogo}></img>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-lg-left" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <NavLink><Scrollchor to="home">Home</Scrollchor></NavLink>
              <NavLink><Scrollchor to="slider">Featured Work</Scrollchor></NavLink>
              <NavLink><Scrollchor to="faq">Privacy</Scrollchor></NavLink>
              <NavLink><Scrollchor to="faq">About Us</Scrollchor></NavLink>
              <NavLink><Scrollchor to="faq">FAQ</Scrollchor></NavLink>
              <NavLink><Scrollchor to="contact">Contact</Scrollchor></NavLink>
            </ul>  
          </div>
        </nav>
      </div>

    );
  }
}

class NavLink extends React.Component {
  render() {
    return (
      <li className="nav-item-link">
        <span className="nav-item nav-link section-link">{this.props.children}</span>
      </li>
    );
  }
}

export default NavContainer;