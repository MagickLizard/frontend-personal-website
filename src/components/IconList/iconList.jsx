import React from 'react';
import './iconList.scss';
import Icon from './Icon/Icon';

class IconList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title heroTitle">Tech stack</h2>
        </div>
        <section className="section">
            <div className="columns">
              <Icon name="fa-node"> </Icon>
              <Icon name="fa-node-js"> </Icon>
              <Icon name="fa-react"> </Icon>
              <Icon name="fa-angular"> </Icon>
              <Icon name="fas fa-database"> </Icon>
            </div>
          <br />
            <div className="columns">
            <Icon name="fa-html5"> </Icon>
              <Icon name="fa-java"> </Icon>
              <Icon name="fa-css3-alt"> </Icon>
              <Icon name="fa-aws"> </Icon>
                <Icon name="fas fa-code-branch"> </Icon>
            </div>
        </section>
      </section>
    );
  }
}
export default IconList;