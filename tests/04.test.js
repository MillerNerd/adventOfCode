import { expect } from '@jest/globals'
import exp from 'constants'
import { test } from 'jest-circus'
import * as solution from '../04.js'

describe('part1', () => {
	const testData = new solution.Data('tests/04.txt')
	test('inputArray is array of string', () => {
		expect(testData.inputArray).toEqual([
			'7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
			'22 13 17 11  0\n 8  2 23  4 24\n21  9 14 16  7\n 6 10  3 18  5\n 1 12 20 15 19',
			' 3 15  0  2 22\n 9 18 13 17  5\n19  8  7 25 23\n20 11 10 24  4\n14 21 16 12  6',
			'14 21 17 24  4\n10 16 15  9 19\n18  8 23 26 20\n22 11 13  6  5\n 2  0 12  3  7'
		])
	})
	test('numberCallArray is array of ints', () => {
		expect(testData.numberCallArray).toEqual([
			7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
		])
	})
	test('cards is an array of 2D arrays of objects', () => {
		expect(testData.cards).toEqual([
			[
				[{"value":22,"marked":false},{"value":13,"marked":false},{"value":17,"marked":false},{"value":11,"marked":false},{"value":0,"marked":false}],
				[{"value":8,"marked":false},{"value":2,"marked":false},{"value":23,"marked":false},{"value":4,"marked":false},{"value":24,"marked":false}],
				[{"value":21,"marked":false},{"value":9,"marked":false},{"value":14,"marked":false},{"value":16,"marked":false},{"value":7,"marked":false}],
				[{"value":6,"marked":false},{"value":10,"marked":false},{"value":3,"marked":false},{"value":18,"marked":false},{"value":5,"marked":false}],
				[{"value":1,"marked":false},{"value":12,"marked":false},{"value":20,"marked":false},{"value":15,"marked":false},{"value":19,"marked":false}]
			],[
				[{"value":3,"marked":false},{"value":15,"marked":false},{"value":0,"marked":false},{"value":2,"marked":false},{"value":22,"marked":false}],
				[{"value":9,"marked":false},{"value":18,"marked":false},{"value":13,"marked":false},{"value":17,"marked":false},{"value":5,"marked":false}],
				[{"value":19,"marked":false},{"value":8,"marked":false},{"value":7,"marked":false},{"value":25,"marked":false},{"value":23,"marked":false}],
				[{"value":20,"marked":false},{"value":11,"marked":false},{"value":10,"marked":false},{"value":24,"marked":false},{"value":4,"marked":false}],
				[{"value":14,"marked":false},{"value":21,"marked":false},{"value":16,"marked":false},{"value":12,"marked":false},{"value":6,"marked":false}]
			],[
				[{"value":14,"marked":false},{"value":21,"marked":false},{"value":17,"marked":false},{"value":24,"marked":false},{"value":4,"marked":false}],
				[{"value":10,"marked":false},{"value":16,"marked":false},{"value":15,"marked":false},{"value":9,"marked":false},{"value":19,"marked":false}],
				[{"value":18,"marked":false},{"value":8,"marked":false},{"value":23,"marked":false},{"value":26,"marked":false},{"value":20,"marked":false}],
				[{"value":22,"marked":false},{"value":11,"marked":false},{"value":13,"marked":false},{"value":6,"marked":false},{"value":5,"marked":false}],
				[{"value":2,"marked":false},{"value":0,"marked":false},{"value":12,"marked":false},{"value":3,"marked":false},{"value":7,"marked":false}]
			]
		])
	})
	// test('winning row returns array of 5 winning numbers', () => {
	// 	expect(testData.winningRow).toEqual([14, 21, 17, 24, 4])
	// })
	test('isWinner returns whether given card has won', () => {
		expect(testData.isWinner([
			[{"value":22,"marked":false},{"value":13,"marked":false},{"value":17,"marked":true},{"value":11,"marked":true},{"value":0,"marked":true}],
			[{"value":8,"marked":false},{"value":2,"marked":true},{"value":23,"marked":true},{"value":4,"marked":true},{"value":24,"marked":false}],
			[{"value":21,"marked":true},{"value":9,"marked":true},{"value":14,"marked":true},{"value":16,"marked":false},{"value":7,"marked":true}],
			[{"value":6,"marked":false},{"value":10,"marked":false},{"value":3,"marked":false},{"value":18,"marked":false},{"value":5,"marked":true}],
			[{"value":1,"marked":false},{"value":12,"marked":false},{"value":20,"marked":false},{"value":15,"marked":false},{"value":19,"marked":false}]
		])).toEqual(false)
		expect(testData.isWinner([
			[{"value":3,"marked":false},{"value":15,"marked":false},{"value":0,"marked":true},{"value":2,"marked":true},{"value":22,"marked":false}],
			[{"value":9,"marked":true},{"value":18,"marked":false},{"value":13,"marked":false},{"value":17,"marked":true},{"value":5,"marked":true}],
			[{"value":19,"marked":false},{"value":8,"marked":false},{"value":7,"marked":true},{"value":25,"marked":false},{"value":23,"marked":true}],
			[{"value":20,"marked":false},{"value":11,"marked":true},{"value":10,"marked":false},{"value":24,"marked":true},{"value":4,"marked":true}],
			[{"value":14,"marked":true},{"value":21,"marked":true},{"value":16,"marked":false},{"value":12,"marked":false},{"value":6,"marked":false}]
		])).toEqual(false)
		expect(testData.isWinner([
			[{"value":14,"marked":true},{"value":21,"marked":true},{"value":17,"marked":true},{"value":24,"marked":true},{"value":4,"marked":true}],
			[{"value":10,"marked":false},{"value":16,"marked":false},{"value":15,"marked":false},{"value":9,"marked":true},{"value":19,"marked":false}],
			[{"value":18,"marked":false},{"value":8,"marked":false},{"value":23,"marked":true},{"value":26,"marked":false},{"value":20,"marked":false}],
			[{"value":22,"marked":false},{"value":11,"marked":true},{"value":13,"marked":false},{"value":6,"marked":false},{"value":5,"marked":true}],
			[{"value":2,"marked":true},{"value":0,"marked":true},{"value":12,"marked":false},{"value":3,"marked":false},{"value":7,"marked":true}]
		])).toEqual(false)
	})
	test('arrayRotator returns rotated array', () => {
		expect(arrayRotator([
			[ 0,  1,  2,  3,  4],
			[ 5,  6,  7,  8,  9],
			[10, 11, 12, 13, 14],
			[15, 16, 17, 18, 19],
			[20, 21, 22, 23, 24]
		])).toEqual([
			[0, 5, 10, 15, 20],
			[1, 6, 11, 16, 21],
			[2, 7, 12, 17, 22],
			[3, 8, 13, 18, 23],
			[4, 9, 14, 19, 24]
		])
	})
})
