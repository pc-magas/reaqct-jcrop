import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JCrop from './JCrop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <JCrop imageToCrop= { 'https://pbs.twimg.com/media/C3Gjn9_UMAAdHEr.jpg' } />
        </p>
      </div>
    );
  }
}

export default App;
