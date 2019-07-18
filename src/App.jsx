import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';
import Venuemob from './components/Experience/Venuemob/Venuemob';
import Myob from './components/Experience/Myob/Myob';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background3.jpg';
import styled from 'styled-components';
const Gradient = styled.section`
	position: relative;
  width: 100%;

background-image: linear-gradient(${props => props.background}deg, #FFA2BC,#B97AEC) !important;
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 40px;
		background-color: skyBlue;
		background-position: 100% 0;
		color: transparent;
		-webkit-transition: .05s .1s;
		-webkit-background-clip: text;
		cursor: pointer;
		text-align: center;
		
		&:hover {
			background-position: 0 0;
			color: transparent;
			transition: .1s 0;
		}

}
`;
class App extends Component {
  state = { x: 0, y: 0, direction: '' };
  _onMouseMove(event) {
    if( event.screenX > 0) {
      this.setState({ direction: 90});
    }
    if(event.screenY > -650) {
      this.setState({ direction: 180});
    }
    else {
      this.setState({ direction: 260});
    }
    this.setState({ x: event.screenX, y: event.screenY });
  }

  messageComponent = () => {
    return (
      <div className="section">
        <Message> </Message>
      </div>
    );
  };
  footer = () => {
    return (
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a href="/experience">Overview</a>
              </li>
              <li>
                <a href="/projects"> Side projects</a>
              </li>
              <li>
                <a href="/experience"> Tech stack</a>
              </li>
            </ul>
          </div>
        </nav>
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
        <section className="hero is-primary is-bold is-large">
          <div className="">
            <Employers />
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
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Gradient className="hero is-primary is-fullheight has-background is-bold" onMouseMove={this._onMouseMove.bind(this)} background={this.state.direction}> 
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
          <Route
            path="/experience"
            exact
            component={this.experienceComponent}
          />
        </Router>
      </div>
    );
  }
}
export default App;
