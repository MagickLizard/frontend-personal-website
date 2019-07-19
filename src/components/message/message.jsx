import React from 'react';
import ImageOfMe from '../../img/me.jpg';
import './message.scss';

class Message extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="section container">
          <div className="columns">
            <div className="column is-4 is-flex is-horizontal-center">
              <figure className="image is-128x128">
                <img
                  className="is-rounded imageOfMe"
                  src={ImageOfMe}
                  alt="me"
                />
              </figure>
            </div>
            <div className="column is-8">
              <div className="card-content message-body">
                <h2 className="title is-1"> Hi, I'm lizzie</h2>

                <div className="content">
                  <h2 className="subtitle">
                    <a className="linkMessage"href="https://github.com/MagickLizard">@magicklizard</a>
                  </h2>
                  <p className="content">
                    I have unquestionable desire to make things better than the
                    day before.
                  </p>
                  <p className="content is-horizontal-center">
                    #javascriptislife
                  </p>
                  <p>
                    I enjoy refactoring code bases into micro-services so code
                    is better for the next developer.
                  </p>
                  <p className="content">
                    I am currently learning React and Bulma.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="has-text-centered">
            {/* <a href="/"> */}
            <span className="icon is-large">
              <span className="fa-stack fa-lg">
                <i className="fas fa-angle-down" />
              </span>
            </span>
            {/* </a> */}
          </div>
        </div>
      </section>
    );
  }
}
export default Message;
