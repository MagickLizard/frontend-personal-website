import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import MyobImage from '../../../img/myob.png';

class Myob extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container columns">
          <div className="column is-2" />
          <div className="column is-4">
            <div className="image column employers">
              <ExperienceImage imageRef={MyobImage} imageName={MyobImage} />
            </div>
            <h1 className="title is-6"> Software Developer </h1>
            <p className="content">
              Part of support experience team responsible for across the
              website.
              <br />
              </p>
              <h3 className="title is-6">
                Some API's I contributed to but was not limited to:
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
              Extended session logic for an existing API.
              <br />
              <br />
              All micro-services where built using node.js, Javascript and ES6.
            </p>
          </div>

          <div className="column is-4">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="title is-6">
              Some Frontend contributions I made include but not limited to:
            </h3>
            <p className="content">
              Contributed in the refactoring of the internal Styleguide
              framework.
              <br />
              Some components I built include the core navigation and an pricing
              calculator.
              <br />
              Daily use of ES6 standards.
              <br />
              Writing test cases using Mocha, Jasmine and nock.
              <br />
              The framework was using Bootstrap and was moved to Zurb
              Foundation-Sites Framework.
              <br />
              Creating new & updated pre-existing Javascript components, Java
              classes and test classes.
              <br />
              <br />
              Setup of MySQL databases and scripts.
              <br />
              Contributed to new system design architecture for existing and new
              applications.
              <br />
              Managed and created new engines for all support based content in
              Swiftype.
              <br />
              Weekly deployments using git, Jenkins and AWS (EC2 buckets).
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Myob;
