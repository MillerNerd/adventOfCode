#!/usr/bin/env node

const fs = require('fs')

var increased = 0
const data = fs.readFileSync('./input.txt', 'utf8').split('\n').reduce(depthIncreases)

function depthIncreases(prev, curr) {
    if (parseInt(curr) > parseInt(prev)) {
        increased++
    }
    return curr
}

console.log(increased)