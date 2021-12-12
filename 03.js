const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
	.toString()
	.trimEnd()
	.split('\n')
	// .map( element => element.split('') )

let sumColumn = (object, curr) => {
	switch (curr[object.col]) {
		case '1':
			return { 'sum': (object.sum + 1), 'col': object.col }
			break
		case '0':
			return { 'sum': (object.sum - 1), 'col': object.col }
			break
		default:
			console.error('Invalid', curr)
			break
	}
}

let popSumArray = (_element, index) => {
	return inputArray.reduce( sumColumn, {'sum': 0, 'col': index}).sum
}

let commonBit = (element) => element > 0 ? 1 : 0
let uncommonBit = (element) => element < 0 ? 1 : 0

let gamma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	.map(popSumArray)
	.map(commonBit)
	.map(String)
	.join('')

let epsilon = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	.map(popSumArray)
	.map(uncommonBit)
	.map(String)
	.join('')

console.log( 'Gamma rate:        ', parseInt(gamma, 2))
console.log( 'Epsilon rate:      ', parseInt(epsilon, 2))
console.log( 'Power consumption: ', parseInt(gamma, 2) * parseInt(epsilon, 2) )

// if (oxygenArray.reduce())

// let oxygenArray = inputArray.map( element => element.split('') )
// for (let i = 0; i < oxygenArray[0].length ; i++){
// 	if (oxygenArray.reduce(count1s, 0) > oxygenArray.reduce(count0s, 0)) {
// 		oxygenArray = oxygenArray.filter()
// 	} 
// }
