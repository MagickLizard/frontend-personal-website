import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';

import Venuemob from './components/Experience/Venuemob/Venuemob';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import ExperienceInfo from './components/Experience/ExperienceInfo/ExperienceInfo';
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
        <section className="hero is-primary is-fullheight has-background is-bold">
          <img
            className="img hero-background is-transparent"
            src={background}
            alt="background of lava"
          />

          <div className="hero-head">
            <Navbar />
          </div>

          {/* <!-- Hero content: will be in the middle --> */}
              <div className="MainContainer">
                <main className="wrapper">
                  <section className="sectionScroll parallax">
                    <Message> </Message>
                  </section>
                  <section className="sectionScrollsmall hero is-light">
                      <div className="">
                        <ImageList />
                      </div>
                    </section>
                    <section className="sectionScrollsmall hero is-primary is-bold">
                      <div className="container">
                        <Employers />
                      </div>
                    </section>
                    <section className="sectionScroll hero is-info">
                      <div className="container">
                        <Venuemob />
                      </div>
                    </section>
                </main>
              </div>

          {/* <!-- Hero footer: will stick at the bottom --> */}
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
        </section>
    );
  };
  experiencePage = () => {
    return (
      <div className="container">
        <ExperienceInfo />
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
          <Router>
              <Route path="/" exact component={this.homePage} />
              <Route path="/projects" exact component={this.projectPage} />
              <Route path="/experience" exact component={this.experiencePage} />
          </Router>
      </div>
    );
  }
}
export default App;
