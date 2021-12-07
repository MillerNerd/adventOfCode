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
        if (curr.direction === 'forward') { 
            return {
                'distance': vector.distance + curr.magnitude, 
                'depth': vector.depth
            }
        }
        else if (curr.direction === 'down') {
            return {
                'distance': vector.distance,
                'depth': vector.depth + curr.magnitude
            }
        }
        else if (curr.direction === 'up') {
          return {
                'distance': vector.distance, 
                'depth': vector.depth - curr.magnitude
            }
        }
    }, { 'distance': 0, 'depth': 0 } )

console.log(findPositionVector.depth * findPositionVector.distance)
