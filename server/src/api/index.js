import { version } from '../../package.json';
import { Router } from 'express';
import transactions from './../models/transactions'
import { cloneDeep, slice } from 'lodash'


export default ({ config }) => {
	let api = Router();

	api.get('/', (req, res) => {
		res.json({ description: "Hi developer!", version });
	});

	api.get('/transactions', (req, res, next) => {
		const allData = ['true', 'yes', '1', 1].includes((req.params.all || req.body.all || req.query.all || ""))
		const numberPerPage = Number(req.params.numberPerPage || req.body.numberPerPage || req.query.numberPerPage || 60)
		const page = Number(req.params.page || req.body.page || req.query.page || 0)

		const start = page * numberPerPage
		const end = start + numberPerPage

		const data = slice(cloneDeep(transactions), start, end).map(t => {
			if(allData === false){
				delete t.origin
				delete t.destination
			}

			return t
		})

		console.log(allData)

		res.json({ transactions: data })
	});

	return api;
}
