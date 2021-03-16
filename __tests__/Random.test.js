const { Random } = require('..')

describe('Test of Random.range', () => {
  it('Should return a valid results', () => {
    const result = Random.range()

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(1)
  })

  it('Should return a valid results, with custom arguments', () => {
    const opt = { min: 0.2, max: 0.8 }
    const result = Random.range(opt)

    expect(result).toBeGreaterThanOrEqual(opt.min)
    expect(result).toBeLessThanOrEqual(opt.max)
  })

  it('Should throw an error, for invalid arguments', () => {
    expect(() => {
      Random.range({ min: 'some invalid' })
    }).toThrow()
  })
})

describe('Test of Random.number', () => {
  it('Should return a valid results', () => {
    const result = Random.number()

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(100)
  })

  it('Should return a valid results, with custom arguments', () => {
    const opt = { min: 54, max: 679 }
    const result = Random.number(opt)

    expect(result).toBeGreaterThanOrEqual(opt.min)
    expect(result).toBeLessThanOrEqual(opt.max)
  })

  it('Should throw an error, for invalid arguments', () => {
    expect(() => {
      Random.number({ min: 'some invalid' })
    }).toThrow()
  })
})

describe('Test of Random.powerOfTwo', () => {
  it('Should return a valid results', () => {
    const result = Random.powerOfTwo()

    expect(result).toBeGreaterThanOrEqual(1)
  })

  it('Should return a valid results, with custom arguments', () => {
    const opt = { min: 2, max: 8 }
    const result = Random.powerOfTwo(opt)

    expect(result).toBeGreaterThanOrEqual(1)
    expect(result).toBeLessThanOrEqual(2 ** opt.max)
  })

  it('Should throw an error, for invalid arguments', () => {
    expect(() => {
      Random.powerOfTwo({ min: 'some invalid' })
    }).toThrow()
  })
})

describe('Test of Random.boolean', () => {
  it('Should return a valid results', () => {
    const result = Random.boolean()

    expect(result).toBeDefined()
  })

  it('Should return a valid results, with custom arguments', () => {
    const opt = { chance: 2 }
    const result = Random.boolean(opt)

    expect(result).toBeDefined()
  })

  it('Should throw an error, for invalid arguments', () => {
    expect(() => {
      Random.boolean({ chance: 'some invalid' })
    }).toThrow()
  })
})

describe('Test of Random.array', () => {
  it('Should return a valid results', () => {
    const result = Random.array()

    expect(result.length).toBeGreaterThanOrEqual(1)
    result.forEach(v => {
      expect(v).toBeGreaterThanOrEqual(0)
    })
  })

  it('Should return a valid results, with custom arguments', () => {
    const opt = { size: 10, value: 42 }
    const result = Random.array(opt)

    expect(result).toHaveLength(opt.size)
    result.forEach(v => {
      expect(v).toBe(opt.value)
    })
  })

  it('Should throw an error, for invalid arguments', () => {
    expect(() => {
      Random.array({ size: 'some invalid' })
    }).toThrow()
  })
})

// describe('Test Random.numbers()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.arrayElement()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.arrayValues()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.arrayUnicals()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.arrayShuffle()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.arrayIndex()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.objectKey()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.objectValue()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
// describe('Test Random.objectEntry()', () => {
// it('Should return a valid results', () => {

// it('Should return a valid results, with custom arguments', () => {

// it('Should throw an error, for invalid arguments', () => {

// })
