import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/ImageList/ImageList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="hero is-fullheight has-background">
          <img
            className="img hero-background is-transparent"
            src="background1.jpg"
            alt="background of lava"
          />
          <Message> </Message>
          <ImageList />
        </section>
      </div>
    );
  }
}
export default App;
