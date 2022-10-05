import { A, N, R, S } from './types'

const uniq = (arr: A) => [...new Set([...arr])]

//? <----- Validate string and collect errors ----->
export const validate = (value: any, min: N = 1, max: N = 10000) => {
	const errors = []
	if (!value) {
		errors.push(new TypeError('No value, or it falsy!'))
	} else if (typeof value !== 'string') {
		errors.push(new TypeError(`Value type "${typeof value}", Required: "string"`))
	} else if (value.length < min) {
		errors.push(new TypeError(`Value length "${value.length}", Required min: "${min}"`))
	} else if (value.length > max) {
		errors.push(new TypeError(`Value length "${value.length}", Required max: "${max}"`))
	}
	return errors
}

//? <----- Convert string to info about length and validation errors ----->
export const toInfo = (value: any) => {
	const type = typeof value
	const length = value?.length
	const errors = validate(value)
	return `Info
	Value Type: ${type}
	Value Length: ${length}
	Validate Errors finded: ${~~errors?.length}
	${errors.join('\n')}`
}

//? <----- Convert string to JSON stringified info ----->
export const toJson = (value: any, desc: S = toInfo(value)) =>
	typeof value === 'object'
		? JSON.stringify({ value, desc }, null, 2)
		: `
Description: ${desc} 
Value: ${value}`

//? <----- Convert value to text block ----->
export const toTextBlock = (value: any, desc: S = toInfo(value)) => {
	const json = toJson(value, desc)
	return `
	<----- Message Start --->
	${json}
	<----- Message End ----->
	`
}
export const matchChars = (input: S) => {
	const trimmed = validate(input) && input.trim()
	const match = trimmed.match(/[a-zа-яё]/gi)
	return match ? match : []
}
export const isConstantStyle = (prop: S) => {
	const trimmed = validate(prop) && prop.trim()
	const replaced = trimmed.replace(/[A-Z0-9_]/g, '')
	const upper = trimmed.toUpperCase()
	return trimmed.length && trimmed === replaced && trimmed === upper
}
export const isStringLength = (input: S, min: N = 1, max: N = 2000) =>
	typeof input === 'string' && input.length > min && input.length < max
export const strToArray = (input: S) => input.split('')

//? <----- Convert string to Title case ----->
export const toTextValues = (input: S) => {
	const trimmed = validate(input) && input.trim().toLowerCase()
	const words = matchWords(trimmed).filter(String)
	const wordsUnical = uniq(words)
	const wordsStats = wordsUnical.map((word: S, index: N) => {
		const code = word.split('').map(c => c.charCodeAt(0))
		const popularity = words.filter(w => w === word).length
		const length = word.length
		return { word, index, length, code, popularity }
	})
	const chars = matchChars(trimmed).filter(String)
	const charsUnical = uniq(chars)
	const charsStats = charsUnical.map((char: S, index: N) => {
		const code = char.charCodeAt(0)
		const popularity = chars.filter(ch => ch === char).length
		return { char, index, code, popularity }
	})
	const lengthStats = {
		length: trimmed.length,
		findedWords: words.length,
		findedWordsUnical: wordsUnical.length,
		findedChars: chars.length,
		findedCharsUnical: charsUnical.length,
	}
	return { value: trimmed, wordsStats, charsStats, lengthStats }
}
export const toTitleCase = (input: S) => {
	const trimmed = validate(input) && input.trim().toLowerCase()
	const start = trimmed.slice(0, 1).toUpperCase()
	const rest = trimmed.slice(1)
	return start + rest
}
export const toValidChars = (input: S) => {
	const trimmed = validate(input) && input.trim()
	return trimmed.replace(/[^a-zA-Z0-9]/g, '')
}
const matchRomanNumerals = (input: S) => {
	const trimmed = validate(input) && input.trim()
	const match = trimmed.match(/^[IVXLCDM]+$/)
	return match && match[0]
}
const matchQuey = (input: S, query: S) => {
	const trimmed = validate(input) && input.trim()
	const match = trimmed.match(query)
	return match && match[0]
}
export const matchWords = (input: S) => {
	const trimmed = validate(input) && input.trim()
	const matches = trimmed.match(/\w+/g)
	return matches !== null ? matches.map(w => toValidChars(w.trim())).filter(String) : []
}
export const replaceInvalidChars = (input: S) => {
	const trimmed = validate(input) && input.trim()
	return trimmed.replace(/[^a-zA-Z0-9\s\n\t]/gim, '')
}
export const isUpperCase = (input: S) => validate(input) && input === input.toUpperCase()

//? <----- Convert string to regular expression ----->
export const rxpFromChars = (chars: A<S> | S, flags: S = 'gim') => {
	const str = [...chars].join('|')
	return new RegExp(`\b${str}*\b`, flags)
}
export const rxpFromChars2 = (chars: A<S> | S, flags: S = 'gim') => {
	const str = [...chars].join('')
	return new RegExp(`\b[${str}]*\b`, flags)
}

//? <----- Dictionary for replace roman numerals to arabic. Also used for create types ----->
const DICT_ROMAN_NUMERALS = [
	{ v1: ['I'], v2: '1' },
	{ v1: ['V'], v2: '5' },
	{ v1: ['X'], v2: '10' },
	{ v1: ['L'], v2: '50' },
	{ v1: ['C'], v2: '100' },
	{ v1: ['D'], v2: '500' },
	{ v1: ['M'], v2: '1000' },
]
type tDictionarySource = { v1: A<S>; v2: S }
type tDictionarySourceMapped = tDictionarySource &
	Required<{ chars: A<S> | S; rxp: R; findMatches: (text: S) => A<S>; replaceMatches: (text: S) => S }>

//? <----- Map dictionary sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] with replace and match methods ----->
export const dictionaryMapper = (src: tDictionarySource & any) => {
	const [v1, v2] = Array.isArray(src) ? src : [src?.v1, src?.v2]
	if (!v1 || !v2) return null
	const chars = [v1].flat(2).filter(String)
	const rxp = rxpFromChars(chars)
	const findMatches = (text: S) => text.match(rxp)
	const replaceMatches = (text: S) => text.replace(rxp, v2)
	const results = { v1, v2, chars, rxp, findMatches, replaceMatches }
	return results as tDictionarySourceMapped
}

//? <----- Create dictionary  methods from array with dict sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] ----->
export const dictionaryCreate = (inputs: A) =>
	(
		inputs
			.filter(Array.isArray)
			.map(el => {
				const [v1, v2 = ''] = el
				return v1 ? { v1: Array.isArray(v1) ? v1 : [v1], v2 } : false
			})
			.filter(Boolean) as A<tDictionarySource>
	).map(dictionaryMapper)

//? <----- Replace all matches from dict in text, with dict replacers ----->
export const dictionaryReplace = (text: S, dict: A) => {
	const sources = dict.filter(Boolean).map(dictionaryMapper) as A<tDictionarySourceMapped>
	return sources.reduce((acc, src) => src.replaceMatches(acc), text)
}

//? <----- Convert roman numeral notation to arabic ----->
export const toRomanNumeral = (input: S) => {
	const dict = DICT_ROMAN_NUMERALS.map(dictionaryMapper) as A<tDictionarySourceMapped>
	return dict.reduce((acc, src) => src.replaceMatches(acc), input)
}
