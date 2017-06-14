'use strict';

var _date = require('./date');

var ISORegex = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/;

describe('Date helpers', function () {
	it('should generate the current datetime in ISO 8601 format', function () {
		var isoString = (0, _date.generateISOString)();

		expect(isoString).toBeDefined();

		expect(ISORegex.test(isoString)).toBeTruthy();
	});
});