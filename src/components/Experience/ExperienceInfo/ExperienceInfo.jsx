import React from 'react';

class ExperienceInfo extends React.Component {
  state = { body: '', roleTitle: '' };
  render() {
    return (
      <section className="container">
            <h2 className="subtitle">{this.props.title}</h2>
      </section>
    );
  }
}
export default ExperienceInfo;
