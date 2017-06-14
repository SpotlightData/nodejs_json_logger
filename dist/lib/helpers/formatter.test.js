'use strict';

var _formatter = require('./formatter');

var _date = require('./date');

describe('Formatting helpers', function () {
	it('should format a simple log', function () {
		var opts = {
			timestamp: _date.generateISOString,
			message: 'Test log',
			level: 'warning'
		};

		var formatted = (0, _formatter.formatter)(opts);

		var parsed = undefined;

		expect(function () {
			parsed = JSON.parse(formatted);
		}).not.toThrow();

		expect(parsed).toBeDefined();

		expect(parsed['@message']).toEqual(opts.message);

		expect(parsed['@fields']['@level']).toEqual('WARNING');
	});

	it('should format a JSON message log', function () {
		var opts = {
			timestamp: _date.generateISOString,
			message: { test: 'JSON string' },
			level: 'info'
		};

		var formatted = (0, _formatter.formatter)(opts);

		var parsed = undefined;

		expect(function () {
			parsed = JSON.parse(formatted);
		}).not.toThrow();

		expect(parsed).toBeDefined();

		var message = parsed['@message'];

		expect(function () {
			message = JSON.parse(message);
		}).not.toThrow();

		expect(message).toEqual({ test: 'JSON string' });

		expect(parsed['@fields']['@level']).toEqual('INFO');
	});
});