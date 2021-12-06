const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8')
    .split('\n')
    .map(Number)
console.log(data)

let increased = 0

data.reduce(depthIncreases)
function depthIncreases(prev, curr) {
    if (curr > prev) {
        increased++
    }
    return curr
}

console.log(increased)
