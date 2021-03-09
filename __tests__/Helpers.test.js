const { Random, Check } = require('..')

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1]
const EXAMPLE_OBJECT = { someKey: 'someValue', numbers: EXAMPLE_ARRAY }

const createArr = (size = 100) => Array(size).fill(1)

describe('Test of Helpers.Check', () => {
  it('Should return true on valid array', () => {
    expect(Check.array(EXAMPLE_ARRAY)).toBe(true)
    expect(Check.array(123123)).toBe(false)
  })
  it('Should return true on valid all', () => {
    expect(Check.all(EXAMPLE_ARRAY)).toBe(true)
    expect(Check.all([1, 2], null)).toBe(false)
  })
  it('Should return true on valid object', () => {
    expect(Check.object(EXAMPLE_OBJECT)).toBe(true)
    expect(Check.object('sdfsdf')).toBe(false)
  })
  it('Should return true on valid number', () => {
    expect(Check.number(123123)).toBe(true)
    expect(Check.number('sdfsdf')).toBe(false)
  })
})

describe('Test of Helpers.Random', () => {
  it('Should show in console results if all methods', () => {
    console.log(`Results:
    number: ${Array(50)
      .fill(1)
      .map(() => Random.number(0, 3))}
    `)
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
