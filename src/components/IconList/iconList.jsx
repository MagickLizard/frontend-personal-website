import React from 'react';
import './iconList.scss';
import Icon from './Icon/Icon';
class IconList extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="">
          <h2 className="title">Frameworks and Languages</h2>
        </div>
        <section className="container">
          <div className="columns is-12">
            <div className="column is-2">
              <Icon name="fa-node"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-node-js"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-react"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-angular"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-git"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-gitlab"> </Icon>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="columns is-12">
            <div className="column is-2">
              <Icon name="fa-html5"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-java"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-css3-alt"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-aws"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fas fa-database"> </Icon>
            </div>
            <div className="column is-2">
              <Icon name="fa-sass"> </Icon>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default IconList;
