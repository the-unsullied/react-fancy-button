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

  onDisabledClick() {
    const { onDisabledClick } = this.props;
    onDisabledClick && onDisabledClick();
  },

  render() {
    const { type, trigger, disabled, onClick, classes, label } = this.props;
    const opts = {
      color: '#fff'
    }

    return <button ref="fancyButton"
      type={type}
      className={classnames("fancy-button", classes)}
      disabled={disabled}
      onClick={onClick}>
      { disabled ? <div className="fancy-button__disabled" onClick={this.onDisabledClick}></div> : null }
      { trigger ? <Spinner opts={opts} /> : null }
      <span className={classnames({'fancy-button__label-transparent': trigger})}>
        {label}
      </span>
    </button>
  }
});
