import React from 'react';
import './icon.scss';

class Icon extends React.PureComponent {
  render() {
    return (
      <div className="column is-2">
        <span className="icon is-large">
          <span className="fa-stack">
            <i className={'fab ' + this.props.name + ' fa-stack-2x iconLarge'} alt={this.props.name}/>
          </span>
        </span>
      </div>
    );
  }
}
export default Icon;
