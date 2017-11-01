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
@param {Boolean} autoFocus autofocuses on button on render
@param {Boolean} allowMultiClick defaults to false. If true, it will allow onClick handler to be triggered even if the prop trigger is true
 */
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Spinner from './Spinner';

export default class extends React.Component {
  static defaultProps = {
    type: 'submit',
    classes: '',
    disabled: false,
    onClick: () => {},
    onDisabledClick: () => {},
    onFocus: () => {},
    trigger: false,
    label: 'Submit',
    tabIndex: '',
    autoFocus: false,
    allowMultiClick: false,
    spinnerZindex: 2e9
  };

  static propTypes = {
    type: PropTypes.string,
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onDisabledClick: PropTypes.func,
    trigger: PropTypes.bool,
    label: PropTypes.any,
    ariaLabel: PropTypes.any,
    role: PropTypes.any,
    tabIndex: PropTypes.string,
    autoFocus: PropTypes.bool,
    allowMultiClick: PropTypes.bool,
    spinnerZindex: PropTypes.number
  };

  state = {
    isSpinning: false
  };

  onDisabledClick = () => {
    const { onDisabledClick } = this.props;
    onDisabledClick && onDisabledClick();
  };

  handleClick = (e) => {
    const { trigger, onClick, allowMultiClick } = this.props;
    if(trigger && !allowMultiClick) {
      return;
    }
    onClick(e);
  };

  render() {
    const { type,
      trigger,
      disabled,
      classes,
      ariaLabel,
      role,
      tabIndex,
      autoFocus,
      spinnerZindex,
      label,
      onFocus
    } = this.props;
    const opts = {
      color: '#fff',
      zIndex: spinnerZindex
    };

    return <div ref="fancyButtonWrapper" className="fancy-button-wrapper">
      { disabled ? <button aria-label={ariaLabel || label} ref='disabledButtonShim' className="fancy-button__disabled" onClick={this.onDisabledClick} onFocus={onFocus} /> : null }
      <button
        ref="fancyButton"
        type={type}
        tabIndex={tabIndex}
        aria-label={ariaLabel || label}
        role={role || "button"}
        autoFocus={autoFocus}
        className={classnames("fancy-button", classes)}
        disabled={disabled}
        onClick={this.handleClick}
        onFocus={onFocus}
      >
        { trigger ? <Spinner opts={opts} /> : null }
        <span className={classnames({'fancy-button__label-transparent': trigger})}>
          {label}
        </span>
      </button>
    </div>
  }
}
