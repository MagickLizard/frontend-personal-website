import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Message from './components/Message/Message';
import ImageList from './components/ImageList/ImageList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <section className="section">
          <div className="container columns">
            <div className="tile is-ancestor column is-6">
              <div className="tile is-child">
                <article>
                  <p className="title">MagickLizard</p>
                  <p className="subtitle">A place full of magic!</p>
                  <img
                    className="img-logo"
                    alt="dragon logo"
                    src="dragon.png"
                  />
                </article>
              </div>
            </div>
            <Message> </Message>
            </div>
            <ImageList />
        </section>
      </div>
    );
  }
}
export default App;
