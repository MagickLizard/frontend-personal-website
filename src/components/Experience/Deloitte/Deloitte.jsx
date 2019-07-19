import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import DeloitteImage from '../../../img/deloitte.png';

class Deloitte extends React.Component {
  render() {
    return (
      <section className="section">
        <section className="section columns is-horizontal-center">
          <div className="image employers">
            <ExperienceImage
              imageRef={DeloitteImage}
              imageName={DeloitteImage}
            />
          </div>
        </section>
        <div className="container columns">
          <div className="column is-2" />
          <div className="column is-4 experience-info">
            <h3 className="title is-6 experience-info">Contributions</h3>
            Contributed classes and test classes in Java.
            <br />
            Daily deployments to SIT and UAT.
            <br />
            <br />
            Worked on large data migration setup for production environment.
            <br />
            <br />
            Resolving defects and updating Test Team for Backend Development.
            <br />
            <p className="content" />
          </div>
          <div className="column is-4">
            <p className="content experience-info">
              Constructed Visualforce pages & email templates in HTML5. Updated
              SASS and CSS.
              <br />
              <br />
              Fortnightly production releases.
              <br />
              <br />
              Ensuring clear & concise communication between the external
              stakeholders and internal.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Deloitte;
