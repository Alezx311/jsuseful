const { FileSystem } = require('../src')

describe('Test FileSystem.resolvedPath()', () => {
  it('Should return resolvedPath', () => {
    const result = FileSystem.resolvedPath('./')

    expect(result).toBeTruthy()
  })
})
describe('Test FileSystem.readFile()', () => {
  it('Should return readFile', async () => {
    const result = await FileSystem.readFile('../README.md')

    expect(result).toBeTruthy()
  })
})
describe('Test FileSystem.readDir()', () => {
  it('Should return readDir', async () => {
    const result = await FileSystem.readDir('./')

    expect(result).toBeTruthy()
  })
})
describe('Test FileSystem.write()', () => {
  it('Should return write', async () => {
    const result = await FileSystem.write('./test.txt', 'Test')
    const content = await FileSystem.readFile('./test.txt')

    expect(content).toEqual('Test')
  })
})
describe('Test FileSystem.append()', () => {
  it('Should return append', async () => {
    const result = await FileSystem.append('./test.txt', 'Append Test')
    const content = await FileSystem.readFile('./test.txt')

    expect(content).toEqual('Append Test')
  })
})
