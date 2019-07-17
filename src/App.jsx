import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';

import Venuemob from './components/Experience/Venuemob/Venuemob';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background3.jpg';

class App extends Component {

  messageComponent = () => {
    return (
      <div className="">
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
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <Router>
          
          <section className="hero is-primary is-fullheight has-background is-bold">
            <img
              className="img hero-background is-transparent"
              src={background}
              alt="background of lava"
            />
            <Navbar />
            <Route path="/" exact component={this.messageComponent} />
            <Route path="/projects" exact component={this.projectPage} />
          </section>
          <Route path="/" exact component={this.iconComponent} />
          <Route path="/" exact component={this.experienceComponent} />
          <Route path="/experience" exact component={this.experienceComponent} />
  
        </Router>
      </div>
    );
  }
}
export default App;
