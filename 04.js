const fs = require('fs')

class Data {
	constructor(inputpath) {
		this.inputArray = fs.readFileSync(inputpath)
			.toString()
			.trimEnd()
			.split('\n\n')
	}
}

export { Data }
