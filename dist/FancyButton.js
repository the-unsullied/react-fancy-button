'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  getDefaultProps: function getDefaultProps() {
    return {
      type: 'submit',
      classes: '',
      disabled: false,
      onClick: function onClick() {},
      onDisabledClick: function onDisabledClick() {},
      trigger: false,
      label: 'Submit',
      tabIndex: '',
      autoFocus: false,
      allowMultiClick: false
    };
  },

  propTypes: {
    type: _react2.default.PropTypes.string,
    classes: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    onClick: _react2.default.PropTypes.func,
    onDisabledClick: _react2.default.PropTypes.func,
    trigger: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.any,
    ariaLabel: _react2.default.PropTypes.any,
    role: _react2.default.PropTypes.any,
    tabIndex: _react2.default.PropTypes.string,
    autoFocus: _react2.default.PropTypes.bool,
    allowMultiClick: _react2.default.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      isSpinning: false
    };
  },
  onDisabledClick: function onDisabledClick() {
    var onDisabledClick = this.props.onDisabledClick;

    onDisabledClick && onDisabledClick();
  },
  handleClick: function handleClick(e) {
    var _props = this.props,
        trigger = _props.trigger,
        onClick = _props.onClick,
        allowMultiClick = _props.allowMultiClick;

    if (trigger && !allowMultiClick) {
      return;
    }
    onClick(e);
  },
  render: function render() {
    var _props2 = this.props,
        type = _props2.type,
        trigger = _props2.trigger,
        disabled = _props2.disabled,
        classes = _props2.classes,
        ariaLabel = _props2.ariaLabel,
        role = _props2.role,
        tabIndex = _props2.tabIndex,
        autoFocus = _props2.autoFocus,
        label = _props2.label;

    var opts = {
      color: '#fff'
    };

    return _react2.default.createElement(
      'div',
      { ref: 'fancyButtonWrapper', className: 'fancy-button-wrapper' },
      disabled ? _react2.default.createElement('div', { ref: 'disabledButtonShim', className: 'fancy-button__disabled', onClick: this.onDisabledClick }) : null,
      _react2.default.createElement(
        'button',
        { ref: 'fancyButton',
          type: type,
          tabIndex: tabIndex,
          'aria-label': ariaLabel || label,
          role: role || "button",
          autoFocus: autoFocus,
          className: (0, _classnames2.default)("fancy-button", classes),
          disabled: disabled,
          onClick: this.handleClick },
        trigger ? _react2.default.createElement(_Spinner2.default, { opts: opts }) : null,
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)({ 'fancy-button__label-transparent': trigger }) },
          label
        )
      )
    );
  }
}); /**
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

module.exports = exports['default'];
