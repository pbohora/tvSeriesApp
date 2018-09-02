import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../containers/Series'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Anime series App</h1>
        </header>
        <Intro message ="Here you can find all your loved anime"/>
        <Series />
      </div>
    );
  }
}

export default App;