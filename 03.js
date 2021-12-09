const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	.map( element => element.split('') )

console.log(inputArray)

let rotateArray = (element, index, array) => {
	let temp = element.split('')
}

// let calculateBitSum = (sumArray, curr) => {
// 	return sumArray
// 		.reduce( () => {
// 			if (condition) {
				
// 			} else {
				
// 			}
// 	})
// }

// let rotatedInputArray = inputArray.map(rotateArray)

// let bitSum = inputArray.reduce(
// 	calculateBitSum, 
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
