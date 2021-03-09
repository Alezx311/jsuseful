class Check {
  static array = arr => !!(Array.isArray(arr) && arr.length)
  static object = obj => !!(typeof obj === 'object' && Object.assign({}, obj, { ...obj }))
  static all = (v, ...rest) => !!([v, ...rest].length && [v, ...rest].length === [v, ...rest].filter(Boolean).length)
  static number = num => typeof num === 'number'
}

class Random {
  static range = () => Math.random()

  static number = (min = 1, max = 10) => Math.floor(Math.random() * (max - min) + this.range()) + min

  static boolean = (chance = 50) => Check.number(chance) && this.number(1, 100) > chance

  static array = (size = 10, value = 1) => Check.all(size, value) && Array(size).fill(value)

  static numbers = (size = 10, min = 1, max = 100) =>
    Check.all(size, min, max) && this.array(size).map(() => this.number(min, max))

  static arrayValues = (arr, size = 10) => Check.array(arr) && this.array(size).map(() => this.arrayElement(arr))

  static arraySequence = (start = 1, size = 10) => Check.all(start, size) && this.array(size).map((v, i) => start + i)

  static arrayUnicals = arr => Check.array(arr) && [...new Set([...arr])]

  static arrayShuffle = arr => Check.array(arr) && arr.sort(() => this.range() - 0.5)

  static arrayIndex = arr => Check.array(arr) && this.number(0, arr.length - 1)

  static arrayElement = arr => Check.array(arr) && arr[this.arrayIndex(arr)]

  static objectKey = obj => this.arrayElement(Object.keys(obj))

  static objectValue = obj => this.arrayElement(Object.values(obj))

  static objectEntry = obj => this.arrayElement(Object.entries(obj))
}

module.exports = { Random, Check }
