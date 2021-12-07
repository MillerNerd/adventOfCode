const fs = require('fs')

let inputArray = fs.readFileSync('inputs/03.txt')
  .map(Number)
  .trimEnd()
  .split('\n')

let parseInput = string => string.split('')

let bitArray = inputArray.map(parseInput)

console.log(bitArray)