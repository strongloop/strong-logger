var util = require('util');

module.exports = {
  debug: makeLogger('DEBUG'),
  info: makeLogger('INFO'),
  warn: makeLogger('WARN'),
  error: makeLogger('ERROR'),
};

function makeLogger(level) {
  return function() {
    console.log('%s %s', level, util.format.apply(util, arguments));
  }
}
