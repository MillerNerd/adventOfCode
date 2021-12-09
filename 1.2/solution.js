const fs = require('fs')

const inputArray = fs.readFileSync('./input.txt', 'utf8')
    .trimEnd()
    .split('\n')
    .map(Number)

let windowArray = inputArray
    .map((element, index, array) => element + array[index + 1] + array[index + 2])
    .slice(0, -2)

console.log(windowArray.reduce(countDepthIncreases, 0))

function countDepthIncreases(count, curr, index, array) {
    if (curr > array[index - 1]) {
        return count + 1
    } else {
        return count
    }
}
