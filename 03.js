const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	.map( element => element.split('') )

console.log(inputArray)

// let rotateArray = (row, index, array) => {
// 	row.map( (bit, index, array) => {
		
// 	})
// }

let calculateBitSum = (sumArray, curr, index, array) => {
	curr.map((element, index, array) => {
		if (element === '1') {
			sumArray[index]++
		} else if (element === '0') {
			sumArray[index]--
		}
	})
}

// let rotatedInputArray = inputArray.map(rotateArray)
// console.log(rotatedInputArray)

let bitSum = inputArray.reduce(
	calculateBitSum, 
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
