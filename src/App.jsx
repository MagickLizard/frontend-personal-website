import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message'
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';
import Venuemob from './components/Experience/Venuemob/Venuemob';
import DeloitteComp from './components/Experience/Deloitte/Deloitte';
import DeloitteFed from './components/Experience/Deloitte/DeloitteFed';
import Myob from './components/Experience/Myob/Myob';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background3small.jpg';

import styled from 'styled-components';
const Gradient = styled.section`
	position: relative;
  width: 100%;
background-image: linear-gradient(${props => props.background}deg, #FFA2BC,#B97AEC) !important;
	h1 {
		font-size: 40px;
		-webkit-transition: .5s .1s;
		-webkit-background-clip: text;
		cursor: pointer;
		
		&:hover {
      color: transparent;
      transition-duration: 5s;
      transition-timing-function: linear;
      animation: smooth;
      animation-delay: 10s;
		}

}
`;
class App extends Component {
  state = { x: 0, y: 0, direction: '', loading: false };
  _onMouseMove(event) {
    this.setState({ x: event.screenX, y: event.screenY });
  }
  messageComponent = () => {
    return (
      <div className="messageSection">
        <Message> </Message>   
      </div>
    );
  };
  projectPage = () => {
    return (
      <div>
        <section className="hero has-background">
          <SearchBar searchTerm={this.onSearchTermSubmit} />
        </section>
      </div>
    );
  };
  iconComponent = () => {
    return (
      <section className="hero is-light">
        <div>
          <ImageList />
        </div>
      </section>
    );
  };
  experienceComponent = () => {
    return (
      <div>
        <section className="hero is-danger is-bold is-large">
          <div>
            <Employers />
          </div>
        </section>
        <section className="hero is-success">
          <div className="container">
            <DeloitteFed />
            </div>
        </section>
        <section className="hero is-info">
          <div className="container">
            <Venuemob />
          </div>
        </section>
        <section className="hero is-warning">
          <div className="container">
            <Myob />
            </div>
        </section>
        <section className="hero is-success">
          <div className="container">
            <DeloitteComp />
            </div>
        </section>
      </div>
    );
  };
  render() {
    return (
      <div className="App" >
        <div className={`control ${this.state.loading ? "is-large is-loading" : ""}`}>
        <Router>
        <Gradient className="hero is-primary is-fullheight has-background hero-background" onMouseMove={this._onMouseMove.bind(this)} background={this.state.y}> 
            <img
              className="img hero-background is-transparent"
              src={background}
              alt="background of lava"
            />
            <Navbar />
            <Route path="/" exact component={this.messageComponent} />
            <Route path="/projects" exact component={this.projectPage} />
            </Gradient>
          <Route path="/" exact component={this.iconComponent} />
          <Route path="/" exact component={this.experienceComponent} />
          
        </Router>
      </div>
      </div>
    );
  }
}
export default App;
