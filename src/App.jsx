import React, { Component } from 'react';
import Header from './components/header/header.jsx';
// import Form from './components/form/form.jsx';
import Message from './components/message/message.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="section">
          <div className="container">
            <Message>
            </Message>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
