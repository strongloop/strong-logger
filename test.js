var logger = require('./');

logger.debug('ARGV: %j', process.argv);
logger.info('application started');
logger.warn('about to do something horrible!');
logger.error(new Error('Something horrible!'));
