import React from 'react';
import './navbar.scss';
import LizardLogo from '../../img/dragonsmall.png';
class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={LizardLogo} width="50" height="28" alt="home page" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            href="/"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fas fa-home" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="mailto:lizzieking521@gmail.com" target="_blank" rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fas fa-paper-plane" />
              </span>
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/projects">
                <span className="icon">
                  <i className="fas fa-bezier-curve" alt="Portfolio" />
                </span>
              </a>
              <div className="navbar-dropdown is-dark">
                <a className="navbar-item" href="/projects">
                  Travel Iternary project
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="navbar-item"
                  href="https://github.com/MagickLizard"
                >
                  <span className="icon">
                    <i className="fab fa-github" alt="lizzie's github" />
                  </span>
                </a>
                <a
                  className="navbar-item"
                  href="https://www.linkedin.com/in/elizabeth-king-11a978a2"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin" alt="lizzie's linkedin" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
