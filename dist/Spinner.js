'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _spin = require('./../assets/spin.js-master/spin.min');

var _spin2 = _interopRequireDefault(_spin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  componentDidMount: function componentDidMount() {
    var opts = {
      lines: 13 // The number of lines to draw
      , length: 3 // The length of each line
      , width: 3 // The line thickness
      , radius: 11 // The radius of the inner circle
      , scale: 1 // Scales overall size of the spinner
      , corners: 1 // Corner roundness (0..1)
      , color: '#000' // #rgb or #rrggbb or array of colors
      , opacity: 0.25 // Opacity of the lines
      , rotate: 0 // The rotation offset
      , direction: 1 // 1: clockwise, -1: counterclockwise
      , speed: 0.9 // Rounds per second
      , trail: 22 // Afterglow percentage
      , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
      , zIndex: 2e9 // The z-index (defaults to 2000000000)
      , className: 'spinner' // The CSS class to assign to the spinner
      , top: '50%' // Top position relative to parent
      , left: '50%' // Left position relative to parent
      , shadow: false // Whether to render a shadow
      , hwaccel: false // Whether to use hardware acceleration
      , position: 'absolute' // Element positioning
    };

    Object.assign(opts, this.props.opts);

    new _spin2.default(opts).spin(_reactDom2.default.findDOMNode(this.refs.spinnerAnimation));
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'spinner relative' },
      _react2.default.createElement('div', { ref: 'spinnerAnimation', className: 'spinner__animation' })
    );
  }
}); // http://spin.js.org/
// https://github.com/fgnass/spin.js/

module.exports = exports['default'];
