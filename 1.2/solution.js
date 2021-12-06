const fs = require('fs')

const inputArray = fs.readFileSync('./input.txt', 'utf8')
    .split('\n')
    .map(Number)
// console.log(data)

let increased = 0

inputArray.reduce(depthIncreases)
function depthIncreases(prev, curr) {
    if (curr > prev) {
        increased++
    }
    return curr
}

console.log(increased)
