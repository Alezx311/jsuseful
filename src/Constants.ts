//! Constant Values for using in generate values, validate, etc...

import { A, S } from './types'

//* Values for using in Music Useful Functions
export const NOTES: A<S> = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Fb', 'F', 'E', 'Gb', 'G', 'Ab']

//* Values for using in Music Useful Functions
export const NOTES_ALTERNATE: A<S> = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#']

//* Values for using in Music Useful Functions
export const SCALES: A<S> = [
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
	'wholetone',
]

//* Values for using in Music Useful Functions
export const COLOR_CLASSNAMES: A<S> = [
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
	'transparent',
]

//* Values for using in Music Useful Functions
export const COLOR_NAMES: A<S> = [
	'blue',
	'indigo',
	'purple',
	'pink',
	'red',
	'orange',
	'yellow',
	'green',
	'teal',
	'cyan',
]

//* Values for using in Music Useful Functions
export const COLOR_CODES: A<S> = [
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
	'#ff00fd',
]

//* Values for using in Music Useful Functions
export const DURATION_CHARS: A<S> = ['n', 't', 'm', 'n']

//* Values for using in Music Useful Functions
export const INTERVAL_CHARS: A<S> = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

export const Constants = {
	NOTES,
	NOTES_ALTERNATE,
	SCALES,
	COLOR_CLASSNAMES,
	COLOR_NAMES,
	COLOR_CODES,
	DURATION_CHARS,
	INTERVAL_CHARS,
}

export const ConstantValues = {
	...Constants,
	Notes: NOTES,
	NotesAlternate: NOTES_ALTERNATE,
	Scales: SCALES,
	ColorClassnames: COLOR_CLASSNAMES,
	ColorNames: COLOR_NAMES,
	ColorCodes: COLOR_CODES,
	DurationChars: DURATION_CHARS,
	IntervalChars: INTERVAL_CHARS,
}

// For module exporting
export default ConstantValues
