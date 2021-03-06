import React from 'react';
import './experienceImage.scss';

class ExperienceImage extends React.Component {
  state = { experienceInfo: '' };
  onClickFunc = (event) => {
    event.preventDefault();
    this.setState({ experienceInfo: this.props.imageName });
  };
  render() {
    return (
          <div className="image">
            <img
              src={this.props.imageRef}
              alt={this.props.imageName + ' logo'}
              width="50px"
            />
          </div>
    );
  }
}
export default ExperienceImage;