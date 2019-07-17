import React from 'react';
import '../experience.scss';
import ExperienceImage from '../ExperienceImage/ExperienceImage';
import MyobImage from '../../../img/myob.png';

class Myob extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
        <a className="image column employers">
          <ExperienceImage imageRef={MyobImage} imageName={MyobImage} />
        </a>
        <h1 className="subtitle"> Software Developer </h1>
        <h2 className="subtitle"> </h2>
        <p className="content">
          Part of support experience team responsible for across the website.
          <br />
          <br />
          Some API's I contributed to but was not limited too: 
          <br />
          <br />
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
          <br/>
          All micro-services where built using node.js, Javascript and ES6.
          <br/>
          <br />
          Contributed in the refactoring of the internal Styleguide framework. 
          <br />
          Some components I built include the core navigation and an pricing calculator.
          <br/>
          Daily use of ES6 standards.
          <br />
          Writing test cases using Mocha, Jasmine and nock.
          <br />
          The framework was using Bootstrap and was moved to Zurb Foundation-Sites Framework.
          <br />
          Creating new & updated pre-existing Javascript components, Java classes and test classes.
          <br/>
          <br />
          Setup of MySQL databases and scripts.
          <br />
          Contributed to new system design architecture for existing and new
          applications.
          <br />
          Managed and created new engines for all support based content in Swiftype. 
          <br />
          Weekly deployments using git, Jenkins and AWS (EC2 buckets).
          <br />
          <br />
          Facilitated workshops on Source control processes, Salesforce & ES6 standards.
          <br />
          Following agile methodologies of retrospective, iterative action
          taking, planning and grooming.
          <br />
          Worked in a team to rebuild the Analytics API for usability across
          different crews.
          <br />
          Pair programming, mentoring, regular code reviews and testing.
          <br />
        </p>
        </div>
      </section>
    );
  }
}
export default Myob;
