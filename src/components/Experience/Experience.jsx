import React from 'react';
import './experience.scss';
import ExperienceImage from './ExperienceImage/ExperienceImage';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo';
import Venuemob from '../../img/venuemob.png';
import Myob from '../../img/myob.png';
import Deloitte from '../../img/deloitte.png';
import Gcomm from '../../img/gcomm.png';

class Experience extends React.Component {
  state = { company: '', title: '' };
  onClickFunc = (event, name, title) => {
    event.preventDefault();
    this.setState({ company: name, title: title });
  };
  render() {
    return (
      <section className="section">
          <h1 className="title heroTitle largeTitle">Previous Experience</h1>
      </section>
    );
  }
}
export default Experience;
