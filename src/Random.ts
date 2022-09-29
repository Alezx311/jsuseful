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
	tTypeOf,
	TYPEOF,
} from './constants'
import { isA } from './useful'
import { A, B, DeepA, Entry, N, O, S, Value } from './types'

//! <----- Constants for use as default arguments ----->
export const RANDOM_ARRAY_SIZE = 10
export const RANDOM_MIN = 0
export const RANDOM_MAX = 1000000
export const RANDOM_CONSTANTS_SOURCES = [
	{ desc: 'SIZE', value: RANDOM_ARRAY_SIZE },
	{ desc: 'MIN', value: RANDOM_MIN },
	{ desc: 'MAX', value: RANDOM_MAX },
]

//! <----- Random values for simple randomize results on each run ----->
export const RANDOM_NUM = Math.random()
export const RANDOM_BOOL = RANDOM_NUM > 0.5
export const RANDOM_INT = ~~(RANDOM_NUM * (RANDOM_MAX + RANDOM_MIN)) - RANDOM_MIN
export const RANDOM_STR = RANDOM_NUM.toString(36).substring(3)
export const RANDOM_SRC = { desc: 'Random Source', value: RANDOM_NUM }
export const RANDOM_ARR = [RANDOM_NUM, RANDOM_BOOL, RANDOM_INT, RANDOM_STR, RANDOM_SRC]
export const RANDOM_OBJ = {
	NUM: RANDOM_NUM,
	BOOL: RANDOM_BOOL,
	INT: RANDOM_INT,
	STR: RANDOM_STR,
	ARR: RANDOM_ARR,
	SRC: RANDOM_SRC,
}
export const RANDOM_TEXT = JSON.stringify(RANDOM_OBJ)
export const RANDOM_VALUES_SOURCES = [
	{ desc: 'NUM', value: RANDOM_NUM },
	{ desc: 'BOOL', value: RANDOM_BOOL },
	{ desc: 'INT', value: RANDOM_INT },
	{ desc: 'STR', value: RANDOM_STR },
	{ desc: 'SRC', value: RANDOM_SRC },
	{ desc: 'ARR', value: RANDOM_ARR },
	{ desc: 'OBJ', value: RANDOM_OBJ },
	{ desc: 'TEXT', value: RANDOM_TEXT },
]

//! <----- Simple methods to generate random values, can be used without arguments ----->
export const random = Math.random
export const randomBool = (chance: N = 0.5) => random() > chance
export const randomNum = (max: N = RANDOM_MAX, min: N = RANDOM_MIN) => random() * (max - min) + min
export const randomInt = (max: N = RANDOM_MAX, min: N = RANDOM_MIN) => ~~(random() * max - min) + min
export const randomCoin = (value1: any = true, value2: any = false) => (randomBool() ? value1 : value2)
export const randomStr = (input: N = RANDOM_NUM) => (input.toString(36) + randomNum().toString(36)).substring(3)
export const randomArr = (size: N = RANDOM_ARRAY_SIZE, value: any = RANDOM_NUM) => Array(size).fill(value)
export const randomMany = (size: N = RANDOM_ARRAY_SIZE, value: any = RANDOM_NUM) =>
	typeof value === 'function' ? randomArr(size).map(value) : randomArr(size, value)
export const randomIndex = (input: A | S = RANDOM_ARR) =>
	input?.length > 1 ? randomInt(input.length - 1) : input?.length
export const randomElement = (input: A | S = RANDOM_ARR) =>
	(input?.length > 0 ? input : [...`${input}`])?.[randomIndex(input)]
export const randomSort = (input: A = RANDOM_ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).sort(() => (randomBool() ? 1 : -1))
export const randomShuffle = (input: A = RANDOM_ARR) =>
	(input?.length > 0 ? input : [...`${input}`]).map(v => (randomBool() ? v : randomElement(input)))
export const randomSource = (input: any = RANDOM_NUM) => ({ ...RANDOM_SRC, value: randomStr(), input })
export const randomObject = (size: N = RANDOM_ARRAY_SIZE, input: any = RANDOM_ARR) =>
	Object.fromEntries(randomArr(size).map(() => [randomStr(), randomStr(input)]))
