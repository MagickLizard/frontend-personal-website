import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import ExperienceInfo from './components/Experience/ExperienceInfo/ExperienceInfo'
import ApiYoutube from './api/apiYoutube';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background4.jpg';

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
   return( <div>
      <section className="hero has-background is-bold" >
        <img
          className="img hero-background is-transparent"
          src={background}
          alt="background of lava"
        />
        <Message> </Message>
  
      </section>
      {/* <section className="hero is-light">
      <div className="section">
      <div className="container">
            <h1 className="title"> Experience </h1>
          <Employers />
          </div>
        </div>
        </section> */}
      <ImageList />
    </div>)
  };
  experiencePage = () => {
    return(
    <div className="container">
    <ExperienceInfo />
     </div>
     )
   };
  projectPage = () => {
    return(
    <div>
       <section className="hero has-background">
         <SearchBar searchTerm={this.onSearchTermSubmit}></SearchBar>
       </section>
     </div>
     )
   };
  render() {
    return (
      <div className="App">
        <Router>
        <Navbar />
          <div className="hero has-background">
            <Route path="/" exact component={this.homePage} />
            <Route
              path="/projects"
              exact
              component={this.projectPage}
            />
            <Route
              path="/experience"
              exact
              component={this.experiencePage}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
