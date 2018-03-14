import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../../actions/displayAction';
import './style.css';

class Button extends Component {
  render() {
    let { action, type } = this.props;

    return (
      <div>
        <button
          className="btn"
          onClick={action.bind(this, type, this.props.children)}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string
};

let getAction = (type, data) => {
  switch (type) {
    case 'number':
      return action.addNumber(data);
    case 'equally':
      return action.equally();
    default:
      return action.addOperation(data);
  }
};

let mapDispatchToProps = dispatch => ({
  action: bindActionCreators(getAction, dispatch)
});

export default connect(() => ({}), mapDispatchToProps)(Button);
