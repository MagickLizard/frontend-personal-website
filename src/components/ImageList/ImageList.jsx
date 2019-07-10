import React from 'react';

class ImageList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="">
          <h2 className="title">Languages & Frameworks</h2>
        </div>
        <div className="container columns">
          <div className="column is-5">
            <div className="column is-8">
              <img
                className="image"
                src="node.png"
                alt="node.js logo"
                width="70px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="image"
                src="es6.svg"
                alt="es6 logo"
                width="65px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="image"
                src="html.png"
                alt="html logo"
                width="65px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="image"
                src="angular.svg"
                alt="angular logo"
                width="75px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
          </div>
          <div className="column is-5">
            <div className="column is-8">
              <img
                className="img-logo"
                src="java.png"
                alt="node.js logo"
                width="65px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="img-logo"
                src="react.png"
                alt="html logo"
                width="95px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="img-logo"
                src="cplusplus.png"
                alt="angular logo"
                width="65px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
            <div className="column is-8">
              <img
                className="img-logo"
                src="js.png"
                alt="angular logo"
                width="65px"
              />
              <br />
              <progress className="progress is-small" value="80" max="100">
                45%
              </progress>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ImageList;
