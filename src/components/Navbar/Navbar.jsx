import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img className="is-550px-550px" src="dragon.png" alt="home page" />
          </a>
          <div id="navbarBasic" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                <span className="icon">
                  <i className="fas fa-home" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/elizabeth-king-11a978a2"
              >
                <span className="icon">
                  <i className="fas fa-paper-plane" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/elizabeth-king-11a978a2"
              >
              <span className="icon">
              <i className="fas fa-fire" alt="Portfolio" />
            </span>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="https://github.com/MagickLizard">
            <span className="icon">
              <i className="fab fa-github" alt="lizzie's github" />
            </span>
          </a>
          <a className="navbar-item" href="https://www.linkedin.com/in/elizabeth-king-11a978a2">
            <span className="icon">
              <i className="fab fa-linkedin-in" alt="lizzie's linkedin" />
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
export default NavBar;
