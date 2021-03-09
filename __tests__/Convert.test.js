const { Convert } = require('../src')

describe('Test of Helpers.Convert.toString', () => {
  it('Should return string on objects', () => {
    expect(Convert.toString({ hello: 'world' }).length).toBeDefined()
  })
  it('Should return string on arrays', () => {
    expect(Convert.toString([1, 2, 3, 4]).length).toBeDefined()
  })
  it('Should return string on any data', () => {
    expect(Convert.toString('world').length).toBeDefined()
    expect(Convert.toString(1, 23, 4).length).toBeDefined()
    expect(Convert.toString(() => 'asdasd').length).toBeDefined()
    expect(Convert.toString({ hello: 'world' }, [1, 2, 3], () => 'Hi').length).toBeDefined()
  })
})
