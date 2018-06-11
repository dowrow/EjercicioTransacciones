import { version } from '../../package.json';
import { Router } from 'express';
import { range, times, random, sample, flatten, castArray, cloneDeep } from 'lodash';

function generateTransactions(total = 4000, introduceRepeatedEvery = 7) {
  
	const locations = ['AFG', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'AGO', 'ATA', 'ARM', 'BOL', 'BWA', 'IOT', 'VGB', 'ERI', 'SFE', 'FRO', 'ITA', 'ING', 'HKG', 'JAM', 'LUX', 'MDV', 'MHL', 'MEX', 'MDA', 'MCO', 'NER', 'NOR', 'REU', 'RWA', 'ESP']

	var generateId = (long) => Math.random().toString(36).slice(long || 2)
	var generateDate = (start = new Date(2016, 0, 1), end = new Date(2017, 0, 1)) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
	
	var generateLocation = () => { 
		var location = { id: sample(locations) }

		location.lat = '' + random(-90, 90, true)
		location.lng = '' + random(-180, 180, true)
		location.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci"

		return location
	}

	return flatten(times(total).map(v => {
		var item = {
			transaction_id: generateId(),
			origin: generateLocation(),
			destination: generateLocation(),
			money_amount: random(800, 13000) + '€',
			user_id: generateId(),
			courier_id: generateId(6),
			new_user: random(0, 1) ? 'yes' : 'no',
			created_at: generateDate()
		}

		return castArray( v > 0 && v % introduceRepeatedEvery === 0 ? [item, item] : item)
	}))
}

const allTransactions = generateTransactions(4000, 7);
export default allTransactions

