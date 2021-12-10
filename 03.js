const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	.map( element => element.split('') )

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

let isPositive = (element) => {
	if (element > 0) {
		return '1'
	} else {
		return '0'
	}
}

let arrayToString = (string, curr) => {
	return string += curr
}

let toGamma = (string, curr) => {
	if (curr > 0) {
		return string += '1'
	} else {
		return string += '0'
	}
}

let toEpsilon = (string, curr) => {
	if (curr < 0) {
		return string += '1'
	} else {
		return string += '0'
	}
}

let gamma = inputArray
	.reduce(calculateBitSum, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	.reduce(toGamma, '')

let epsilon = inputArray
	.reduce(calculateBitSum, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
	.reduce(toEpsilon, '')

console.log( parseInt(gamma, 2) * parseInt(epsilon, 2) )
