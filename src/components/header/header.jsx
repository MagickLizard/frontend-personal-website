import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  
  getMenu() {
    return (
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-start">
            <a className="navbar-item" href="https://github.com/MagickLizard" alt="github url">
              <img src="lm.png" alt="lizardmagic" className="logo">
              </img>
            </a>
            <div id="navbarBasic" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home</a>
                <a className="navbar-item" href="https://www.linkedin.com/in/elizabeth-king-11a978a2">
                  Contact </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div id="navbarBasic" className="navbar-menu" />
          <div className="navbar-start">
            <a className="navbar-item" href="https://www.linkedin.com/in/elizabeth-king-11a978a2">
              Linkedin</a>
            <a className="navbar-item" href="https://github.com/MagickLizard">
              Github </a>
          </div>
        </div>
      </nav>
    );
  }

  render() {
    return (this.getMenu());
  }
}

export default Header;
