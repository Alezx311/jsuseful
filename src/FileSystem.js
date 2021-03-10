const fs = require('fs').promises
const path = require('path')

class FileSystem {
  static resolvedPath = p => path.resolve(__dirname, p)
  static readFile = async file => await fs.readFile(this.resolvedPath(file), { encoding: 'utf8' })
  static readDir = async dir => await fs.readdir(this.resolvedPath(dir), { encoding: 'utf8' })
  static write = async (file, data) => await fs.writeFile(this.resolvedPath(file), data)
  static append = async (file, data) => await fs.writeFile(this.resolvedPath(file), data)
}

module.exports = FileSystem
