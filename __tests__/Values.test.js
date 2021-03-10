const { Values } = require('../src')

const ARR = [1, 2, 3, 1]
const OBJ = { words: 'some words', arr: ARR }

describe('Test Values.color()', () => {
  it('Should return color', () => {
    expect(Values.color()).toBeTruthy()
  })
})
describe('Test Values.colorName()', () => {
  it('Should return colorName', () => {
    expect(Values.colorName()).toBeTruthy()
  })
})
describe('Test Values.time()', () => {
  it('Should return time', () => {
    expect(Values.time()).toBeTruthy()
  })
})
describe('Test Values.timeString()', () => {
  it('Should return timeString', () => {
    expect(Values.timeString()).toBeTruthy()
  })
})
describe('Test Values.timeDifference()', () => {
  it('Should return timeDifference', () => {
    expect(Values.timeDifference(Values.time() - 300)).toBeTruthy()
  })
})
describe('Test Values.timestamp()', () => {
  it('Should return timestamp', () => {
    expect(Values.timestamp()).toBeTruthy()
  })
})
describe('Test Values.datestamp()', () => {
  it('Should return datestamp', () => {
    expect(Values.datestamp()).toBeTruthy()
  })
})
describe('Test Values.objClone()', () => {
  it('Should return objClone', () => {
    expect(Values.objClone(OBJ)).toBeTruthy()
  })
})
describe('Test Values.objKeys()', () => {
  it('Should return objKeys', () => {
    expect(Values.objKeys(OBJ)).toBeTruthy()
  })
})
describe('Test Values.objValues()', () => {
  it('Should return objValues', () => {
    expect(Values.objValues(OBJ)).toBeTruthy()
  })
})
describe('Test Values.objEntries()', () => {
  it('Should return objEntries', () => {
    expect(Values.objEntries(OBJ)).toBeTruthy()
  })
})
