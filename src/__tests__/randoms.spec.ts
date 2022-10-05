import * as Randoms from '../randoms'

const STR = 'Some string value'
const NUM = 42
const ARR = [311, 'Some string element']
const OBJ = { STR, NUM, ARR }

describe('Rands is defined', () => {
	it('Should be defined', () => {
		expect(Randoms).toBeDefined()
		expect(Randoms).not.toBeNull()
		expect(Randoms).not.toBeUndefined()

		expect(typeof Randoms).toBe('object')
	})
})

describe('rand', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('rand')
	})

	const value = Randoms.rand
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThan(1)
})

describe('randNum', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randNum')
	})

	const value = Randoms.randNum
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const max = NUM
	const min = 1
	const result = value(max, min)

	expect(typeof result).toBe('number')
	expect(result).toBeLessThanOrEqual(max)
	expect(result).toBeGreaterThanOrEqual(min)
})

describe('randInt', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randInt')
	})

	const value = Randoms.randInt
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const max = NUM
	const min = 1
	const result = value(max, min)

	expect(typeof result).toBe('number')
	expect(result).toBeLessThanOrEqual(max)
	expect(result).toBeGreaterThanOrEqual(min)
})

describe('randBool', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randBool')
	})

	const value = Randoms.randBool
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('boolean')
	expect([true, false]).toContain(result)
})

describe('randCoin', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randCoin')
	})

	const value = Randoms.randCoin
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value('heads', 'tails')
	expect(typeof result).toBe('string')
	expect(['heads', 'tails']).toContain(result)
})

describe('randStr', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randStr')
	})

	const value = Randoms.randStr
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(NUM)
	expect(typeof result).toBe('string')
})

describe('randArr', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randArr')
	})

	const value = Randoms.randArr
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = NUM
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
	expect(result).toHaveLength(input)
})

describe('randMany', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMany')
	})

	const value = Randoms.randMany
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

describe('randIndex', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randIndex')
	})

	const value = Randoms.randIndex
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThanOrEqual(0)
	expect(result).toBeLessThanOrEqual(input.length)
})

describe('randElement', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randElement')
	})

	const value = Randoms.randElement
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(input).toContain(result)
})

describe('randSort', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randSort')
	})

	const value = Randoms.randSort
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
})

describe('randShuffle', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randShuffle')
	})

	const value = Randoms.randShuffle
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const input = ARR
	const result = value(input)
	expect(typeof result).toBe('object')
	expect(Array.isArray(result)).toBe(true)
})

describe('randSource', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randSource')
	})
	const value = Randoms.randSource
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

describe('randObj', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randObj')
	})

	const value = Randoms.randObj
	const result = value()
	expect(typeof result).toBe('object')
	expect(result).not.toBeNull()
	expect(result).not.toBeUndefined()
	expect(Array.isArray(result)).toBe(false)
})

describe('randKey', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randKey')
	})

	const value = Randoms.randKey
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(typeof result).toBe('string')
	expect(OBJ).toHaveProperty(result)
})

describe('randValue', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randValue')
	})

	const value = Randoms.randValue
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(Object.values(OBJ)).toContain(result)
})

describe('randEntry', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randEntry')
	})

	const value = Randoms.randEntry
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value(OBJ)
	expect(Array.isArray(result)).toBe(true)
	expect(Object.keys(OBJ)).toContain(result[0])
	expect(Object.values(OBJ)).toContain(result[1])
})

describe('randTypeOf', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randTypeOf')
	})

	const value = Randoms.randTypeOf
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
	expect(['string', 'number', 'function', 'object', 'boolean', 'bigint', 'symbol', 'undefined']).toContain(result)
})

describe('randColorClass', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randColorClass')
	})

	const value = Randoms.randColorClass
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randColorCode', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randColorCode')
	})

	const value = Randoms.randColorCode
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randColorName', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randColorName')
	})

	const value = Randoms.randColorName
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicDuration', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicDuration')
	})

	const value = Randoms.randMusicDuration
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicInterval', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicInterval')
	})

	const value = Randoms.randMusicInterval
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicNoteBemole', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicNoteBemole')
	})

	const value = Randoms.randMusicNoteBemole
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicNoteChar', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicNoteChar')
	})

	const value = Randoms.randMusicNoteChar
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicNoteSharp', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicNoteSharp')
	})

	const value = Randoms.randMusicNoteSharp
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicScale', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicScale')
	})

	const value = Randoms.randMusicScale
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('string')
	expect(result.length).toBeGreaterThan(0)
})

describe('randMusicOctave', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicOctave')
	})

	const value = Randoms.randMusicOctave
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThanOrEqual(8)
})

describe('randMusicMidiIndex', () => {
	it('Should be property', () => {
		expect(Randoms).toHaveProperty('randMusicMidiIndex')
	})

	const value = Randoms.randMusicMidiIndex
	expect(value).toBeInstanceOf(Function)
	expect(typeof value).toBe('function')

	const result = value()
	expect(typeof result).toBe('number')
	expect(result).toBeGreaterThan(0)
	expect(result).toBeLessThanOrEqual(127)
})
