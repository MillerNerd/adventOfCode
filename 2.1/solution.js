const fs = require('fs')

const inputArray = fs.readFileSync('./input.txt', 'utf8')
    .trimEnd()
    .split('\n')

let findPositionVector = inputArray
    .map(element => {
        let direction = element.split(' ')[0]
        let magnitude = parseInt(element.split(' ')[1])
        return { direction, magnitude }
    })
    .reduce((vector, curr, index, array) => {
        if (curr.direction === 'forward') { vector.distance + curr.magnitude, vector.depth }
        else if (curr.direction === 'down') { vector.distance, vector.depth + curr.magnitude }
        else if (curr.direction === 'up') { vector.distance, vector.depth - curr.magnitude }
    }, { 'distance': 0, 'depth': 0 } )

console.log(findPositionVector)