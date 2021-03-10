const Random = require('./Random')
const { COLOR_NAMES, COLOR_CODES } = require('./Constants')

class Values {
  static color = () => Random.arrayElement(COLOR_CODES)
  static colorName = () => Random.arrayElement(COLOR_NAMES)
  static time = time => Date.now()
  static timeString = time => new Date(Date.now())
  static timeDifference = time => this.time() - time
  static timestamp = () => this.timeString().toLocaleTimeString()
  static datestamp = () => this.timeString().toISOString()
  static objClone = obj => Object.assign({}, obj)
  static objKeys = obj => Object.keys(obj)
  static objValues = obj => Object.values(obj)
  static objEntries = obj => Object.entries(obj)
  static mathExp = () =>
    Random.array(Random.number(3, 20))
      .map(v => `${Random.number()} ${'+-/*'[Random.number(0, 3)]}`)
      .join('') + Random.number()
  static calculate = exp => {
    const calc = new Function('', `return ${exp}`)
    const result = calc(calc)

    return result
  }
}

module.exports = Values
