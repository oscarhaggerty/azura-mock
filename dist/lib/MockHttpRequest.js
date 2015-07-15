/**
 * A simple mock implementation of Node's http.IncomingMessage.
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ThroughStream = require('./ThroughStream');

var MockHttpRequest = (function (_ThroughStream) {
  _inherits(MockHttpRequest, _ThroughStream);

  function MockHttpRequest(socket) {
    var httpData = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, MockHttpRequest);

    _get(Object.getPrototypeOf(MockHttpRequest.prototype), 'constructor', this).call(this);

    this._socket = socket;
    this._method = httpData.method || 'GET';
    this._url = httpData.url || '';

    httpData.headers = httpData.headers || {};
    this._headers = {};
    this._rawHeaders = [];

    Object.keys(httpData.headers).forEach(key => {
      this._headers[key.toLowerCase()] = httpData.headers[key];

      this._rawHeaders.push(key);
      this._rawHeaders.push(httpData.headers[key]);
    });

    this.end(httpData.body || '');
  }

  _createClass(MockHttpRequest, [{
    key: 'socket',
    get: function get() {
      return this._socket;
    }
  }, {
    key: 'headers',
    get: function get() {
      return this._headers;
    }
  }, {
    key: 'rawHeaders',
    get: function get() {
      return this._rawHeaders;
    }
  }, {
    key: 'method',
    get: function get() {
      return this._method;
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return MockHttpRequest;
})(ThroughStream);

module.exports = MockHttpRequest;
//# sourceMappingURL=../lib/MockHttpRequest.js.map