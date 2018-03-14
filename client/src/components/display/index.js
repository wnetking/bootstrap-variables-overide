import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Display extends Component {
  render() {
    let inputClasses = [this.props.result ? 'fz-small mb-small' : ''];
    return (
      <div className="display">
        <span className={inputClasses.join(' ')}>{this.props.input}</span>
        {this.props.result ? (
          <span className="result">{this.props.result}</span>
        ) : (
          ''
        )}
      </div>
    );
  }
}

Display.propTypes = {
  input: PropTypes.string,
  result: PropTypes.number
};

export default Display;