export const randomKey = (value: O = RANDOM_OBJ) => randomElement(Object.getOwnPropertyNames(value))
export const randomValue = (value: O = RANDOM_OBJ) => randomElement(Object.values(value))
export const randomEntry = (value: O = RANDOM_OBJ) => randomElement(Object.entries(value))
export const RANDOM_EXAMPLES_SOURCES = [
	{ desc: 'rnd', value: random(), func: random },
	{ desc: 'bool', value: randomBool(), func: randomBool },
	{ desc: 'num', value: randomNum(), func: randomNum },
	{ desc: 'int', value: randomInt(), func: randomInt },
	{ desc: 'coin', value: randomCoin(), func: randomCoin },
	{ desc: 'str', value: randomStr(), func: randomStr },
	{ desc: 'arr', value: randomArr(), func: randomArr },
	{ desc: 'many', value: randomMany(), func: randomMany },
	{ desc: 'ind', value: randomIndex(), func: randomIndex },
	{ desc: 'el', value: randomElement(), func: randomElement },
	{ desc: 'sort', value: randomSort(), func: randomSort },
	{ desc: 'shuffle', value: randomShuffle(), func: randomShuffle },
	{ desc: 'src', value: randomSource(), func: randomSource },
	{ desc: 'obj', value: randomObject(), func: randomObject },
	{ desc: 'key', value: randomKey(), func: randomKey },
	{ desc: 'value', value: randomValue(), func: randomValue },
	{ desc: 'entry', value: randomEntry(), func: randomEntry },
]

//? Generate array
export const genArr = (n: N, v: any = 1) => Array(n).fill(v)
//? Generate array with numbers from 1 to n
export const genNums = (n: N) => genArr(n).map((v, i) => v + i)
export const genSources = (n: N) => genArr(n).map((v, i) => ({ desc: 'genSources result', value: n, index: i }))

//? Generate random typeof result
export const randomTypeOf = () => randomElement(TYPEOF)

//? Generate random source object with desc, type and value
export const randomSourceByType = (type?: tTypeOf) => {
	if (!type) type = randomTypeOf()
	let value = undefined
	if (type === 'string') value = randomStr()
	if (type === 'object') value = randomObject()
	if (type === 'boolean') value = randomBool()
	if (type === 'bigint') value = randomNum(Number.MAX_SAFE_INTEGER)
	if (type === 'symbol') value = Symbol(randomStr())
	if (type === 'function') value = () => randomNum()
	if (type === 'number') value = randomNum()
	return { desc: `Random value with type "${type}"`, value, type }
}

//! <----- Music values ----->

export const randomMusicNoteChar = () => randomElement(MUSIC_NOTES_CHARS)
export const randomMusicNoteBemole = () => randomElement(MUSIC_NOTES_BEMOLE)
export const randomMusicNoteSharp = () => randomElement(MUSIC_NOTES_SHARP)
export const randomMusicScale = () => randomElement(MUSIC_SCALES)
export const randomMusicDurationChar = () => randomElement(MUSIC_DURATION_CHARS)
export const randomMusicIntervalChar = () => randomElement(MUSIC_INTERVAL_CHARS)
export const randomMusicOctave = () => randomInt(8)
export const randomMusicMidiIndex = () => randomInt(127)
export const randomMusicValues = () => ({
	noteChar: randomMusicNoteChar(),
	noteBemole: randomMusicNoteBemole(),
	noteSharp: randomMusicNoteSharp(),
	scale: randomMusicScale(),
	durationChar: randomMusicDurationChar(),
	intervalChar: randomMusicIntervalChar(),
	octave: randomMusicOctave(),
	midiIndex: randomMusicMidiIndex(),
})

export const randomColorClassname = () => randomElement(COLOR_CLASS)
export const randomColorName = () => randomElement(COLOR_NAMES)
export const randomColorCode = () => randomElement(COLOR_CODES)
export const randomColorValues = () => ({
	className: randomColorClassname(),
	name: randomColorName(),
	code: randomColorCode(),
})
//! <----- Other random and generate data methods ----->

//* Returns random range
export const float = (min: N = 0, max: N = 1, fixedSize: N): N => {
	const num = random() * (max - min) + min
	return Number(num.toFixed(fixedSize))
}

//* Random integer
export const number = (min: N = RANDOM_MIN, max: N = RANDOM_MAX): N => {
	return Math.floor(random() * (max - min) + min)
}

//* Returns random power of two
export const powerOfTwo = (min: N = RANDOM_MIN, max: N = 10): N => {
	return 2 ** number(min, max)
}

