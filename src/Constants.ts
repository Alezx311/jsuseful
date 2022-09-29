//! Constant Values for tests, examples, etc...

import { N } from './types'

//?	<----- Primitive Values ----->
export const STR = 'Some string value'
export const RND = Math.random()
export const BLN = RND > 0.5
export const NUM = ~~(RND * 1000)
export const ARR = [STR, NUM]
export const OBJ = { STR, NUM }

export const ERR = new Error('Example Error')
export const BIG = Number.MAX_SAFE_INTEGER
export const FUNC = Math.random

//?	<----- Values for using in Music Useful Functions ----->
const PRIVATE_MUSIC_NOTES_CHARS = ['A', 'B', 'C', 'D', 'F', 'E', 'G'] as const
const PRIVATE_MUSIC_NOTES_BEMOLE = [...PRIVATE_MUSIC_NOTES_CHARS, 'Bb', 'Db', 'Fb', 'Gb', 'Ab'] as const
const PRIVATE_MUSIC_NOTES_SHARP = [...PRIVATE_MUSIC_NOTES_CHARS, 'A#', 'C#', 'D#', 'E#', 'G#'] as const
const PRIVATE_MUSIC_DURATION_CHARS = ['n', 't', 'm', 'n'] as const
const PRIVATE_MUSIC_INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const
const PRIVATE_MUSIC_SCALES = [
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
const PRIVATE_COLOR_CLASS = [
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
const PRIVATE_COLOR_NAMES = [
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
const PRIVATE_COLOR_CODES = [
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
const PRIVATE_TYPEOF = ['string', 'number', 'function', 'object', 'boolean', 'bigint', 'symbol', 'undefined']

//?	<----- Duplicate for create element types from readonly original arrays  ----->
export const TYPEOF = [...PRIVATE_TYPEOF]
export const MUSIC_NOTES_CHARS = [...PRIVATE_MUSIC_NOTES_CHARS]
export const MUSIC_NOTES_BEMOLE = [...PRIVATE_MUSIC_NOTES_BEMOLE]
export const MUSIC_NOTES_SHARP = [...PRIVATE_MUSIC_NOTES_SHARP]
export const MUSIC_DURATION_CHARS = [...PRIVATE_MUSIC_DURATION_CHARS]
export const MUSIC_INTERVAL_CHARS = [...PRIVATE_MUSIC_INTERVAL_CHARS]
export const MUSIC_SCALES = [...PRIVATE_MUSIC_SCALES]
export const COLOR_CLASS = [...PRIVATE_COLOR_CLASS]
export const COLOR_NAMES = [...PRIVATE_COLOR_NAMES]
export const COLOR_CODES = [...PRIVATE_COLOR_CODES]

//?	<----- Element types from readonly original arrays  ----->
export type tTypeOf = typeof PRIVATE_TYPEOF[N]
export type tMusicNoteChar = typeof PRIVATE_MUSIC_NOTES_CHARS[N]
export type tMusicNoteBemole = typeof PRIVATE_MUSIC_NOTES_BEMOLE[N]
export type tMusicNoteSharp = typeof PRIVATE_MUSIC_NOTES_SHARP[N]
export type tMusicScale = typeof PRIVATE_MUSIC_DURATION_CHARS[N]
export type tMusicDuration = typeof PRIVATE_MUSIC_INTERVAL_CHARS[N]
export type tMusicInterval = typeof PRIVATE_MUSIC_SCALES[N]
export type tColorClass = typeof PRIVATE_COLOR_CLASS[N]
export type tColorName = typeof PRIVATE_COLOR_NAMES[N]
export type tColorCode = typeof PRIVATE_COLOR_CODES[N]
