import { version } from '../../package.json';
import { Router } from 'express';
import { allTransactions } from './transactions'

export default ({ config }) => {
	let api = Router();

	api.get('/', (req, res) => {
		res.json({ description: "Hi developer!", version });
	});

	api.get('/transactions', (req, res, next) => {
		const allData = ['true', 'yes', '1', 1].includes((req.params.all || req.body.all || req.query.all || ""))
		const numberPerPage = Number(req.params.numberPerPage || req.body.numberPerPage || req.query.numberPerPage || 60)

		res.json({ transactions: allTransactions(numberPerPage, allData) });
	});

	return api;
}
