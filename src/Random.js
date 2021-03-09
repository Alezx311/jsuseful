class Random {
  static range = () => Math.random()
  static number = (min = 1, max = 10) => Math.floor(Math.random() * (max - min) + this.range()) + min
  static powerOfTwo = (max = 10) => 2 ** this.number(1, max)
  static boolean = (chance = 50) => this.number(1, 100) > chance
  static array = (size = 10, value = 1) => Array(size).fill(value)
  static numbers = (size = 10, min = 1, max = 100) => this.array(size).map(() => this.number(min, max))
  static arrayValues = (arr, size = 10) => this.array(size).map(() => this.arrayElement(arr))
  static arraySequence = (start = 1, size = 10) => this.array(size).map((v, i) => start + i)
  static arrayUnicals = arr => [...new Set([...arr])]
  static arrayShuffle = arr => arr.sort(() => this.range() - 0.5)
  static arrayIndex = arr => this.number(0, arr.length - 1)
  static arrayElement = arr => arr[this.arrayIndex(arr)]
  static objectKey = obj => this.arrayElement(Object.keys(obj))
  static objectValue = obj => this.arrayElement(Object.values(obj))
  static objectEntry = obj => this.arrayElement(Object.entries(obj))
}

module.exports = Random
