'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _transactions = require('./../models/transactions');

var _transactions2 = _interopRequireDefault(_transactions);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config;

	var api = (0, _express.Router)();

	api.get('/', function (req, res) {
		res.json({ description: "Hi developer!", version: _package.version });
	});

	api.get('/transactions', function (req, res, next) {
		var allData = ['true', 'yes', '1', 1].includes(req.params.all || req.body.all || req.query.all || "");
		var numberPerPage = Number(req.params.numberPerPage || req.body.numberPerPage || req.query.numberPerPage || 60);
		var page = Number(req.params.page || req.body.page || req.query.page || 0);

		var start = page * numberPerPage;
		var end = start + numberPerPage;

		var data = (0, _lodash.slice)((0, _lodash.cloneDeep)(_transactions2.default), start, end).map(function (t) {
			if (allData === false) {
				delete t.origin;
				delete t.destination;
			}

			return t;
		});

		console.log(allData);

		res.json({ transactions: data });
	});

	return api;
};
//# sourceMappingURL=index.js.map