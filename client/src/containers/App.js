import React, { Component } from 'react';
import './App.css';
import Panel from './panel'
import Display from '../components/display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display> 1 + 5</Display>
        <Panel />
      </div>
    );
  }
}

export default App;
