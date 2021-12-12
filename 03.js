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

let gamma = Array(inputArray[0].length).fill(0)
	.map(popSumArray)
	.map(commonBit)
	.map(String)
	.join('')

let epsilon = Array(inputArray[0].length).fill(0)
	.map(popSumArray)
	.map(uncommonBit)
	.map(String)
	.join('')

console.log( 'Gamma rate:         ', parseInt(gamma, 2))
console.log( 'Epsilon rate:       ', parseInt(epsilon, 2))
console.log( 'Power consumption:  ', parseInt(gamma, 2) * parseInt(epsilon, 2) )

// if (oxygenArray.reduce())

let oxygenArray = inputArray.map( x => x.split('') )
columns = oxygenArray[0].length

for (let col = 0; col < columns; col++){
	bit = oxygenArray.reduce(sumColumn, {'sum': 0, 'col': col}).sum
	bit >= 0 ? bit = '1' : bit = '0'
	oxygenArray = oxygenArray.filter(element => element[col] === bit)
}

let CO2Array = inputArray.map( x => x.split('') )

for (let col = 0; col < columns; col++){
	if (CO2Array.length === 1) break
	bit = CO2Array.reduce(sumColumn, {'sum': 0, 'col': col}).sum
	bit >= 0 ? bit = '0' : bit = '1'
	CO2Array = CO2Array.filter(element => element[col] === bit)
}

let oxygenRating = parseInt(oxygenArray.join('').replaceAll(',', ''), 2)
let CO2Rating = parseInt(CO2Array.join('').replaceAll(',', ''), 2)
console.log( 'O2 generator rating:', oxygenRating)
console.log( 'CO2 scrubber rating:', CO2Rating)
console.log( 'Life support rating:', oxygenRating * CO2Rating)
