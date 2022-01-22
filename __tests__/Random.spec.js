const { Random } = require('../lib/cjs/src')

const methods = [
	'numbersDeep',
	'values',
	'range',
	'number',
	'powerOfTwo',
	'boolean',
	'arr',
	'numbers',
	'arr',
	'arrs',
	'arrGrow',
	'example',
	'arrExamples',
	'arrSequence',
	'arrChange',
	'arrMerge',
	'arrDouble',
	'arrRepeats',
	'arrShuffles',
	'arrShuffleUnicals',
	'arrDoubleSome',
	'objectProp',
	'arrIndex',
	'arrElement',
	'arrValues',
	'arrUnicals',
	'arrShuffle',
	'arrPart',
	'arrDeepSomeValues',
	'joinedStrings',
	'textLines',
	'objectKey',
	'objectValue',
	'objectEntry',
]

describe('Automated <<< JsUseful.Random >>> Tests with default values', () => {
	it('Should return numbersDeep() result', () => {
		const result = Random.numbersDeep()

		expect(result).toBeDefined()
	})

	it('Should return values() result', () => {
		const result = Random.values(_ARR)

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

	it('Should return arr() result', () => {
		const result = Random.arr()

		expect(result).toBeDefined()
	})

	it('Should return numbers() result', () => {
		const result = Random.numbers()

		expect(result).toBeDefined()
	})

	it('Should return arr() result', () => {
		const result = Random.arr()

		expect(result).toBeDefined()
	})

	it('Should return arrs() result', () => {
		const result = Random.arrs()

		expect(result).toBeDefined()
	})

	it('Should return arrGrow() result', () => {
		const result = Random.arrGrow(_ARR)

		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return example() result', () => {
		const result = Random.example()

		expect(result).toBeDefined()
	})

	it('Should return arrExamples() result', () => {
		const result = Random.arrExamples()

		expect(result).toBeDefined()
	})

	it('Should return arrSequence() result', () => {
		const result = Random.arrSequence()

		expect(result).toBeDefined()
	})

	it('Should return arrChange() result', () => {
		const result = Random.arrChange(2, _ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrMerge() result', () => {
		const result = Random.arrMerge(_ARR, ['Another Array'])

		expect(result).toBeDefined()
	})

	it('Should return arrDouble() result', () => {
		const result = Random.arrDouble(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrRepeats() result', () => {
		const result = Random.arrRepeats(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrShuffles() result', () => {
		const result = Random.arrShuffles(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrShuffleUnicals() result', () => {
		const result = Random.arrShuffleUnicals(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrDoubleSome() result', () => {
		const result = Random.arrDoubleSome(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrIndex() result', () => {
		const result = Random.arrIndex(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrElement() result', () => {
		const result = Random.arrElement(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrValues() result', () => {
		const result = Random.arrValues(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrUnicals() result', () => {
		const result = Random.arrUnicals(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrShuffle() result', () => {
		const result = Random.arrShuffle(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrPart() result', () => {
		const result = Random.arrPart(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return arrDeepSomeValues() result', () => {
		const result = Random.arrDeepSomeValues(_ARR)

		expect(result).toBeDefined()
	})

	it('Should return joinedStrings() result', () => {
		const result = Random.joinedStrings(methods)

		expect(result).toBeDefined()
	})

	it('Should return textLines() result', () => {
		const result = Random.textLines(_ARR.join('\n'))

		expect(result).toBeDefined()
	})

	it('Should return objectKey() result', () => {
		const result = Random.objectKey(_OBJECT)

		expect(result).toBeDefined()
	})

	it('Should return objectValue() result', () => {
		const result = Random.objectValue(_OBJECT)

		expect(result).toBeDefined()
	})

	it('Should return objectEntry() result', () => {
		const result = Random.objectEntry(_OBJECT)

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
		const results = Random.arr(100, () => Random.range())

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
		const results = Random.arr(100, () => Random.number())

		results.forEach(result => {
			expect(result).toBeDefined()
			expect(result).toBeGreaterThanOrEqual(1)
			expect(result).toBeLessThanOrEqual(100)
		})
	})

	it('Should return random numbers in given range', () => {
		const results = Random.arr(100, () => Random.number(125, 8893))

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

	it('Should return random arr, with powerOfTwo values', () => {
		const results = Random.arr(100, () => Random.powerOfTwo(10))

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

	it('Should return random arr, with boolean values', () => {
		const results = Random.arr(100, () => Random.boolean(100))

		results.forEach(result => {
			expect(result).toBeDefined()
		})
	})

	it('Random.boolean', () => {
		expect(Random.boolean()).toBeDefined()
	})
})

describe('Random.arr', () => {
	it('Should return random arr', () => {
		expect(Random.arr()).toBeDefined()
	})

	it('Should return random arr, with given value', () => {
		const results = Random.arr(100, 'some value')

		expect(results).toHaveLength(100)
		results.forEach(result => {
			expect(result).toEqual('some value')
		})
	})

	it('Should return random arr, with given callback result', () => {
		const results = Random.arr(100, () => 'some value')

		expect(results).toHaveLength(100)
		results.forEach(result => {
			expect(result).toEqual('some value')
		})
	})

	it('Random.arr', () => {
		expect(Random.arr()).toBeTruthy()
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

describe('Random.arrValues', () => {
	it('Should return random arrValues', () => {
		expect(Random.arrValues(_ARR)).toBeDefined()
	})

	it('Should return random values from given arr', () => {
		Random.arrValues(_ARR).forEach(v => {
			expect(_ARR.includes(v)).toBe(true)
		})
	})

	it('Random.arrValues', () => {
		expect(Random.arrValues([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrUnicals', () => {
	it('Should return random arrUnicals', () => {
		expect(Random.arrUnicals(_ARR)).toBeDefined()
	})

	it('Should return unical values of given arr', () => {
		const result = Random.arrUnicals(_ARR)

		expect(result).toEqual([...new Set([..._ARR])])
	})

	it('Random.arrUnicals', () => {
		expect(Random.arrUnicals([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrShuffle', () => {
	it('Should return random arrShuffle', () => {
		expect(Random.arrShuffle(_ARR)).toBeDefined()
	})

	it('Should shuffle given arr', () => {
		const result = Random.arrShuffle(_ARR)

		expect(result.sort()).toBe(_ARR)
	})

	it('Random.arrShuffle', () => {
		expect(Random.arrShuffle([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.arrIndex', () => {
	it('Should return random arrIndex', () => {
		expect(Random.arrIndex(_ARR)).toBeDefined()
	})

	it('Should return random index of given arr', () => {
		const result = Random.arrIndex(_ARR)

		expect(_ARR[result]).toBeTruthy()
	})

	it('Random.arrIndex', () => {
		expect(Random.arrIndex([1, 2, 3, 4, 5])).toBeGreaterThanOrEqual(0)
	})
})

describe('Random.arrElement', () => {
	it('Should return random arrElement', () => {
		expect(Random.arrElement(_ARR)).toBeDefined()
	})

	it('Should return random element of given arr', () => {
		const result = Random.arrElement(_ARR)

		expect(_ARR.includes(result)).toBe(true)
	})

	it('Random.arrElement', () => {
		expect(Random.arrElement([1, 2, 3, 4, 5])).toBeTruthy()
	})
})

describe('Random.objectKey', () => {
	it('Should return random objectKey', () => {
		expect(Random.objectKey(_OBJECT)).toBeDefined()
	})

	it('Should return  random key of given object', () => {
		const result = Random.objectKey(_OBJECT)

		expect(_OBJECT).toHaveProperty(result)
	})

	it('Random.objectKey', () => {
		expect(Random.objectKey({ some: 'value' })).toBeTruthy()
	})
})

describe('Random.objectValue', () => {
	it('Should return random objectValue', () => {
		expect(Random.objectValue(_OBJECT)).toBeDefined()
	})

	it('Should return  random value of given object', () => {
		const result = Random.objectValue(_OBJECT)

		expect(Object.values(_OBJECT).includes(result)).toBe(true)
	})

	it('Random.objectValue', () => {
		expect(Random.objectValue({ some: 'value' })).toBeTruthy()
	})
})

describe('Random.objectEntry', () => {
	it('Should return random objectEntry', () => {
		expect(Random.objectEntry(_OBJECT)).toBeDefined()
	})

	it('Should return  random entry of given object', () => {
		const [key, value] = Random.objectEntry(_OBJECT)

		expect(_OBJECT[key]).toBe(value)
	})

	it('Random.objectEntry', () => {
		expect(Random.objectEntry({ some: 'value' })).toBeTruthy()
	})
})
