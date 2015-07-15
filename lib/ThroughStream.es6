/**
 * A simple transform stream that just passes on data as it comes in.
 */

const stream = require('stream');

class ThroughStream extends stream.Transform {
  constructor() {
    super();
  }
  _transform(chunk, encoding, next) {
    this.push(chunk, encoding);
    next();
  }
}

module.exports = ThroughStream;
