const fs = require('fs')

const inputArray = fs.readFileSync('./input.txt', 'utf8')
    .split('\n')
    .map(Number)

console.log(inputArray.reduce(countDepthIncreases, 0))

function countDepthIncreases(count, curr, index, array) {
    if (curr > array[index - 1]) {
        return count + 1
    } else {
        return count
    }
}
