const { Random } = require('../lib/src')

const methods = [
	'numbersDeep',
	'values',
	'range',
	'number',
	'powerOfTwo',
	'boolean',
	'array',
	'numbers',
	'arr',
	'arrays',
	'arrayGrow',
	'example',
	'arrayExamples',
	'arraySequence',
	'arrayChange',
	'arrayMerge',
	'arrayDouble',
	'arrayRepeats',
	'arrayShuffles',
	'arrayShuffleUnicals',
	'arrayDoubleSome',
	'objectProp',
	'arrayIndex',
	'arrayElement',
	'arrayValues',
	'arrayUnicals',
	'arrayShuffle',
	'arrayPart',
	'arrayDeepSomeValues',
	'joinedStrings',
	'textLines',
	'objectKey',
	'objectValue',
	'objectEntry',
]

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1]
const EXAMPLE_OBJECT = { examples: EXAMPLE_ARRAY, methods }

describe('Automated <<< JsUSeful.Random >>> Tests with default values', () => {
	it('Should return numbersDeep() result', () => {
		const result = Random.numbersDeep()

		expect(result).toBeDefined()
	})

	it('Should return values() result', () => {
		const result = Random.values(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return range() result', () => {
		const result = Random.range()

		expect(result).toBeDefined()
	})

	it('Should return number() result', () => {
		const result = Random.number()

		expect(result).toBeDefined()
	})

	it('Should return powerOfTwo() result', () => {
		const result = Random.powerOfTwo()

		expect(result).toBeDefined()
	})

	it('Should return boolean() result', () => {
		const result = Random.boolean()

		expect(result).toBeDefined()
	})

	it('Should return array() result', () => {
		const result = Random.array()

		expect(result).toBeDefined()
	})

	it('Should return numbers() result', () => {
		const result = Random.numbers()

		expect(result).toBeDefined()
	})

	it('Should return arr() result', () => {
		const result = Random.array()

		expect(result).toBeDefined()
	})

	it('Should return arrays() result', () => {
		const result = Random.arrays()

		expect(result).toBeDefined()
	})

	it('Should return arrayGrow() result', () => {
		const result = Random.arrayGrow(EXAMPLE_ARRAY)

		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return example() result', () => {
		const result = Random.example()

		expect(result).toBeDefined()
	})

	it('Should return arrayExamples() result', () => {
		const result = Random.arrayExamples()

		expect(result).toBeDefined()
	})

	it('Should return arraySequence() result', () => {
		const result = Random.arraySequence()

		expect(result).toBeDefined()
	})

	it('Should return arrayChange() result', () => {
		const result = Random.arrayChange(2, EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayMerge() result', () => {
		const result = Random.arrayMerge(EXAMPLE_ARRAY, ['Another Array'])

		expect(result).toBeDefined()
	})

	it('Should return arrayDouble() result', () => {
		const result = Random.arrayDouble(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayRepeats() result', () => {
		const result = Random.arrayRepeats(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayShuffles() result', () => {
		const result = Random.arrayShuffles(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayShuffleUnicals() result', () => {
		const result = Random.arrayShuffleUnicals(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayDoubleSome() result', () => {
		const result = Random.arrayDoubleSome(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayIndex() result', () => {
		const result = Random.arrayIndex(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayElement() result', () => {
		const result = Random.arrayElement(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayValues() result', () => {
		const result = Random.arrayValues(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayUnicals() result', () => {
		const result = Random.arrayUnicals(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayShuffle() result', () => {
		const result = Random.arrayShuffle(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayPart() result', () => {
		const result = Random.arrayPart(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return arrayDeepSomeValues() result', () => {
		const result = Random.arrayDeepSomeValues(EXAMPLE_ARRAY)

		expect(result).toBeDefined()
	})

	it('Should return joinedStrings() result', () => {
		const result = Random.joinedStrings(methods)

		expect(result).toBeDefined()
	})

	it('Should return textLines() result', () => {
		const result = Random.textLines(EXAMPLE_ARRAY.join('\n'))

		expect(result).toBeDefined()
	})

	it('Should return objectKey() result', () => {
		const result = Random.objectKey(EXAMPLE_OBJECT)

		expect(result).toBeDefined()
	})

	it('Should return objectValue() result', () => {
		const result = Random.objectValue(EXAMPLE_OBJECT)

		expect(result).toBeDefined()
	})

	it('Should return objectEntry() result', () => {
		const result = Random.objectEntry(EXAMPLE_OBJECT)

		expect(result).toBeDefined()
	})
})

describe('Random.range', () => {
	it('Should return random range', () => {
		const result = Random.range()

		expect(result).toBeDefined()
		expect(result).toBeGreaterThan(0)
		expect(result).toBeLessThan(1)
	})

	it('Should return random ranges', () => {
		const results = Random.array(100, () => Random.range())

		results.forEach(result => {
			expect(result).toBeDefined()
			expect(result).toBeGreaterThan(0)
			expect(result).toBeLessThan(1)
		})
	})

	it('Random.range custom', () => {
		expect(Random.range(0.7)).toBeGreaterThanOrEqual(0.7)
	})
})

describe('Random.number', () => {
	it('Should return random number', () => {
		const result = Random.number()

		expect(result).toBeDefined()
		expect(result).toBeGreaterThanOrEqual(1)
		expect(result).toBeLessThanOrEqual(100)
	})

	it('Should return random numbers', () => {
		const results = Random.array(100, () => Random.number())

		results.forEach(result => {
			expect(result).toBeDefined()
			expect(result).toBeGreaterThanOrEqual(1)
			expect(result).toBeLessThanOrEqual(100)
		})
	})

	it('Should return random numbers in given range', () => {
		const results = Random.array(100, () => Random.number(125, 8893))

		results.forEach(result => {
			expect(result).toBeDefined()
			expect(result).toBeGreaterThanOrEqual(125)
			expect(result).toBeLessThanOrEqual(8893)
		})
	})

	it('Random.number', () => {
		expect(Random.number()).toBeTruthy()
	})
})

describe('Random.powerOfTwo', () => {
	it('Should return random powerOfTwo', () => {
		expect(Random.powerOfTwo()).toBeDefined()
	})

	it('Should return random array, with powerOfTwo values', () => {
		const results = Random.array(100, () => Random.powerOfTwo(10))

		results.forEach(result => {
			expect(result).toBeDefined()
			expect(result % 2).toEqual(0)
			expect(result).toBeGreaterThanOrEqual(2)
		})
	})

	it('Random.powerOfTwo', () => {
		expect(Random.powerOfTwo()).toBeTruthy()
	})
})

describe('Random.boolean', () => {
	it('Should return random boolean', () => {
		expect(Random.boolean()).toBeDefined()
	})

	it('Should return random array, with boolean values', () => {
		const results = Random.array(100, () => Random.boolean(100))

		results.forEach(result => {
			expect(result).toBeDefined()
		})
	})

	it('Random.boolean', () => {
		expect(Random.boolean()).toBeDefined()
	})
})

describe('Random.array', () => {
	it('Should return random array', () => {
		expect(Random.array()).toBeDefined()
	})

	it('Should return random array, with given value', () => {
		const results = Random.array(100, 'some value')

		expect(results).toHaveLength(100)
		results.forEach(result => {
			expect(result).toEqual('some value')
		})
	})

	it('Should return random array, with given callback result', () => {
		const results = Random.array(100, () => 'some value')

		expect(results).toHaveLength(100)
		results.forEach(result => {
			expect(result).toEqual('some value')
		})
	})

	it('Random.array', () => {
		expect(Random.array()).toBeTruthy()
	})
})

describe('Random.numbers', () => {
	it('Should return random numbers', () => {
		expect(Random.numbers()).toBeDefined()
	})

	it('Should return random numbers in given range', () => {
		const results = Random.numbers(100, 35, 5472)

		expect(results?.length).toBe(100)
	})

	it('Should return random numbers in given range, and with given size', () => {
		const results = Random.numbers(354, 5472, 234)

		expect(results?.length).toBe(354)
	})

	it('Random.numbers', () => {
		expect(Random.numbers()).toBeTruthy()
	})
})

describe('Random.arrayValues', () => {
	it('Should return random arrayValues', () => {
		expect(Random.arrayValues(EXAMPLE_ARRAY)).toBeDefined()
	})

	it('Should return random values from given array', () => {
		Random.arrayValues(EXAMPLE_ARRAY).forEach(v => {
			expect(EXAMPLE_ARRAY.includes(v)).toBe(true)
		})
	})

	it('Random.arrayValues', () => {
		expect(Random.arrayValues([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrayUnicals', () => {
	it('Should return random arrayUnicals', () => {
		expect(Random.arrayUnicals(EXAMPLE_ARRAY)).toBeDefined()
	})

	it('Should return unical values of given array', () => {
		const result = Random.arrayUnicals(EXAMPLE_ARRAY)

		expect(result).toEqual([...new Set([...EXAMPLE_ARRAY])])
	})

	it('Random.arrayUnicals', () => {
		expect(Random.arrayUnicals([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrayShuffle', () => {
	it('Should return random arrayShuffle', () => {
		expect(Random.arrayShuffle(EXAMPLE_ARRAY)).toBeDefined()
	})

	it('Should shuffle given array', () => {
		const result = Random.arrayShuffle(EXAMPLE_ARRAY)

		expect(result.sort()).toBe(EXAMPLE_ARRAY)
	})

	it('Random.arrayShuffle', () => {
		expect(Random.arrayShuffle([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrayIndex', () => {
	it('Should return random arrayIndex', () => {
		expect(Random.arrayIndex(EXAMPLE_ARRAY)).toBeDefined()
	})

	it('Should return random index of given array', () => {
		const result = Random.arrayIndex(EXAMPLE_ARRAY)

		expect(EXAMPLE_ARRAY[result]).toBeTruthy()
	})

	it('Random.arrayIndex', () => {
		expect(Random.arrayIndex([1, 2, 3, 4, 5])).toBeGreaterThanOrEqual(0)
	})
})

describe('Random.arrayElement', () => {
	it('Should return random arrayElement', () => {
		expect(Random.arrayElement(EXAMPLE_ARRAY)).toBeDefined()
	})

	it('Should return random element of given array', () => {
		const result = Random.arrayElement(EXAMPLE_ARRAY)

		expect(EXAMPLE_ARRAY.includes(result)).toBe(true)
	})

	it('Random.arrayElement', () => {
		expect(Random.arrayElement([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.objectKey', () => {
	it('Should return random objectKey', () => {
		expect(Random.objectKey(EXAMPLE_OBJECT)).toBeDefined()
	})

	it('Should return  random key of given object', () => {
		const result = Random.objectKey(EXAMPLE_OBJECT)

		expect(EXAMPLE_OBJECT).toHaveProperty(result)
	})

	it('Random.objectKey', () => {
		expect(Random.objectKey({ some: 'value' })).toBeTruthy()
	})
})

describe('Random.objectValue', () => {
	it('Should return random objectValue', () => {
		expect(Random.objectValue(EXAMPLE_OBJECT)).toBeDefined()
	})

	it('Should return  random value of given object', () => {
		const result = Random.objectValue(EXAMPLE_OBJECT)

		expect(Object.values(EXAMPLE_OBJECT).includes(result)).toBe(true)
	})

	it('Random.objectValue', () => {
		expect(Random.objectValue({ some: 'value' })).toBeTruthy()
	})
})

describe('Random.objectEntry', () => {
	it('Should return random objectEntry', () => {
		expect(Random.objectEntry(EXAMPLE_OBJECT)).toBeDefined()
	})

	it('Should return  random entry of given object', () => {
		const [key, value] = Random.objectEntry(EXAMPLE_OBJECT)

		expect(EXAMPLE_OBJECT[key]).toBe(value)
	})

	it('Random.objectEntry', () => {
		expect(Random.objectEntry({ some: 'value' })).toBeTruthy()
	})
})
