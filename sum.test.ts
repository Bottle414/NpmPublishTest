import { sum, getRandom } from './sum.ts'
import { expect, test } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('get random number', () => {
    expect(getRandom()).toBeTypeOf('number')
})