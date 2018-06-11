'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _lodash = require('lodash');

function generateTransactions() {
	var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4000;
	var introduceRepeatedEvery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;


	var locations = ['AFG', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'AGO', 'ATA', 'ARM', 'BOL', 'BWA', 'IOT', 'VGB', 'ERI', 'SFE', 'FRO', 'ITA', 'ING', 'HKG', 'JAM', 'LUX', 'MDV', 'MHL', 'MEX', 'MDA', 'MCO', 'NER', 'NOR', 'REU', 'RWA', 'ESP'];

	var generateId = function generateId(long) {
		return Math.random().toString(36).slice(long || 2);
	};
	var generateDate = function generateDate() {
		var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date(2016, 0, 1);
		var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date(2017, 0, 1);
		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	};

	var generateLocation = function generateLocation() {
		var location = { id: (0, _lodash.sample)(locations) };

		location.lat = '' + (0, _lodash.random)(-90, 90, true);
		location.lng = '' + (0, _lodash.random)(-180, 180, true);
		location.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci";

		return location;
	};

	return (0, _lodash.flatten)((0, _lodash.times)(total).map(function (v) {
		var item = {
			transaction_id: generateId(),
			origin: generateLocation(),
			destination: generateLocation(),
			money_amount: (0, _lodash.random)(800, 13000) + '€',
			user_id: generateId(),
			courier_id: generateId(6),
			new_user: (0, _lodash.random)(0, 1) ? 'yes' : 'no',
			created_at: generateDate()
		};

		return (0, _lodash.castArray)(v > 0 && v % introduceRepeatedEvery === 0 ? [item, item] : item);
	}));
}

var allTransactions = generateTransactions(4000, 7);
exports.default = allTransactions;
//# sourceMappingURL=transactions.js.map