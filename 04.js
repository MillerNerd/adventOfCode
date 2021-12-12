import * as fs from 'fs'

class Data {
	constructor(inputpath) {
		this.inputArray = fs.readFileSync(inputpath)
			.toString()
			.trimEnd()
			.split('\n\n')
		this.numberCallArray = this.inputArray[0]
			.split(',')
			.map(Number)
		this.cards = this.inputArray
			.slice(1)
			.split(/\n/)
			// .split(/\s/)
	}
}

let test = new Data('tests/04.txt')
console.log(test.cards)

export { Data }
