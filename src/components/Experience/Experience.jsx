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
      <section className="container">
          <h1 className="title heroTitle">Previous Experience</h1>
        <div className="section columns is-10">
          <a
            className="image column is-3 employers"
            onClick={(event) =>
              this.onClickFunc(event, 'Venuemob', 'Full Stack Developer')
            }
          >
            <ExperienceImage imageRef={Venuemob} imageName={Venuemob} />
          </a>
          <a
            className="image column is-3 employers"
            onClick={(event) =>
              this.onClickFunc(event, 'Myob', 'Full Stack Developer')
            }
          >
            <ExperienceImage imageRef={Myob} imageName={Myob} />
          </a>
          <a
            className="image column is-3 employers"
            onClick={(event) =>
              this.onClickFunc(event, 'Deloitte', 'Salesforce Consultant')
            }
          >
            <ExperienceImage imageRef={Deloitte} imageName={Deloitte} />
          </a>
          <a
            className="image column is-3 employers"
            onClick={(event) =>
              this.onClickFunc(event, 'GCOMM', 'Salesforce Developer')
            }
          >
            <ExperienceImage imageRef={Gcomm} imageName={Gcomm} />
          </a>
        </div>
        <ExperienceInfo
          experienceName={this.state.company}
          title={this.state.title}
        />

        <br />
      </section>
    );
  }
}
export default Experience;
