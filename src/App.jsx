import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';
import SearchBar from './components/Youtube/SearchBar/SearchBar';
import ApiYoutube from './api/apiYoutube';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import background from './img/background1.jpg';

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
   return( <div className="">
      <section className="hero has-background">
        <img
          className="img hero-background is-transparent"
          src={background}
          alt="background of lava"
        />
        <Message> </Message>
        <div className="section">
          <div className="container">
            <h1 className="title"> Experience </h1>
          </div>
        </div>
        <Employers />
      </section>
      <ImageList />
    </div>)
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
          <div className="hero has-background">
          <Navbar />
            <Route path="/" exact component={this.homePage} />
            <Route
              path="/projects"
              exact
              component={this.projectPage}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
