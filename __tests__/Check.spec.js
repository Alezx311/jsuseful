const { Check } = require('../lib/cjs/src')

describe('Check Module Test', () => {
  it('Should return Check.number', () => {
    expect(Check.number(123)).toBe(true)
  })
  it('Should return Check.string', () => {
    expect(Check.string('123')).toBe(true)
  })
  it('Should return Check.array', () => {
    expect(Check.array([1, 2, 3, 4, 5])).toBe(true)
  })
  it('Should return Check.truthy', () => {
    expect(Check.truthy(123)).toBe(true)
  })
})


