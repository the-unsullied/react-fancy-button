/**
Component that acts as a button with spinner
@class Fancy Button Component
@param {String} classes string of classes on button element
@param {String} type type of button
@param {String} label content in button
@param {Boolean} trigger hides/shows spinner
@param {String} onClick action on click
*/
import React from 'react';
import ReactDOM from 'react-dom';

import classnames from 'classnames';
import Spinner from './Spinner';

export default React.createClass({
  getDefaultProps: function() {
    return {
      type: 'submit',
      classes: '',
      disabled: false,
      onClick: () => {},
      trigger: false,
      label: 'Submit'
    };
  },

  propTypes: {
    type: React.PropTypes.string,
    classes: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    trigger: React.PropTypes.bool,
    label: React.PropTypes.string
  },

  getInitialState() {
    return {
      isSpinning: false
    }
  },

  render() {
    const opts = {
      color: '#fff'
    }

    return <button ref="fancyButton"
      type={this.props.type}
      className={classnames("fancy-button", this.props.classes)}
      disabled={this.props.disabled}
      onClick={this.props.onClick}>
      {true ? <div className="padding">
        <Spinner opts={opts} />
      </div> : <span>
        {this.props.label}
      </span>}
    </button>
  }

});
