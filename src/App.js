import React from 'react';
import logo from './Star_Wars_Logo.svg';
import './App.css';
import Result from './Components/Result'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Result />
    </div>
  );
}

export default App;
