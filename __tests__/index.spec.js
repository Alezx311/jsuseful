const JsUseful = require('../lib/cjs/src')

describe('Index Module Test', () => {
  it('Should return Check module', () => {
    expect(JsUseful.Check).toBeDefined()
  })

  it('Should return Random module', () => {
    expect(JsUseful.Random).toBeDefined()
  })

  it('Should return Values module', () => {
    expect(JsUseful.Values).toBeDefined()
  })

  it('Should return Constants module', () => {
    expect(JsUseful.Constants).toBeDefined()
  })
})
