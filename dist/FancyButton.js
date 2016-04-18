'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner.jsx!');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Component that acts as a button with spinner
@class Fancy Button Component
@param {String} classes string of classes on button element
@param {String} type type of button
@param {String} label content in button
@param {Boolean} trigger hides/shows spinner
@param {String} onClick action on click
*/
exports.default = _react2.default.createClass({
  getDefaultProps: function getDefaultProps() {
    return {
      type: 'submit',
      classes: '',
      disabled: false,
      onClick: function onClick() {},
      trigger: false,
      label: 'Submit'
    };
  },

  propTypes: {
    type: _react2.default.PropTypes.string,
    classes: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    onClick: _react2.default.PropTypes.func,
    trigger: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      isSpinning: false
    };
  },
  render: function render() {
    var opts = {
      color: '#fff'
    };

    return _react2.default.createElement(
      'button',
      { ref: 'fancyButton',
        type: this.props.type,
        className: (0, _classnames2.default)("fancy-button", this.props.classes),
        disabled: this.props.disabled,
        onClick: this.props.onClick },
      this.props.trigger ? _react2.default.createElement(
        'div',
        { className: 'padding' },
        _react2.default.createElement(_Spinner2.default, { opts: opts })
      ) : _react2.default.createElement(
        'span',
        null,
        this.props.label
      )
    );
  }
});
module.exports = exports['default'];
