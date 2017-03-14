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
      tabIndex: ''
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
    tabIndex: _react2.default.PropTypes.string
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
  render: function render() {
    var _props = this.props;
    var type = _props.type;
    var trigger = _props.trigger;
    var disabled = _props.disabled;
    var onClick = _props.onClick;
    var classes = _props.classes;
    var ariaLabel = _props.ariaLabel;
    var role = _props.role;
    var tabIndex = _props.tabIndex;
    var label = _props.label;

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
          className: (0, _classnames2.default)("fancy-button", classes),
          disabled: disabled,
          onClick: onClick },
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
    @param {Boolean} trigger hides/shows spinner
    @param {Boolean} disabled disables button
    @param {String} onClick action on click
    @param {Any|String} role aria role for button - defaults to 'button'
    @param {Any|String} tabIndex tabIndex for 'button'
    @param {Any|String} ariaLabel aria-label for button - defaults to what prop.label is set to
    */

module.exports = exports['default'];
