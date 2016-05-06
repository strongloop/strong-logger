// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: strong-logger
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

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
