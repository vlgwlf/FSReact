// keys.js - figure out what set of credentials to use
if (process.env.NODE_ENV === 'production') {
    // in production, return prod keys
    module.exports = require('./prod');
} else {
    // in dev, return dev keys
    module.exports = require('./dev');
}
