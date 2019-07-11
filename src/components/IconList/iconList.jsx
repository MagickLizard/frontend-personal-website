import React from 'react';
import './iconList.scss';
import Icon from './Icon/Icon';
class IconList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Frameworks and Languages</h2>
        </div>
        <section className="section">
            <div className="columns is-vcentered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <Icon name="fa-node"> </Icon>
              <Icon name="fa-node-js"> </Icon>
              <Icon name="fa-react"> </Icon>
              <Icon name="fa-angular"> </Icon>
              <Icon name="fa-git"> </Icon>
              <Icon name="fa-gitlab"> </Icon>
            </div>
          <br />
            <div className="columns is-vcentered is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
              <Icon name="fa-html5"> </Icon>
              <Icon name="fa-java"> </Icon>
              <Icon name="fa-css3-alt"> </Icon>
              <Icon name="fa-aws"> </Icon>
              <Icon name="fas fa-database"> </Icon>
              <Icon name="fa-sass"> </Icon>
            </div>
        </section>
      </section>
    );
  }
}
export default IconList;
