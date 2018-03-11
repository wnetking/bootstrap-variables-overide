import React, { Component } from 'react';
import './style.css'

class Display extends Component {
  render() {
    return (
      <div className="display">
          <span>
             {this.props.children} 
          </span>
      </div>
    );
  }
}

export default Display;
