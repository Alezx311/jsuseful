//! Constant Values for using in generate values, validate, etc...
const NOTES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Fb', 'F', 'E', 'Gb', 'G', 'Ab']
const NOTES_ALTERNATE = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#']
const SCALES = [
  'major',
  'minor',
  'ionian',
  'dorian',
  'phrygian',
  'lydian',
  'mixolydian',
  'aeolian',
  'locrian',
  'majorpentatonic',
  'minorpentatonic',
  'chromatic',
  'harmonicchromatic',
  'blues',
  'doubleharmonic',
  'flamenco',
  'harmonicminor',
  'melodicminor',
  'wholetone'
]
const COLOR_CLASSNAMES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'body',
  'white',
  'transparent'
]
const COLOR_NAMES = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan']
const COLOR_CODES = [
  '#ff0000',
  '#ff4e00',
  '#db7b00',
  '#ffcc00',
  '#e4ed00',
  '#81d700',
  '#00ffb4',
  '#00ffea',
  '#00baff',
  '#3c00ff',
  '#a800ff',
  '#ff00fd'
]
const DURATION_CHARS = ['n', 't', 'm', 'n']
const INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

module.exports = {
  NOTES,
  NOTES_ALTERNATE,
  SCALES,
  COLOR_CLASSNAMES,
  COLOR_NAMES,
  COLOR_CODES,
  DURATION_CHARS,
  INTERVAL_CHARS
}
