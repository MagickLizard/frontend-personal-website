import React from 'react';
import './experience.scss';
import ExperienceImage from './ExperienceImage/ExperienceImage';
import Venuemob from '../../img/venuemob.png';
import Myob from '../../img/myob.png';
import Deloitte from '../../img/deloitte.png';
import Gcomm from '../../img/gcomm.webp';

class Experience extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="columns is-vcentered is-10">
          <ExperienceImage imageName="venuemob" imageRef={Venuemob} />
          <ExperienceImage imageName="myob" imageRef={Myob} />
          <ExperienceImage imageName="deloitte" imageRef={Deloitte} />
          <ExperienceImage imageName="gcomm" imageRef={Gcomm} />
        </div>
        <br/>
      </section>
    );
  }
}
export default Experience;
