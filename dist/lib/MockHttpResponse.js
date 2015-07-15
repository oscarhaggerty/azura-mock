/**
 * A simple mock implementation of Node's http.ServerResponse.
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var STATUS_CODES = require('http').STATUS_CODES;
var ThroughStream = require('./ThroughStream');

var MockHttpResponse = (function (_ThroughStream) {
  _inherits(MockHttpResponse, _ThroughStream);

  function MockHttpResponse(socket) {
    _classCallCheck(this, MockHttpResponse);

    _get(Object.getPrototypeOf(MockHttpResponse.prototype), 'constructor', this).call(this);

    // default to not found
    this.statusCode = 404;
    this.statusMessage = STATUS_CODES[this.statusCode];

    // initial internal headers hash
    this._headers = {};

    // these are here primarily to make koa work
    this.headersSent = false;
    socket.writable = true;
    this.socket = socket;
  }

  _createClass(MockHttpResponse, [{
    key: 'setHeader',
    value: function setHeader(name, val) {
      this._headers[name.toLowerCase()] = val;
    }
  }, {
    key: 'getHeader',
    value: function getHeader(name) {
      return this._headers[name.toLowerCase()];
    }
  }, {
    key: 'removeHeader',
    value: function removeHeader(name) {
      delete this._headers[name.toLowerCase()];
    }
  }, {
    key: 'writeHead',
    value: function writeHead(statusCode, reason) {
      var headers = arguments.length <= 2 || arguments[2] === undefined ? reason : arguments[2];
      return (function () {
        this.statusCode = statusCode;
        this.statusMessage = reason || STATUS_CODES[statusCode] || 'unknown';

        if (headers) {
          for (var _name of headers) {
            this.setHeader(_name, headers[_name]);
          }
        }
      }).apply(this, arguments);
    }
  }]);

  return MockHttpResponse;
})(ThroughStream);

module.exports = MockHttpResponse;
//# sourceMappingURL=../lib/MockHttpResponse.js.map