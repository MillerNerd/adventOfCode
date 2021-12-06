const fs = require('fs')

const data = fs.readFileSync('./input.txt', 'utf8').split('\n')
console.log(data)
var increased = 0



data.reduce(depthIncreases)
function depthIncreases(prev, curr) {
    if (parseInt(curr) > parseInt(prev)) {
        increased++
    }
    return curr
}

console.log(increased)
