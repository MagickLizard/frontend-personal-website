import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import VenuemobImage from '../../../img/venuemob.png';

class Venuemob extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container columns">
          <div className="column is-2">
          </div>
        <div className="column is-4">
        <div
          className="image column employers">
          <ExperienceImage imageRef={VenuemobImage} imageName={VenuemobImage} />
        </div>
        <h1 className="title is-6 experience-info"> Full Stack Developer </h1>
        <p className="content experience-info">
          A member of the development team building on the Venuemob platform.

          </p>
          <h3 className="title is-6 experience-info">
          I worked on decommissioning two codebases: 
          </h3>

          <p className="content experience-info">
          A node.js api and a PHP application into new micro-services.
          <br />
          <br />
          This involved moving existing internal and external workflows and
          MySQL logic into different locations.
          <br />
          The microservices where built using node.js, Javascript and ES6. 
          <br />
          <br />
          </p>
          </div>
          <div className="column is-4">
          <br/>
          <br />
          <br/>
          <br />
          <h3 className="title is-6 experience-info">
          Some of the micro-services include:
          </h3>
          <p className="content experience-info">

          Managing internal clients & external client data & their interactions.
          <br />
          <br />
          A notification API for:
          <br />
          sending emails, sending slack notifications &
          updating workflows for internal and external use.
          <br />
          Managing internal booking information for venues.
          <br />
          <br />
          Whilst at Venuemob I introduced the SCRUM framework (including
          Planning, Grooming and Retrospectives).
          <br />
          <br />
          On a day to day basis I did peer programming, mentoring, regular code
          reviews and behaviour driven development.
          </p>
        </div>
        </div>
      </section>
    );
  }
}
export default Venuemob;
