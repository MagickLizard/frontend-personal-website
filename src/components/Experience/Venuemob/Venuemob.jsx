import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import ExperienceInfo from '../ExperienceInfo/ExperienceInfo';
import VenuemobImage from '../../../img/venuemob.png';

class Venuemob extends React.Component {
  state = { company: '', title: '' };
  onClickFunc = (event, name, title) => {
    event.preventDefault();
    this.setState({ company: name, title: title });
  };
  render() {
    return (
      <section className="section">
        <a
          className="image column employers"
          onClick={(event) =>
            this.onClickFunc(event, 'Venuemob', 'Full Stack Developer')
          }
        >
          <ExperienceImage imageRef={VenuemobImage} imageName={VenuemobImage} />
        </a>
        <h1 className="subtitle experience-info"> Full Stack Developer </h1>
        <h2 className="subtitle"> </h2>
        <p className="content experience-info">
          A member of the development team building on the existing Venuemob
          platform.
          <br />
          I worked on decommissioning two large codebases, A node.js api and a
          PHP application into new micro-services.
          <br />
          <br />
          This involved moving existing internal and external workflows and
          MySQL logic into different locations.
          <br />
          The microservices where built using node.js, Javascript and es6. 
          <br />
          <br />
          Some of the micro-services include:
          <br />
          Managing internal clients & external client data & their interactions.
          <br />
          A notification api for sending emails, sending slack notifications &
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
        <ExperienceInfo
          experienceName={this.state.company}
          title={this.state.title}
        />
      </section>
    );
  }
}
export default Venuemob;
