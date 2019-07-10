import React from 'react';
import './Employers.scss';

class Employers extends React.Component {
  render() {
    return (
      <section className="section container">
        <h1 className="title"> Experience </h1>
        <div className="columns is-vcentered">
          <div className="column has-text-centered is-3">
            <a className="image">
              <img className="" src="venuemob.png" alt="venuemob logo" width="50px"/>
            </a>
          </div>
          <div className="column is-3">
            <a className="image">
              <img className="" src="myob.png" alt="myob logo" width="50px"/>
            </a>
          </div>
          <div className="column is-3">
            <a className="image">
              <img src="deloitte.png" alt="Deloitte logo" width="50px"/>
            </a>
          </div>
          <div className="column is-3">
            <a className="image">
              <img src="gcomm.webp" alt="GCOMM logo" width="50px"/>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Employers;
