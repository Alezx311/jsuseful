const Random = require('./Random')
const { NOTES, SCALES, COLOR_NAMES, COLOR_CODES, DURATION_CHARS, INTERVAL_CHARS } = require('./Constants')

class Values {
  static musicNote = () => Random.arrayElement(NOTES)
  static musicScale = () => Random.arrayElement(SCALES)
  static musicDuration = () => `${Random.powerOfTwo(4)}${Random.arrayElement(DURATION_CHARS)}`
  static musicInterval = () => Random.arrayElement(INTERVAL_CHARS)
  static color = () => Random.arrayElement(COLOR_CODES)
  static colorName = () => Random.arrayElement(COLOR_NAMES)
  static date = () => new Date(Date.now()).toISOString()
  static time = () => new Date(Date.now()).toLocaleTimeString()
  static replaceByDictionary = ({ source, dictionary }) => {
    if (!source || !dictionary) {
      throw new Error(`source and dictionary is required`)
    }

    const words = Object.keys(dictionary)
      .map(v => `\\b${v}\\b`)
      .join('|')

    const regexp = new RegExp(words, 'gi')
    const regFunc = word => `${dictionary?.[word] ?? word}`

    const result = `${source}`.replace(regexp, regFunc)

    return result
  }
}

module.exports = Values
