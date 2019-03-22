import React, { Component } from 'react';
import './message.scss';

class Message extends Component {
  render() {
    return (
      <div className="container section">
        <div className="tile is-ancestor">
          <div className="tile is-child">
            <article className="">
              <p className="title">MagickLizard</p>
              <p className="subtitle">A place full of magic!</p>
              <img className="img-logo" alt="dragon logo" src="dragon.png"></img>
            </article>
          </div>
          <div className="tile is-child">
            <article className="message">
              <div className="message-header">
                <p>About me</p>
              </div>
              <div className="message-body">
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-4">Lizzie King</p>
                    <p className="subtitle is-6"><a href="https://github.com/MagickLizard">@magicklizard</a></p>
                  </div>
                  <div className="content">
                  I have unquestionable desire to make things better than the day before. 
                   <a href="/" alt="link to nowhere">#javascriptislife</a>
                  </div>
                </div>
                <p className=""> I enjoy breaking projects into microservices so code is better for the next developer.</p>
                <p className=""> I am learning React (this website is in React).</p>
              </div>
            </article>
          </div>
        </div>
        <div className="container section">
          <p className="subtitle">Languages & Frameworks</p>
          <div className="columns">
            <div className="column">
              <img className="img-logo" src="node.png" alt="node.js logo " width="100px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="es6.svg" alt="es6 logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="html.png" alt="html logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="angular.svg" alt="angular logo" width="75px"></img>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <img className="img-logo" src="java.png" alt="node.js logo " width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="webpack.png" alt="es6 logo" width="65px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="react.png" alt="html logo" width="95px"></img>
            </div>
            <div className="column">
              <img className="img-logo" src="cplusplus.png" alt="angular logo" width="65px"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
