import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';

import Venuemob from './components/Experience/Venuemob/Venuemob';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import ApiYoutube from './api/apiYoutube';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background3.jpg';

class App extends Component {
  state = { videos: [] };
  onSearchTermSubmit = async (term) => {
    const response = await ApiYoutube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  homePage = () => {
    return (
      <div className="MainContainer">
        <main className="wrapper">
          <section className="parallax hero is-fullheight is-bold has-text-centered">
            <Message> </Message>
            <div className="has-text-centered">
              <a href="/">
                <span className="icon is-large">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-angle-down" />
                  </span>
                </span>
              </a>
            </div>
          </section>
          <section className="hero is-light">
            <div className="">
              <ImageList />
            </div>
          </section>
          <section className="hero is-primary is-bold is-medium">
            <div className="container">
              <Employers />
            </div>
          </section>
          <section className="hero is-info">
            <div className="container">
              <Venuemob />
            </div>
          </section>
        </main>
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
  render() {
    return (
      <div className="App">
        <section className="hero is-primary is-fullheight has-background is-bold">
          <img
            className="img hero-background is-transparent"
            src={background}
            alt="background of lava"
          />
          <div className="hero-head">
            <Navbar />
          </div>
          <Router>
            <Route path="/" exact component={this.homePage} />
            <Route path="/projects" exact component={this.projectPage} />
          </Router>
        </section>
      </div>
    );
  }
}
export default App;
