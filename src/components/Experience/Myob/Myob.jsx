import React from 'react';
import '../experience.scss';
import './myob.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import MyobImage from '../../../img/myob.png';

class Myob extends React.Component {
  render() {
    return (
      <section className="section">
          <section className="section columns is-horizontal-center">
          <div className="image employers">
            <ExperienceImage
              imageRef={MyobImage}
              imageName={MyobImage}
            />
          </div>
        </section>
        <div className="container columns">
          <div className="column is-2" />

          <div className="column is-4">
            <h3 className="title is-6">
              Some Frontend contributions
            </h3>
            <p className="content">
              Some components I built include the core navigation, navigation for a internal sub-site and the price calculator.
              <br />
              Daily use of ES6 standards.
              <br />
              Writing test cases using Mocha, Jasmine and nock.
              <br />
              Contributed to move of components from Bootstrap to Zurb
              Foundation-Sites Framework.
              <br />
              <br />
 
              <br />
            </p>
          </div>
          <div className="column is-4">
              <h3 className="title is-6">
                Some other contributions
              </h3>
              <p className="content">
              Converted a SOAP API into a RESTful API micro-service.
              <br />
              Rebuilt logic of an C# application into a node.js API.
              <br />
              Created a framework for all data to be called for Single Sign On.
              <br />
              Built API to handle different encodings from a logic layer API.
              <br />
              <br />
              All micro-services where built using node.js, Javascript and ES6.
              Setup of MySQL databases and scripts.
              <br />
              Weekly deployments using git, Jenkins and AWS (EC2 buckets).
              <br />
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Myob;
