const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
