const fs = require('fs')

let inputArray = fs.readFileSync('inputs/02.txt')
  .map(Number)
  .trimEnd()
  .split('\n')

let parseInput = string => string.split('')

let bitArray = inputArray.map(parseInput)

console.log(bitArray)