const fs = require("fs").promises;
const path = require("path");

class FileSystem {
  static resolvedPath(p) {
    return path.resolve(__dirname, p);
  }

  static async readFile(file) {
    return await fs.readFile(this.resolvedPath(file), { encoding: "utf8" });
  }

  static async readDir(dir) {
    return await fs.readdir(this.resolvedPath(dir), { encoding: "utf8" });
  }

  static async write(file, data) {
    return await fs.writeFile(this.resolvedPath(file), data);
  }

  static async append(file, data) {
    return await fs.writeFile(this.resolvedPath(file), data);
  }
}

module.exports = FileSystem;
