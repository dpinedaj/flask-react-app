import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import TestContainer from './TestContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestContainer />
      </header>
    </div>
  );
}

export default App;
