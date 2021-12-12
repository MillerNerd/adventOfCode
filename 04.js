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
			.map((card) => { 
				return card.split(/\n/).map((row) => {
					return row.trim().split(/\s+/).map((cell) => {
						return { 'value': parseInt(cell), 'marked': false }
					})
				})
			})
		// this.winningRow = 
		this.isWinner = card => card.foreach( row => {
			
		})
	}
}

let test = new Data('tests/04.txt')
console.log(JSON.stringify(test.cards))

export { Data }
