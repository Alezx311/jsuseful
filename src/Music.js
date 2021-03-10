const Random = require('./Random')
const { NOTES, NOTES_ALTERNATE, SCALES, DURATION_CHARS, INTERVAL_CHARS } = require('./Constants')

class Music {
  static noteChar = (alt = false) => Random.arrayElement(alt ? NOTES_ALTERNATE : NOTES)
  static octave = (min = 2, max = 4) => Random.number(min, max)
  static note = (octave = this.octave()) => `${this.noteChar()}${octave}`
  static notes = (size = 10, octave) => Random.array(size, v => this.note(octave))
  static scale = () => Random.arrayElement(SCALES)
  static durationChar = () => Random.arrayElement(DURATION_CHARS)
  static duration = () => `${this.durationChar()}${Random.powerOfTwo(4)}`
  static interval = () => Random.arrayElement(INTERVAL_CHARS)
  static velocity = () => 1 - Random.range() / 3
  static noteValues = noteChar => ({ noteChar, duration: this.duration(), velocity: this.velocity() })
}

module.exports = Music
