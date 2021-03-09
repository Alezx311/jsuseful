const Random = require('./Random')
const { NOTES, SCALES, COLOR_NAMES, COLOR_CODES, DURATION_CHARS, INTERVAL_CHARS } = require('./Constants')

class Values {
  static musicNote = () => Random.arrayElement(NOTES)
  static musicScale = () => Random.arrayElement(SCALES)
  static musicDuration = () => `${Random.powerOfTwo(4)}${Random.arrayElement(DURATION_CHARS)}`
  static musicInterval = () => Random.arrayElement(INTERVAL_CHARS)
  static color = () => Random.arrayElement(COLOR_CODES)
  static colorName = () => Random.arrayElement(COLOR_NAMES)
  static time = time => new Date(Date.now())
  static timeDifference = time => this.time() - time
  static timestamp = () => this.time().toLocaleTimeString()
  static datestamp = () => this.time().toISOString()
  static objClone = obj => Object.assign({}, obj)
  static objKeys = obj => Object.keys(obj)
  static objValues = obj => Object.values(obj)
  static objEntries = obj => Object.entries(obj)
}

module.exports = Values
