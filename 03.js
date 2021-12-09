const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')

let calculateBitSum = string => {
	
}

let bitSum = inputArray.reduce(
	calculateBitSum, 
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
