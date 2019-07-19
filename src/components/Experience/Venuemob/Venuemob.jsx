import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import VenuemobImage from '../../../img/venuemob.png';

class Venuemob extends React.Component {
  render() {
    return (
      <section className="section">
        <section className="section columns is-horizontal-center">
          <div className="image employers">
            <ExperienceImage
              imageRef={VenuemobImage}
              imageName={VenuemobImage}
            />
          </div>
        </section>
        <div className="container columns">
          <div className="column is-2" />
          <div className="column is-4">
            <h3 className="title is-6 experience-info">
              Contributions
            </h3>

            Api's I have deployed into production include:
            <br /> 
            <br />
            Managing internal clients & external client data & their
            interactions.
            <br />
            <br />
            A notification API for updating workflows and notifications internally and externally.
            <br />
            <br />
            Managing booking information for venues.
            <p className="content" />
          </div>
          <div className="column is-4">
            <p className="content experience-info">
              I extended and built React components related to notifications.
              <br />
              <br />
              Whilst at Venuemob I introduced the SCRUM framework (including
              Planning, Grooming and Retrospectives).
              <br />
              <br />
              On a day to day basis I did pair programming, mentoring, regular
              code reviews and behaviour driven development.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Venuemob;
