const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	.map( element => element.split('') )

console.log(inputArray)

let rotateArray = (row, index, array) => {
	row.map( (bit, index, array) => {
		
	})
}

// let calculateBitSum = (sumArray, curr) => {
// 	return sumArray
// 		.reduce( () => {
// 			if (condition) {
				
// 			} else {
				
// 			}
// 	})
// }

let rotatedInputArray = inputArray.map(rotateArray)
console.log(rotatedInputArray)

// let bitSum = inputArray.reduce(
// 	calculateBitSum, 
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
