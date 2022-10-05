import {
	COLOR_CLASS,
	COLOR_CODES,
	COLOR_NAMES,
	MUSIC_DURATION_CHARS,
	MUSIC_INTERVAL_CHARS,
	MUSIC_NOTES_BEMOLE,
	MUSIC_NOTES_CHARS,
	MUSIC_NOTES_SHARP,
	MUSIC_SCALES,
	TYPEOF,
} from './constants'
import { A, BIG, F, N, NO, O, S, SYM } from './types'

export type tCOLOR_CLASS = typeof COLOR_CLASS[N]
export type tCOLOR_CODES = typeof COLOR_CODES[N]
export type tCOLOR_NAMES = typeof COLOR_NAMES[N]
export type tMUSIC_DURATION_CHARS = typeof MUSIC_DURATION_CHARS[N]
export type tMUSIC_INTERVAL_CHARS = typeof MUSIC_INTERVAL_CHARS[N]
export type tMUSIC_NOTES_BEMOLE = typeof MUSIC_NOTES_BEMOLE[N]
export type tMUSIC_NOTES_CHARS = typeof MUSIC_NOTES_CHARS[N]
export type tMUSIC_NOTES_SHARP = typeof MUSIC_NOTES_SHARP[N]
export type tMUSIC_SCALES = typeof MUSIC_SCALES[N]
export type tTYPEOF = typeof TYPEOF[N]

const ARRAY_COLOR_CLASS = [...COLOR_CLASS]
const ARRAY_COLOR_CODES = [...COLOR_CODES]
const ARRAY_COLOR_NAMES = [...COLOR_NAMES]
const ARRAY_MUSIC_DURATION_CHARS = [...MUSIC_DURATION_CHARS]
const ARRAY_MUSIC_INTERVAL_CHARS = [...MUSIC_INTERVAL_CHARS]
const ARRAY_MUSIC_NOTES_BEMOLE = [...MUSIC_NOTES_BEMOLE]
const ARRAY_MUSIC_NOTES_CHARS = [...MUSIC_NOTES_CHARS]
const ARRAY_MUSIC_NOTES_SHARP = [...MUSIC_NOTES_SHARP]
const ARRAY_MUSIC_SCALES = [...MUSIC_SCALES]
const ARRAY_TYPEOF = [...TYPEOF]

//! <----- Constants for use as default arguments ----->
const SIZE = 10
const MIN = 0
const MAX = 1000000

//! <----- rand values for simple randize results on each run ----->
const NUM = Math.random()
const BOOL = NUM > 0.5
const INT = ~~(NUM * (MAX + MIN)) - MIN
const STR = NUM.toString(36).substring(3)
const SRC = { desc: 'rand Source', value: NUM }
const ARR = [NUM, BOOL, INT, STR, SRC]
const OBJ = {
	NUM: NUM,
	BOOL: BOOL,
	INT: INT,
	STR: STR,
	ARR: ARR,
	SRC: SRC,
}

//! <----- Simple methods to generate rand values, can be used without arguments ----->
export const rand = Math.random
export const randNum = (max: N = MAX, min: N = MIN) => rand() * (max - min) + min
export const randInt = (max: N = MAX, min: N = MIN) => ~~(rand() * max - min) + min
export const randBool = (chance: N = 0.5) => rand() > chance
export const randCoin = (value1: any = true, value2: any = false) => (randBool() ? value1 : value2)
export const randStr = (input: N = NUM) => (input.toString(36) + randNum().toString(36)).substring(3)
export const randArr = (size: N = SIZE, value: any = NUM) => Array(size).fill(value)
export const randMany = (size: N = SIZE, value: any = NUM) =>
	typeof value === 'function' ? randArr(size).map(value) : randArr(size, value)
export const randIndex = (input: A | S = ARR) => (input?.length > 1 ? randInt(input.length - 1) : input?.length)
export const randElement = (input: A | S = ARR) => (input?.length > 0 ? input : [...`${input}`])?.[randIndex(input)]
export const randSort = (input: A = ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).sort(() => (randBool() ? 1 : -1))
export const randShuffle = (input: A = ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).map(v => (randBool() ? v : randElement(input)))
export const randSource = (input: any = NUM) => ({ ...SRC, value: randStr(), input })
export const randObj = () => Object({ value: randStr() })
export const randKey = (value: O = OBJ) => randElement(Object.getOwnPropertyNames(value))
export const randValue = (value: O = OBJ) => randElement(Object.values(value))
export const randEntry = (value: O = OBJ) => randElement(Object.entries(value))
export const randBig = (): BIG => BigInt(randInt(Number.MAX_SAFE_INTEGER))
export const randSym = (): SYM => Symbol(randStr())
export const randFunc = (): F<NO, N> => rand

//! <----- Primitive type generators ----->

//! <----- Simple methods to generate rand elements ----->
export const randTypeOf = () => randElement(ARRAY_TYPEOF)
export const randColorClass = () => randElement(ARRAY_COLOR_CLASS)
export const randColorCode = () => randElement(ARRAY_COLOR_CODES)
export const randColorName = () => randElement(ARRAY_COLOR_NAMES)
export const randMusicDuration = () => randElement(ARRAY_MUSIC_DURATION_CHARS)
export const randMusicInterval = () => randElement(ARRAY_MUSIC_INTERVAL_CHARS)
export const randMusicNoteBemole = () => randElement(ARRAY_MUSIC_NOTES_BEMOLE)
export const randMusicNoteChar = () => randElement(ARRAY_MUSIC_NOTES_CHARS)
export const randMusicNoteSharp = () => randElement(ARRAY_MUSIC_NOTES_SHARP)
export const randMusicScale = () => randElement(ARRAY_MUSIC_SCALES)
export const randMusicOctave = (max: N = 8) => randInt(max)
export const randMusicMidiIndex = (max: N = 127) => randInt(max)
