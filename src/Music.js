const Random = require('./Random')
const { NOTES, NOTES_ALTERNATE, SCALES, DURATION_CHARS, INTERVAL_CHARS } = require('./Constants')

class Music {
  static noteChars({ type = 'b' }) {
    try {
      if (type === '#') {
        return NOTES_ALTERNATE
      } else {
        console.error(`Invalid note chars type, return notes with bemole notation`)
        return NOTES
      }
    } catch (err) {
      console.error(`Error on getting note chars`, err?.message ?? err)
    }
  }
  static noteParse(noteChar) {
    try {
      let [note, char, octave] = note.trim().match(/^([a-g#]+)(\d)$/i)
      return { note, char, octave }
    } catch (err) {
      console.error(`Invalid noteChar to parse values: ${noteChar}`, err?.message ?? err)
    }
  }
  static noteIndex(noteChar) {
    try {
      const note = noteChar.replace(/\d/gi, '')
      const index = NOTES[note]

      return index
    } catch (err) {
      console.error(`Invalid noteChar to find note index: ${noteChar}`, err?.message ?? err)
    }
  }
  static noteStep(noteChar, step = 1) {
    try {
      let { note, char, octave } = this.noteParse(noteChar)
      let noteIndex = this.noteIndex(char)
      let newIndex = noteIndex + step
      let maxIndex = NOTES.length

      if (newIndex === maxIndex) {
        octave = Number(octave) + 1
        newIndex = 0
      }
      if (newIndex > maxIndex) {
        octave = Number(octave) + Math.floor(newIndex / maxIndex)
        newIndex = newIndex % maxIndex
      }

      const result = NOTES[newIndex]

      return `${result}${octave}`
    } catch (err) {
      console.error(`Error on calculating ${steps} steps from note ${noteChar}`, err?.message ?? err)
    }
  }
  static noteSteps(noteChar, size = 24) {
    try {
      const notesArray = Array(size).fill(noteChar)
      const stepsArray = notesArray.map((note, index) => this.noteStep(note, index))

      return stepsArray
    } catch (err) {
      console.error(`Error on creating ${noteChar} note steps ${size} array`, err?.message ?? message)
    }
  }
}

module.exports = Music
