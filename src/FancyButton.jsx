/**
Component that acts as a button with spinner
@class Fancy Button Component
@param {String} classes string of classes on button element
@param {String} type type of button
@param {Any} label content in button
@param {Function} onDisabledClick action on click of disabled button
@param {Boolean} trigger hides/shows spinner and disabled more subsequent clicks from happening unless allowMultiClick is true
@param {Boolean} disabled disables button
@param {String} onClick action on click
@param {Any|String} role aria role for button - defaults to 'button'
@param {Any|String} tabIndex tabIndex for 'button'
@param {Any|String} ariaLabel aria-label for button - defaults to what prop.label is set to
@param {Boolean} allowMultiClick defaults to false. If true, it will allow onClick handler to be triggered even if the prop trigger is true
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
      onDisabledClick: () => {},
      trigger: false,
      label: 'Submit',
      tabIndex: '',
      allowMultiClick: false
    };
  },

  propTypes: {
    type: React.PropTypes.string,
    classes: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onDisabledClick: React.PropTypes.func,
    trigger: React.PropTypes.bool,
    label: React.PropTypes.any,
    ariaLabel: React.PropTypes.any,
    role: React.PropTypes.any,
    tabIndex: React.PropTypes.string,
    allowMultiClick: React.PropTypes.bool
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

  handleClick() {
    const { trigger, onClick, allowMultiClick } = this.props;
    if(trigger && !allowMultiClick) {
      return;
    }
    onClick();
  },

  render() {
    const { type,
      trigger,
      disabled,
      classes,
      ariaLabel,
      role,
      tabIndex,
      label } = this.props;
    const opts = {
      color: '#fff'
    }

    return <div ref="fancyButtonWrapper" className="fancy-button-wrapper">
      { disabled ? <div ref='disabledButtonShim' className="fancy-button__disabled" onClick={this.onDisabledClick}></div> : null }
      <button ref="fancyButton"
        type={type}
        tabIndex={tabIndex}
        aria-label={ariaLabel || label}
        role={role || "button"}
        className={classnames("fancy-button", classes)}
        disabled={disabled}
        onClick={this.handleClick}>
        { trigger ? <Spinner opts={opts} /> : null }
        <span className={classnames({'fancy-button__label-transparent': trigger})}>
          {label}
        </span>
      </button>
    </div>
  }
});
