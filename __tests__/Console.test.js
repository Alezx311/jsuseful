const { Console } = require('../src')

describe('test of Console.transform', () => {
  it('Should transform values to console view', () => {
    const result = Console.transform([{ hello: 'hello' }, ['val'], 'sdsd', 123123])
    expect(result).toBeDefined()
  })
})
