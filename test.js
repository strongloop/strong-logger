// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: strong-logger
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

var logger = require('./');

logger.debug('ARGV: %j', process.argv);
logger.info('application started');
logger.warn('about to do something horrible!');
logger.error(new Error('Something horrible!'));
