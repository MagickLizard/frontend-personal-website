import React from 'react';
import './icon.scss';

class Icon extends React.PureComponent {
  render() {
    return (
      <a className="column is-3">
        <span className="icon is-large">
          <span className="fa-stack fa-lg">
            <i className={'fab ' + this.props.name + ' fa-stack-2x iconLarge'} alt={this.props.name}/>
          </span>
        </span>
      </a>
    );
  }
}
export default Icon;
