const fs = require('fs')

class Data {
	constructor(inputpath) {
		this.inputArray = fs.readFileSync(inputpath)
			.toString()
			.trimEnd()
			.split('\n\n')
		this.numberCallArray = this.inputArray[0]
			.split(',')
			.map(Number)
	}
}

export { Data }
