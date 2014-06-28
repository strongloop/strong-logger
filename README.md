strong-logger
=============

A very simple logger for use with a log aggregating process supervisor like
[strong-supervisor](https://www.npmjs.org/package/strong-supervisor).

## Install

    $ npm install --save strong-logger

## Usage

```js
var logger = require('strong-logger');

logger.debug('ARGV: %j', process.argv);
logger.info('application started');
logger.warn('about to do something horrible!');
logger.error(new Error('Something horrible!'));
```

### Standalone Output

The output is simple and unceromonious, which is exactly what you want in
development.
```
DEBUG ARGV: ["node","/Users/ryan/work/strong-logger/test.js"]
INFO application started
WARN about to do something horrible!
ERROR [Error: Something horrible!]
```

### With strong-supervisor

When it's time to move your app to production, you'll want to use a process
supervisor that can decorate these simple logs with additional context details
so that you don't have to change your code or toggle any sort of logging
behaviour in your app.

```
2014-06-20T15:26:37.907Z pid:89028 worker:1 DEBUG ARGV: ["/usr/local/bin/node","."]
2014-06-20T15:26:37.908Z pid:89028 worker:1 INFO application started
2014-06-20T15:26:37.908Z pid:89028 worker:1 WARN about to do something horrible!
2014-06-20T15:26:37.908Z pid:89028 worker:1 ERROR [Error: Something horrible!]
```
