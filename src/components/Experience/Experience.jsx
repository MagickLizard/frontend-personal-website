import React from 'react';
import './experience.scss';

class Experience extends React.Component {
  render() {
    return (
      <section className="section container">
        <h1 className="title"> Experience </h1>
        <div className="columns is-vcentered">
          <a className="column is-3 employers">
            <div className="image">
              <img src="venuemob.png" alt="venuemob logo" width="50px"/>
            </div>
          </a>
          <a className="column is-3 employers">
            <div className="image">
              <img src="myob.png" alt="myob logo" width="50px"/>
            </div>
          </a>
          <a className="column is-3 employers">
            <div className="image">
              <img src="deloitte.png" alt="Deloitte logo" width="50px"/>
            </div>
          </a>
          <a className="column is-3 employers">
            <div className="image">
              <img src="gcomm.webp" alt="GCOMM logo" width="50px"/>
            </div>
          </a>
        </div>
      </section>
    );
  }
}
export default Experience;
