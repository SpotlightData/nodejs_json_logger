'use strict';

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _date = require('./helpers/date');

var _formatter = require('./helpers/formatter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _winston2.default.Logger();

logger.add(_winston2.default.transports.Console, {
	timestamp: _date.generateISOString,
	formatter: _formatter.formatter
});

module.exports = logger;