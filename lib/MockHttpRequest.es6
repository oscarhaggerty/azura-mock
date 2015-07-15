/**
 * A simple mock implementation of Node's http.IncomingMessage.
 */

const ThroughStream = require('./ThroughStream');

class MockHttpRequest extends ThroughStream {
  constructor(socket, httpData = {}) {
    super();

    this._socket = socket;
    this._method = httpData.method || 'GET';
    this._url = httpData.url || '';

    httpData.headers = httpData.headers || {};
    this._headers = {};
    this._rawHeaders = [];

    Object.keys(httpData.headers).forEach((key)=> {
      this._headers[key.toLowerCase()] = httpData.headers[key];

      this._rawHeaders.push(key);
      this._rawHeaders.push(httpData.headers[key]);
    });

    this.end(httpData.body || '');
  }

  get socket() { return this._socket; }
  get headers() { return this._headers; }
  get rawHeaders() { return this._rawHeaders; }
  get method() { return this._method; }
  get url() { return this._url; }
}

module.exports = MockHttpRequest;
