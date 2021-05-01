const { Constants } = require('../lib/cjs/src')

describe('JsUseful.Constants module tests', () => {
  it('Should return Constants', () => {
    expect(Constants).toBeDefined()
    expect(Constants.NOTES).toBeDefined()
    expect(Constants.NOTES_ALTERNATE).toBeDefined()
    expect(Constants.SCALES).toBeDefined()
    expect(Constants.COLOR_CLASSNAMES).toBeDefined()
    expect(Constants.COLOR_NAMES).toBeDefined()
    expect(Constants.COLOR_CODES).toBeDefined()
    expect(Constants.DURATION_CHARS).toBeDefined()
    expect(Constants.INTERVAL_CHARS).toBeDefined()
  })

  it('Should return NOTES', () => {
    expect(Constants.NOTES).toBeDefined()
  })

  it('Should return NOTES_ALTERNATE', () => {
    expect(Constants.NOTES_ALTERNATE).toBeDefined()
  })

  it('Should return SCALES', () => {
    expect(Constants.SCALES).toBeDefined()
  })

  it('Should return COLOR_CLASSNAMES', () => {
    expect(Constants.COLOR_CLASSNAMES).toBeDefined()
  })

  it('Should return COLOR_NAMES', () => {
    expect(Constants.COLOR_NAMES).toBeDefined()
  })

  it('Should return COLOR_CODES', () => {
    expect(Constants.COLOR_CODES).toBeDefined()
  })

  it('Should return DURATION_CHARS', () => {
    expect(Constants.DURATION_CHARS).toBeDefined()
  })

  it('Should return INTERVAL_CHARS', () => {
    expect(Constants.INTERVAL_CHARS).toBeDefined()
  })
})