//* Returns random numbers arr
export const numbersDeep = (len: N = 10, maxDeep: N = 4): DeepA<N> => {
	return numbers(len, maxDeep).map(v => {
		return v > 1 ? numbers(v, maxDeep) : v
	})
}
//* Returns random values
export const values = (arr: A): A => array(10).map(v => arrayElement(arr))

//* Boolean with given chance
export const boolean = (chance: N = 50): B => {
	return number(1, 100) > chance
}

//* Returns random arr, can create element from given callback
export const array = (size: N = RANDOM_ARRAY_SIZE, cb: any = () => number()) => {
	const arr = Array(size).fill(1)
	return cb ? (typeof cb === 'function' ? arr.map(cb) : arr.map(() => cb)) : arr
}

//* Returns random numbers arr
export const numbers = (size: N = RANDOM_ARRAY_SIZE, min: N = RANDOM_MIN, max: N = RANDOM_MAX) => {
	const arr = Array(size).fill(1)
	return arr.map(() => number(min, max))
}

//* Return Random arrays
export const arrays = (size: N = 10, maxDeep: N = 5): DeepA<N> => {
	const arr = array(size).map(() => array(number(2, maxDeep)))
	return arr
}

//* Return Random arrayGrow
export const arrayGrow = (arr: A, growSize: N = 2): A => {
	const result = Array(growSize)
		.fill(1)
		.reduce(acc => [...acc, ...arr], [])
	return result
}

//* Return Random arraySequence
export const arraySequence = (start: N = 1, end: N = 100): A => {
	const arr = array(end).map((v, i) => start + i)
	return arr
}

//* Return Random arrayChange
export const arrayChange = (size: N = 10, arr: A): A => {
	const result = array(size).map(v => arrayShuffle(arr))
	return arrayElement(result)
}

//* Return Random arrayMerge
export const arrayMerge = (...arr: A): A => {
	const total = arr.reduce((acc, el) => [...acc, ...el], [])
	return [...new Set(total)]
}

//* Return Random arrayDouble
export const arrayDouble = (arr: A): A => [...arr, ...arr]

//* Return Random arrayRepeats
export const arrayRepeats = (arr: A, repeats: N = 2): A =>
	Array(repeats)
		.fill(arr)
		.reduce((acc, el) => [...acc, ...el], [])

//* Random index from given arr
export const arrayIndex = (arr: A): N => {
	const endIndex = ~~arr?.length - 1
	return endIndex > 0 ? number(0, endIndex) : 0
}

//* Random Element from given arr
export const arrayElement = (arr: A): O => {
	return arr?.[arrayIndex(arr)] ?? null
}

//* Array of random elements from given arr... GENIUS BLYAT
export const arrayElements = (arr: A, size: N = 3): A => {
	return array(size, () => arrayElement(arr))
}

//* Only unical values
export const arrayUnicals = (arr: A): A => {
	return [...new Set([...arr])]
}

//* Shuffle elements
export const arrayShuffle = (arr: A): A => {
	if (!arr?.length) {
		return []
	}

	return arr.sort(() => random() - 0.5)
}

//* Random part of arr
export const arrayPart = (arr: A): A => {
	if (!arr?.length) return []
	if (~~arr?.length < 3) return [arr[0]]

	const startIndex = number(0, arr?.length - 2)
	const endIndex = number(startIndex, arr?.length - 1)

	return arr.slice(startIndex, endIndex)
}

//* Transform random values of arr to another arr
export const arrayDeepSomeValues = (arr: A, chance?: N): DeepA<A> => {
	return arr.reduce((acc, v) => {
		if (boolean(chance)) {
			return [...acc, [v, v]]
		} else {
			return [...acc, v]
		}
	}, [])
}

//* Return random string, created from given strings arr
export const joinedStrings = (parts: S[], size?: N): S => {
	const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''))
	return arrayElements(filtered, size).join('')
}

//* Returns random objectKey
export const objectKey = (obj: O = {}): S => {
	const arr = Object.keys(obj)
	return isA(arr) && arrayElement(arr)
}

//* Returns random objectValue
export const objectValue = (obj: O = {}): Value => {
	const arr = Object.values(obj)
	return isA(arr) && arrayElement(arr)
}

//* Returns random objectEntry
export const objectEntry = (obj: O = {}): Entry => {
	const arr = Object.entries(obj)
	return isA(arr) && arrayElement(arr)
}
