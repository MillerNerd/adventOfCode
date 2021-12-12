const fs = require('fs')

let inputArray = fs.readFileSync('tests/04.txt')
  .toString()
  .trimEnd()
  .split('\n\n')

console.log(inputArray)