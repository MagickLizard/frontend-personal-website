import React from 'react';
import './imageList.scss';
class ImageList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Tech stack</h2>
        </div>
        <section className="section">
        <div className="container">
          <div className="columns is-12">
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-node fa-stack-2x iconLarge" />
                </span>
              </span>
              <br />
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-node-js fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-react fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-angular fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
          </div>
        </div>
        <br/>
        <div className="container">
          <div className="columns is-12">
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-java fa-stack-2x iconLarge" />
                </span>
              </span>
              <br />
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-html5 fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-css3-alt fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
            <a className="column is-3">
              <span className="icon is-large">
                <span className="fa-stack fa-lg">
                  <i className="fab fa-aws fa-stack-2x iconLarge" />
                </span>
              </span>
            </a>
          </div>
        </div>
        </section>
      </section>
    );
  }
}
export default ImageList;
