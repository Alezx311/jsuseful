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
import { A, B, DeepA, N, O, S } from './types'

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

//! <----- Random values for simple randomize results on each run ----->
const NUM = Math.random()
const BOOL = NUM > 0.5
const INT = ~~(NUM * (MAX + MIN)) - MIN
const STR = NUM.toString(36).substring(3)
const SRC = { desc: 'Random Source', value: NUM }
const ARR = [NUM, BOOL, INT, STR, SRC]
const OBJ = {
	NUM: NUM,
	BOOL: BOOL,
	INT: INT,
	STR: STR,
	ARR: ARR,
	SRC: SRC,
}

//! <----- Simple methods to generate random values, can be used without arguments ----->
export const random = Math.random
export const randomNum = (max: N = MAX, min: N = MIN) => random() * (max - min) + min
export const randomInt = (max: N = MAX, min: N = MIN) => ~~(random() * max - min) + min
export const randomBool = (chance: N = 0.5) => random() > chance
export const randomCoin = (value1: any = true, value2: any = false) => (randomBool() ? value1 : value2)
export const randomStr = (input: N = NUM) => (input.toString(36) + randomNum().toString(36)).substring(3)
export const randomArr = (size: N = SIZE, value: any = NUM) => Array(size).fill(value)
export const randomMany = (size: N = SIZE, value: any = NUM) =>
	typeof value === 'function' ? randomArr(size).map(value) : randomArr(size, value)
export const randomIndex = (input: A | S = ARR) => (input?.length > 1 ? randomInt(input.length - 1) : input?.length)
export const randomElement = (input: A | S = ARR) => (input?.length > 0 ? input : [...`${input}`])?.[randomIndex(input)]
export const randomSort = (input: A = ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).sort(() => (randomBool() ? 1 : -1))
export const randomShuffle = (input: A = ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).map(v => (randomBool() ? v : randomElement(input)))
export const randomSource = (input: any = NUM) => ({ ...SRC, value: randomStr(), input })
export const randomObject = (size: N = SIZE, input: any = ARR) =>
	Object.fromEntries(randomArr(size).map(() => [randomStr(), randomStr(input)]))
export const randomKey = (value: O = OBJ) => randomElement(Object.getOwnPropertyNames(value))
export const randomValue = (value: O = OBJ) => randomElement(Object.values(value))
export const randomEntry = (value: O = OBJ) => randomElement(Object.entries(value))

//! <----- Simple methods to generate random elements ----->
export const randomTypeOf = () => randomElement(ARRAY_TYPEOF)
export const randomColorClass = () => randomElement(ARRAY_COLOR_CLASS)
export const randomColorCode = () => randomElement(ARRAY_COLOR_CODES)
export const randomColorName = () => randomElement(ARRAY_COLOR_NAMES)
export const randomMusicDuration = () => randomElement(ARRAY_MUSIC_DURATION_CHARS)
export const randomMusicInterval = () => randomElement(ARRAY_MUSIC_INTERVAL_CHARS)
export const randomMusicNoteBemole = () => randomElement(ARRAY_MUSIC_NOTES_BEMOLE)
export const randomMusicNoteChar = () => randomElement(ARRAY_MUSIC_NOTES_CHARS)
export const randomMusicNoteSharp = () => randomElement(ARRAY_MUSIC_NOTES_SHARP)
export const randomMusicScale = () => randomElement(ARRAY_MUSIC_SCALES)
export const randomMusicOctave = (max: N = 8) => randomInt(max)
export const randomMusicMidiIndex = (max: N = 127) => randomInt(max)
