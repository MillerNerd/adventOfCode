const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	.map( element => element.split('') )

// console.log(inputArray)

// let rotateArray = (row, index, array) => {
// 	row.map( (bit, index, array) => {
		
// 	})
// }

let calculateBitSum = (sumArray) => {
	return sumArray.map( (_element, index) => {
		const col = index
		return inputArray.reduce( (sum, curr) => {
			if (curr[col] === '1') {
				return sum += 1
			} else  if (curr[col] === '0') {
				return sum -= 1
			}
		}, 0)
	})
}

// let rotatedInputArray = inputArray.map(rotateArray)
// console.log(rotatedInputArray)

let bitSum = inputArray.reduce(calculateBitSum, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

console.log(bitSum)