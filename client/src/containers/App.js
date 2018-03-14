import React, { Component } from 'react';
import { connect } from 'react-redux';
import Panel from './panel';
import Display from '../components/display';

import './App.css';

class App extends Component {
  render() {
    let { input, result } = this.props.display;
    return (
      <div className="App">
        <Display input={input.join(' ')} result={result} />
        <Panel />
      </div>
    );
  }
}

let mapStateToProps = ({ display }) => ({
  display: display
});

export default connect(mapStateToProps)(App);
