const fs = require('fs')

let inputArray = fs.readFileSync('inputs/02.txt')
  .toString()
  .trimEnd()
  .split('\n')