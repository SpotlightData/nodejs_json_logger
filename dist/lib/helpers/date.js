"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var generateISOString = function generateISOString() {
	var d = new Date();
	return d.toISOString();
};

exports.generateISOString = generateISOString;