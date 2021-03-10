const fs = require('fs').promises
const path = require('path')

class FileSystem {
  static resolvedPath(p) {
    const data = path.resolve(__dirname, p)
    return data
  }
  static async readFile(file) {
    const dataPath = this.resolvedPath(file)
    const data = await fs.readFile(dataPath, { encoding: 'utf8' })
    return data
  }
  static async readDir(dir) {
    const dataPath = this.resolvedPath(dir)
    const data = await fs.readdir(dataPath, { encoding: 'utf8' })
    return data
  }
  static async write(file, content) {
    const dataPath = this.resolvedPath(file)
    const data = await fs.writeFile(dataPath, content)
    return data
  }
  static async append(file, content) {
    const dataPath = this.resolvedPath(file)
    const data = await fs.writeFile(dataPath, content)
    return data
  }
}

module.exports = FileSystem
