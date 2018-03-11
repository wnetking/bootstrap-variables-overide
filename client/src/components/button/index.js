import React, { Component } from 'react';
import './style.css'

class Button extends Component {
  render() {
    return (
      <div>
          <button className="btn">
             {this.props.children} 
          </button>
      </div>
    );
  }
}

export default Button;
