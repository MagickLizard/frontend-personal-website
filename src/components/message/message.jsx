import React from 'react';
import ImageOfMe from '../../img/mequality.jpg';
import './message.scss';
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
}
scrollToFilters = () => {
  window.scrollTo({ top: 460, behavior: 'smooth' })
}
  render() {
    return (
        <div className="container">
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
                    I am currently upskilling on React and Bulma.
                  </p>
                </div>
              </div>
              <br />
            </div>
          </div>
              <div onClick={this.scrollToFilters} className="icon is-large fa-stack fa-lg has-text-centered icon-button">
                <i className="fas fa-angle-down" />
              </div>

        </div>
    );
  }
}
export default Message;
