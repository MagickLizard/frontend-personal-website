import React from 'react';
import './experience.scss';
import ExperienceImage from './ExperienceImage/ExperienceImage';

class Experience extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="columns is-vcentered is-10">
          <ExperienceImage imageName="venuemob" imageRef="venuemob.png" />
          <ExperienceImage imageName="myob" imageRef="myob.png" />
          <ExperienceImage imageName="deloitte" imageRef="deloitte.png" />
          <ExperienceImage imageName="gcomm" imageRef="gcomm.webp" />
        </div>
        <br/>
      </section>
    );
  }
}
export default Experience;
