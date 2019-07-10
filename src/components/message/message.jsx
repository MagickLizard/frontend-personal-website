import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="tile is-child">
        <article className="message">
          <div className="message-header">
            <p>About me</p>
          </div>
          <div className="message-body">
            <div className="card-content">
              <h1 className="subtitle">Lizzie King</h1>
              <h2 className="subtitle">
                <a href="https://github.com/MagickLizard">@magicklizard</a>
              </h2>
              <div className="content">
                I have unquestionable desire to make things better than the day
                before. <br />
                <p>#javascriptislife</p>
              </div>
            </div>
            <p>
              I enjoy breaking projects into microservices so code is better for
              the next developer.
            </p>
            <p> I am learning React (this website is in React).</p>
          </div>
        </article>
      </div>
    );
  }
}
export default Message;
