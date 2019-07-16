import React from 'react';
import ImageOfMe from '../../img/me.jpg';

class Message extends React.Component {
  render() {
    return (
      <div className="section">
      <div className="columns">
        <div className="column is-2">
          <figure className="image is-128x128">
            <img className="is-rounded" src={ImageOfMe} alt="me" />
          </figure>
        </div>
        <div className="column is-10">
          <div className="card-content message-body">
            <h2 className="title">  I'm lizzie!</h2>
            <h2 className="subtitle">
              <a href="https://github.com/MagickLizard">@magicklizard</a>
            </h2>
            <div className="content">
              I have unquestionable desire to make things better than the day
              before. <br />
              <p>#javascriptislife</p>
            </div>
          </div>
          <br />
          <p>
            I enjoy breaking code bases into micro-services so code is better
            for the next developer.
          </p>
          <p>I am learning React (this website is using React and Bulma).</p>
        </div>
      </div>
      </div>
    );
  }
}
export default Message;
