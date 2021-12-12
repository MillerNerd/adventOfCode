const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	// .map( element => element.split('') )

let calculateBitSum = (sumArray) => {
	return sumArray.map( (_element, index) => {
		const col = index
		return inputArray.reduce( (sum, curr) => {
			switch (curr[col]) {
				case '1':
					return sum += 1
					break
				case '0':
					return sum -= 1
					break
				default:
					console.error('Invalid', curr)
					break
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

console.log( 'Gamma rate: ', parseInt(gamma, 2))
console.log( 'Epsilon rate: ', parseInt(epsilon, 2))
console.log( 'Power conumption: ', parseInt(gamma, 2) * parseInt(epsilon, 2) )

let count1s = (count, curr) => {
	if (curr[i] === '1'){
		return count++
	}
}

let count0s = (count, curr) => {
	if (curr[i] === '0'){
		return count++
	}
}

if (oxygenArray.reduce())

let oxygenArray = inputArray.map( element => element.split('') )
for (let i = 0; i < oxygenArray[0].length ; i++){
	if (oxygenArray.reduce(count1s, 0) > oxygenArray.reduce(count0s, 0)) {
		oxygenArray = oxygenArray.filter()
	} 
}
