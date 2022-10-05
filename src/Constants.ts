//! Constant Values for tests, examples, etc...

//?	<----- Primitive Values ----->
export const RND: number = Math.random()
export const STR: string = 'Some string value'
export const BLN: boolean = RND > 0.5
export const NUM: number = ~~(RND * 1000)
export const OBJ: object = { RND, STR, NUM }
export const UND: undefined = undefined
export const NUL: null = null
export const ARR: any[] = [RND, STR, NUM]
export const BIG: bigint = BigInt(9007199254740991)
export const SYM: symbol = Symbol('Example Symbol')
export const ERR: Error = new Error('Example Error')
export const FUN: (v?: any) => any = (v?: any) => ({ value: v, desc: 'Example function result' })

export const TYPEOF = ['string', 'number', 'function', 'object', 'boolean', 'bigint', 'symbol', 'undefined']

//?	<----- Values for using in Music Useful Functions ----->
export const MUSIC_NOTES_CHARS = ['A', 'B', 'C', 'D', 'F', 'E', 'G'] as const
export const MUSIC_NOTES_BEMOLE = [...MUSIC_NOTES_CHARS, 'Bb', 'Db', 'Fb', 'Gb', 'Ab'] as const
export const MUSIC_NOTES_SHARP = [...MUSIC_NOTES_CHARS, 'A#', 'C#', 'D#', 'E#', 'G#'] as const
export const MUSIC_DURATION_CHARS = ['n', 't', 'm', 'n'] as const
export const MUSIC_INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const
export const MUSIC_SCALES = [
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
] as const

//?	<----- Values for generate colors -----> as const
export const COLOR_CLASS = [
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
] as const
export const COLOR_NAMES = [
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
] as const
export const COLOR_CODES = [
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
] as const
