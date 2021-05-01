const { Random } = require('../lib/cjs/src')

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1]
const EXAMPLE_OBJECT = { someKey: 'someValue', numbers: EXAMPLE_ARRAY }

describe('Tests for JsUseful.Random module', () => {
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

      results.forEach(result => {
        expect(result).toBeGreaterThanOrEqual(35)
        expect(result).toBeLessThanOrEqual(5472)
      })
    })

    it('Should return random numbers in given range, and with given size', () => {
      const results = Random.numbers(354, 5472, 234)

      expect(results).toHaveLength(234)
      results.forEach(result => {
        expect(result).toBeGreaterThanOrEqual(354)
        expect(result).toBeLessThanOrEqual(5472)
      })
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
})
