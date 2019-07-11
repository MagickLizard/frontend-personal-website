import React from 'react';
import './experienceImage.scss';

class ExperienceImage extends React.Component {
  render() {
    return (
      <a className="column is-3 employers" href="/">
        <div className="image">
          <img
            src={this.props.imageRef}
            alt={this.props.imageName + ' logo'}
            width="50px"
          />
        </div>
      </a>
    );
  }
}
export default ExperienceImage;