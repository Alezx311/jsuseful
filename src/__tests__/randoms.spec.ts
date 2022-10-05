import * as Randoms from '../randoms'

const STR = 'Some string value'
const NUM = 42
const ARR = [311, 'Some string element']
const OBJ = { STR, NUM, ARR }

describe('Randoms is defined', () => {
	it('Should be defined', () => {
		expect(Randoms).toBeDefined()
		expect(Randoms).not.toBeNull()
		expect(Randoms).not.toBeUndefined()

		expect(typeof Randoms).toBe('object')
	})
})

describe('random', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('random')
	})

	const value = Randoms.random
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThan(1)
})

describe('randomNum', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomNum')
	})

	const value = Randoms.randomNum
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const max = NUM
	const min = 1
	const result = value(max, min)

	expect(typeof result).toBe('number')
	expect(result).toBeLessThanOrEqual(max)
	expect(result).toBeGreaterThanOrEqual(min)
})

describe('randomInt', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomInt')
	})

	const value = Randoms.randomInt
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const max = NUM
	const min = 1
	const result = value(max, min)

	expect(typeof result).toBe('number')
	expect(result).toBeLessThanOrEqual(max)
	expect(result).toBeGreaterThanOrEqual(min)
})

describe('randomBool', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomBool')
	})

	const value = Randoms.randomBool
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('boolean')
	expect([true, false]).toContain(result)
})

describe('randomCoin', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomCoin')
	})

	const value = Randoms.randomCoin
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value('heads', 'tails')
	expect(typeof result).toBe('string')
	expect(['heads', 'tails']).toContain(result)
})

describe('randomStr', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomStr')
	})

	const value = Randoms.randomStr
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(NUM)
	expect(typeof result).toBe('string')
})

describe('randomArr', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomArr')
	})

	const value = Randoms.randomArr
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = NUM
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
	expect(result).toHaveLength(input)
})

describe('randomMany', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMany')
	})

	const value = Randoms.randomMany
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const size = 7
	const elem = NUM
	const result = value(size, elem)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
	expect(result).toHaveLength(size)
	expect(result).toContain(elem)
})

describe('randomIndex', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomIndex')
	})

	const value = Randoms.randomIndex
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThanOrEqual(0)
	expect(result).toBeLessThanOrEqual(input.length)
})

describe('randomElement', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomElement')
	})

	const value = Randoms.randomElement
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(input).toContain(result)
})

describe('randomSort', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomSort')
	})

	const value = Randoms.randomSort
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
})

describe('randomShuffle', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomShuffle')
	})

	const value = Randoms.randomShuffle
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
})

describe('randomSource', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomSource')
	})
	const value = Randoms.randomSource
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(result).toHaveProperty('value')
	expect(result).toHaveProperty('input')
	expect(result).toHaveProperty('desc')
	expect(result.input).toBe(input)
	expect(typeof result.desc).toBe('string')
})

describe('randomObject', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomObject')
	})

	const value = Randoms.randomObject
	const result = value(7)
	expect(typeof result).toBe('object')
	expect(result).not.toBeNull()
	expect(result).not.toBeUndefined()
	expect(Array.isArray(result)).toBe(false)
})

describe('randomKey', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomKey')
	})

	const value = Randoms.randomKey
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(typeof result).toBe('string')
	expect(OBJ).toHaveProperty(result)
})

describe('randomValue', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomValue')
	})

	const value = Randoms.randomValue
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(Object.values(OBJ)).toContain(result)
})

describe('randomEntry', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomEntry')
	})

	const value = Randoms.randomEntry
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(Array.isArray(result)).toBe(true)
	expect(Object.keys(OBJ)).toContain(result[0])
	expect(Object.values(OBJ)).toContain(result[1])
})

describe('randomTypeOf', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomTypeOf')
	})

	const value = Randoms.randomTypeOf
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
	expect(['string', 'number', 'function', 'object', 'boolean', 'bigint', 'symbol', 'undefined']).toContain(result)
})

describe('randomColorClass', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomColorClass')
	})

	const value = Randoms.randomColorClass
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomColorCode', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomColorCode')
	})

	const value = Randoms.randomColorCode
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomColorName', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomColorName')
	})

	const value = Randoms.randomColorName
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicDuration', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicDuration')
	})

	const value = Randoms.randomMusicDuration
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicInterval', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicInterval')
	})

	const value = Randoms.randomMusicInterval
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicNoteBemole', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicNoteBemole')
	})

	const value = Randoms.randomMusicNoteBemole
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicNoteChar', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicNoteChar')
	})

	const value = Randoms.randomMusicNoteChar
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicNoteSharp', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicNoteSharp')
	})

	const value = Randoms.randomMusicNoteSharp
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicScale', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicScale')
	})

	const value = Randoms.randomMusicScale
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randomMusicOctave', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicOctave')
	})

	const value = Randoms.randomMusicOctave
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThanOrEqual(8)
})

describe('randomMusicMidiIndex', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randomMusicMidiIndex')
	})

	const value = Randoms.randomMusicMidiIndex
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThanOrEqual(127)
})
