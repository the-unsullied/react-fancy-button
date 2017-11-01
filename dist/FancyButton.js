'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSpinning: false
    }, _this.onDisabledClick = function () {
      var onDisabledClick = _this.props.onDisabledClick;

      onDisabledClick && onDisabledClick();
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          trigger = _this$props.trigger,
          onClick = _this$props.onClick,
          allowMultiClick = _this$props.allowMultiClick;

      if (trigger && !allowMultiClick) {
        return;
      }
      onClick(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          trigger = _props.trigger,
          disabled = _props.disabled,
          classes = _props.classes,
          ariaLabel = _props.ariaLabel,
          role = _props.role,
          tabIndex = _props.tabIndex,
          autoFocus = _props.autoFocus,
          spinnerZindex = _props.spinnerZindex,
          label = _props.label,
          onFocus = _props.onFocus;

      var opts = {
        color: '#fff',
        zIndex: spinnerZindex
      };

      return _react2.default.createElement(
        'div',
        { ref: 'fancyButtonWrapper', className: 'fancy-button-wrapper' },
        disabled ? _react2.default.createElement('button', { 'aria-label': ariaLabel || label, ref: 'disabledButtonShim', className: 'fancy-button__disabled', onClick: this.onDisabledClick, onFocus: onFocus }) : null,
        _react2.default.createElement(
          'button',
          {
            ref: 'fancyButton',
            type: type,
            tabIndex: tabIndex,
            'aria-label': ariaLabel || label,
            role: role || "button",
            autoFocus: autoFocus,
            className: (0, _classnames2.default)("fancy-button", classes),
            disabled: disabled,
            onClick: this.handleClick,
            onFocus: onFocus
          },
          trigger ? _react2.default.createElement(_Spinner2.default, { opts: opts }) : null,
          _react2.default.createElement(
            'span',
            { className: (0, _classnames2.default)({ 'fancy-button__label-transparent': trigger }) },
            label
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

_class.defaultProps = {
  type: 'submit',
  classes: '',
  disabled: false,
  onClick: function onClick() {},
  onDisabledClick: function onDisabledClick() {},
  onFocus: function onFocus() {},
  trigger: false,
  label: 'Submit',
  tabIndex: '',
  autoFocus: false,
  allowMultiClick: false,
  spinnerZindex: 2e9
};
_class.propTypes = {
  type: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onDisabledClick: _propTypes2.default.func,
  trigger: _propTypes2.default.bool,
  label: _propTypes2.default.any,
  ariaLabel: _propTypes2.default.any,
  role: _propTypes2.default.any,
  tabIndex: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  allowMultiClick: _propTypes2.default.bool,
  spinnerZindex: _propTypes2.default.number
};
exports.default = _class;
module.exports = exports['default'];
