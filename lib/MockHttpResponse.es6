/**
 * A simple mock implementation of Node's http.ServerResponse.
 */

const STATUS_CODES = require('http').STATUS_CODES;
const ThroughStream = require('./ThroughStream');

class MockHttpResponse extends ThroughStream {
  constructor(socket) {
    super();

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

  setHeader(name, val) {
    this._headers[name.toLowerCase()] = val;
  }

  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }

  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }

  writeHead(statusCode, reason, headers = reason) {
    this.statusCode = statusCode;
    this.statusMessage = reason || STATUS_CODES[statusCode] || 'unknown';
    
    if (headers) {
      for (const name of headers) {
        this.setHeader(name, headers[name]);
      }
    }
  }
}

module.exports = MockHttpResponse;
