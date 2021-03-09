const { Validate } = require('../src')

// array
describe('Test Validate.array', () => {
  it('Should return true on valid array', () => {
    expect(Validate.array(['asdasd'])).toBe(true)
  })
})
// object
describe('Test Validate.object', () => {
  it('Should return true on valid object', () => {
    expect(Validate.object({ word: 'asdasd' })).toBe(true)
  })
})
// number
describe('Test Validate.number', () => {
  it('Should return true on valid number', () => {
    expect(Validate.number(123)).toBe(true)
  })
})
// string
describe('Test Validate.string', () => {
  it('Should return true on valid string', () => {
    expect(Validate.string('asdasd')).toBe(true)
  })
})
// func
describe('Test Validate.func', () => {
  it('Should return true on valid func', () => {
    expect(Validate.func(() => 'asdasd')).toBe(true)
  })
})
// isLength
describe('Test Validate.isLength', () => {
  it('Should return true on valid isLength', () => {
    expect(Validate.isLength('asdasd')).toBe(true)
  })
})
// all
describe('Test Validate.all', () => {
  it('Should return true on valid all', () => {
    expect(Validate.all('asdasd', 12, [1, 1, 2])).toBe(true)
  })
})
