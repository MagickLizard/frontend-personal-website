import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/IconList/iconList';
import Employers from './components/Experience/Experience';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="hero has-background">
          <img
            className="img hero-background is-transparent"
            src="background1.jpg"
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
      </div>
    );
  }
}
export default App;
