const { Values } = require('../lib/cjs/src')

describe('JsUseful.Values module tests', () => {
  it('Should return timeValue', () => {
    expect(Values.timeValue()).toBeGreaterThan(Date.now() - 1000)
    expect(Values.timeValue()).toBeLessThan(Date.now() + 1000)
  })
})

describe('JsUseful.Values module tests', () => {
  it('Should return timeStamp', () => {
    expect(Values.timeStamp()).toBeTruthy()
  })
})

describe('JsUseful.Values module tests', () => {
  it('Should return dateStamp', () => {
    expect(Values.dateStamp()).toBeTruthy()
  })
})

describe('JsUseful.Values module tests', () => {
  it('Should return timeDifference', () => {
    expect(Values.timeDifference(Date.now() - 2000)).toBeTruthy()
  })
})

describe('JsUseful.Values module tests', () => {
  it('Should return calcExp', () => {
    expect(Values.calcExp('2+2*2')).toBe(6)
  })
})
