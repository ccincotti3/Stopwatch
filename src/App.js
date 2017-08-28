import React, { Component } from 'react';
import './App.css';
import Stopwatch from './stopwatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-links">
            <a href="https://www.linkedin.com/in/carmencincotti" title="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://www.angel.co/carmen-cincotti" title="AngelList"><i className="fa fa-angellist" aria-hidden="true"></i></a>
            <a href="mailto:ccincotti3@gmail.com" title="E-Mail"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href="https://www.twitter.com/carmencincotti" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <h2>Stopwatch widget</h2>
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
