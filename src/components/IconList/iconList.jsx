import React from 'react';
import './iconList.scss';
import Icon from './Image/Icon';
class IconList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">Tech stack</h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <Icon name="fa-node"> </Icon>
              <Icon name="fa-node-js"> </Icon>
              <Icon name="fa-react"> </Icon>
              <Icon name="fa-angular"> </Icon>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="columns is-12">
            <Icon name="fa-html5"> </Icon>
              <Icon name="fa-java"> </Icon>
              <Icon name="fa-css3-alt"> </Icon>
              <Icon name="fa-aws"> </Icon>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default IconList;
