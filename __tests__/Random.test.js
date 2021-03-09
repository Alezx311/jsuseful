const { Random } = require('../src')

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1]
const EXAMPLE_OBJECT = { someKey: 'someValue', numbers: EXAMPLE_ARRAY }

const createArr = (size = 100) => Array(size).fill(1)

// Random.range
describe('Test Random.range', () => {
  it('Should return random range', () => {
    expect(Random.range()).toBeDefined()
  })
})
// Random.number
describe('Test Random.number', () => {
  it('Should return random number', () => {
    expect(Random.number()).toBeDefined()
  })
})
// Random.powerOfTwo
describe('Test Random.powerOfTwo', () => {
  it('Should return random powerOfTwo', () => {
    expect(Random.powerOfTwo()).toBeDefined()
  })
})
// Random.boolean
describe('Test Random.boolean', () => {
  it('Should return random boolean', () => {
    expect(Random.boolean()).toBeDefined()
  })
})
// Random.array
describe('Test Random.array', () => {
  it('Should return random array', () => {
    expect(Random.array()).toBeDefined()
  })
})
// Random.numbers
describe('Test Random.numbers', () => {
  it('Should return random numbers', () => {
    expect(Random.numbers()).toBeDefined()
  })
})
// Random.arrayValues
describe('Test Random.arrayValues', () => {
  it('Should return random arrayValues', () => {
    expect(Random.arrayValues(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.arraySequence
describe('Test Random.arraySequence', () => {
  it('Should return random arraySequence', () => {
    expect(Random.arraySequence(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.arrayUnicals
describe('Test Random.arrayUnicals', () => {
  it('Should return random arrayUnicals', () => {
    expect(Random.arrayUnicals(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.arrayShuffle
describe('Test Random.arrayShuffle', () => {
  it('Should return random arrayShuffle', () => {
    expect(Random.arrayShuffle(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.arrayIndex
describe('Test Random.arrayIndex', () => {
  it('Should return random arrayIndex', () => {
    expect(Random.arrayIndex(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.arrayElement
describe('Test Random.arrayElement', () => {
  it('Should return random arrayElement', () => {
    expect(Random.arrayElement(EXAMPLE_ARRAY)).toBeDefined()
  })
})
// Random.objectKey
describe('Test Random.objectKey', () => {
  it('Should return random objectKey', () => {
    expect(Random.objectKey(EXAMPLE_OBJECT)).toBeDefined()
  })
})
// Random.objectValue
describe('Test Random.objectValue', () => {
  it('Should return random objectValue', () => {
    expect(Random.objectValue(EXAMPLE_OBJECT)).toBeDefined()
  })
})
// Random.objectEntry
describe('Test Random.objectEntry', () => {
  it('Should return random objectEntry', () => {
    expect(Random.objectEntry(EXAMPLE_OBJECT)).toBeDefined()
  })
})

describe('Test of Helpers.Random', () => {
  it('Should return true', () => {
    expect(Random).toBeDefined
  })
  it('Should return random range, > 0 && < 1', () => {
    createArr()
      .map(v => Random.range())
      .forEach(v => {
        expect(v).toBeLessThan(1)
        expect(v).toBeGreaterThan(0)
      })
  })
  it('Should return random number, > min && < max', () => {
    createArr()
      .map(v => Random.number())
      .forEach(v => {
        expect(v).toBeGreaterThanOrEqual(1)
        expect(v).toBeLessThanOrEqual(100)
      })

    createArr()
      .map(v => Random.number(1, 10))
      .forEach(v => {
        expect(v).toBeGreaterThanOrEqual(1)
        expect(v).toBeLessThanOrEqual(10)
      })
  })
  it('Should return random boolean, with default chance of true === 50%', () => {
    createArr()
      .map(v => Random.boolean())
      .forEach(v => {
        expect(v).toBeDefined()
      })
  })
  it('Should return array, with setted size and random numbers as value', () => {
    const array = Random.array(100)

    array.forEach(v => {
      expect(v).toBeGreaterThanOrEqual(1)
      expect(v).toBeLessThanOrEqual(100)
    })

    expect(array).toHaveLength(100)
  })
  it('Should return random numbers array', () => {
    const numbers = Random.numbers(100)

    expect(numbers).toHaveLength(100)

    numbers.forEach(v => {
      expect(v).toBeGreaterThanOrEqual(1)
      expect(v).toBeLessThanOrEqual(100)
    })
  })
  it('Should return random values from given array', () => {
    Random.arrayValues(EXAMPLE_ARRAY).forEach(v => {
      expect(EXAMPLE_ARRAY.includes(v)).toBe(true)
    })
  })
  it('Should return sequence of numbers, with given size', () => {
    const result = Random.arraySequence(1, 5)

    expect(result).toEqual([1, 2, 3, 4, 5])
  })
  it('Should return unical values of given array', () => {
    const result = Random.arrayUnicals(EXAMPLE_ARRAY)

    expect(result).toEqual([...new Set([...EXAMPLE_ARRAY])])
  })
  it('Should shuffle given array', () => {
    const result = Random.arrayShuffle(EXAMPLE_ARRAY)

    expect(result.sort()).toBe(EXAMPLE_ARRAY)
  })
  it('Should return random index of given array', () => {
    const result = Random.arrayIndex(EXAMPLE_ARRAY)

    expect(EXAMPLE_ARRAY[result]).toBeTruthy()
  })
  it('Should return random element of given array', () => {
    const result = Random.arrayElement(EXAMPLE_ARRAY)

    expect(EXAMPLE_ARRAY.includes(result)).toBe(true)
  })
  it('Should return  random key of given object', () => {
    const result = Random.objectKey(EXAMPLE_OBJECT)

    expect(EXAMPLE_OBJECT).toHaveProperty(result)
  })
  it('Should return  random value of given object', () => {
    const result = Random.objectValue(EXAMPLE_OBJECT)

    expect(Object.values(EXAMPLE_OBJECT).includes(result)).toBe(true)
  })
  it('Should return  random entry of given object', () => {
    const [key, value] = Random.objectEntry(EXAMPLE_OBJECT)

    expect(EXAMPLE_OBJECT[key]).toBe(value)
  })
})
