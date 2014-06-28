var util = require('util');

var levels = [
  'DEBUG', 'INFO', 'WARN', 'ERROR'
];

levels.forEach(function(level) {
  module.exports[level.toLowerCase()] = function() {
    console.log('%s %s', level, util.format.apply(util, arguments));
  };
});

