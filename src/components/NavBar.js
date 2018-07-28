import React from 'react';
import NavLogo from '../images/nav_logo.png';

class NavContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand">
            <img src={NavLogo}></img>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-lg-left" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <NavLink>Home</NavLink>
              <NavLink>Featured Work</NavLink>
              <NavLink>Privacy</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>FAQ</NavLink>
              <NavLink>Contact</NavLink>
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
        <a className="nav-item nav-link" href="#">{this.props.children}
        </a>
      </li>
    );
  }
}

class NavMain extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>test</h1>
      </div>
      );
  }
}

export default NavContainer;