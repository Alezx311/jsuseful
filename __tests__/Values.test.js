const { Values } = require('../src')

// musicNote
describe('Test Values.musicNote', () => {
  it('Should return musicNote value', () => {
    expect(Values.musicNote()).toBeTruthy()
  })
})
// musicScale
describe('Test Values.musicScale', () => {
  it('Should return musicScale value', () => {
    expect(Values.musicScale()).toBeTruthy()
  })
})
// musicDuration
describe('Test Values.musicDuration', () => {
  it('Should return musicDuration value', () => {
    expect(Values.musicDuration()).toBeTruthy()
  })
})
// musicInterval
describe('Test Values.musicInterval', () => {
  it('Should return musicInterval value', () => {
    expect(Values.musicInterval()).toBeTruthy()
  })
})
// color
describe('Test Values.color', () => {
  it('Should return color value', () => {
    expect(Values.color()).toBeTruthy()
  })
})
// colorName
describe('Test Values.colorName', () => {
  it('Should return colorName value', () => {
    expect(Values.colorName()).toBeTruthy()
  })
})
// date
describe('Test Values.date', () => {
  it('Should return date value', () => {
    expect(Values.date()).toBeTruthy()
  })
})
// text
describe('Should return text with replaced words', () => {
  it('small text', () => {
    const source = `Hello, its simple text`
    const dictionary = { Hello: 'Goodbye', simple: 'replaced', text: 'words' }
    const result = Values.replaceByDictionary({ source, dictionary })

    expect(result).toEqual('Goodbye, its replaced words')
  })
  it('large text', () => {
    const source = `Hello, its simple text `.repeat(100)
    const expected = 'Goodbye, its replaced words '.repeat(100)
    const dictionary = { Hello: 'Goodbye', simple: 'replaced', text: 'words' }
    const result = Values.replaceByDictionary({ source, dictionary })

    expect(result).toEqual(expected)
  })
  it('small code', () => {
    const source = `const range = () => Math.range()`
    const expected = `короч range = () => ботан.range()`
    const dictionary = { const: `короч`, Math: `ботан` }
    const result = Values.replaceByDictionary({ source, dictionary })

    expect(result).toEqual(expected)
  })
})
