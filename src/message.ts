import { A, N, R, S } from './types'

const uniq = (arr: A) => [...new Set([...arr])]

//? Validate string and collect errors
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

//? Convert string to info about length and validation errors
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

//? Convert string to JSON stringified info
export const toJson = (value: any, desc: S = toInfo(value)) =>
	typeof value === 'object'
		? JSON.stringify({ value, desc }, null, 2)
		: `
Description: ${desc} 
Value: ${value}`

//? Convert value to text block
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

//? Convert string to Title case
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

//? Convert string to regular expression
export const rxpFromChars = (chars: A<S> | S, flags: S = 'gim') => {
	const str = [...chars].join('|')
	return new RegExp(`\b${str}*\b`, flags)
}
export const rxpFromChars2 = (chars: A<S> | S, flags: S = 'gim') => {
	const str = [...chars].join('')
	return new RegExp(`\b[${str}]*\b`, flags)
}

//? Dictionary for replace roman numerals to arabic. Also used for create types
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

//? Map dictionary sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] with replace and match methods
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

//? Create dictionary  methods from array with dict sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }]
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

//? Replace all matches from dict in text, with dict replacers
export const dictionaryReplace = (text: S, dict: A) => {
	const sources = dict.filter(Boolean).map(dictionaryMapper) as A<tDictionarySourceMapped>
	return sources.reduce((acc, src) => src.replaceMatches(acc), text)
}

//? Convert roman numeral notation to arabic
export const toRomanNumeral = (input: S) => {
	const dict = DICT_ROMAN_NUMERALS.map(dictionaryMapper) as A<tDictionarySourceMapped>
	return dict.reduce((acc, src) => src.replaceMatches(acc), input)
}

// 1.charAt(x)
// This function will return the character at the x position within the string.

// 1
// 2
// 3
// 4
// //charAt(x)
// var myString = 'jQuery FTW!!!';
// console.log(myString.charAt(7));
// //output: F
// Moving on with this article on Javascript String functions, Let’s have a look at the next one.

// 2.charCodeAt(x)
// This function will return the unicode value of the character at position ‘x’ within the string.

// 1
// 2
// 3
// 4
// //charAt(position)
// var message="jquery4u"
// //alerts "q"
// alert(message.charAt(1)

// 3.concat(v1,v2..)
// This function combines one or more strings(argv1,v2 etc) into existing one.

// 1
// 2
// 3
// 4
// 5
// //concat(v1, v2,..)
// var message="Sam"
// var final=message.concat(" is a"," hopeless romantic.")
// //alerts "Sam is a hopeless romantic."
// alert(final)

// 4.fromCharcode(c1,c2)
// Function will return a string created by using specified sequence of unicode values(argc1,c2).

// 1
// 2
// 3
// 4
// 5
// //fromCharCode(c1, c2,...)
// console.log(String.fromCharCode(97,98,99,120,121,122))
// //output: abcxyz
// console.log(String.fromCharCode(72,69,76,76,79))
// //output: HELLO

// 5.indexOf(substr, [start])
// Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is 0.

// 1
// 2
// 3
// 4
// //indexOf(char/substring)
// var sentence="Hi, my name is Sam!"
// if (sentence.indexOf("Sam")!=-1)
// alert("Sam is in there!")
// Moving on with this article on Javascript String functions

// 6.lastIndexOf(substr, [start])
// Searches and (if found) returns the index number of the searched character or substring within the string. Searches the string from end to the beginning. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is string.length-1.

// 1
// 2
// 3
// 4
// //lastIndexOf(substr, [start])
// var myString = 'javascript rox';
// console.log(myString.lastIndexOf('r'));
// //output: 11

// 7.match(regexp)
// Executes a search for a match within a string based on a regular expression. It returns an array of information or null if no match is found.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// //match(regexp) //select integers only
// var intRegex = /[0-9 -()+]+$/;

// var myNumber = '999';
// var myInt = myNumber.match(intRegex);
// console.log(isInt);
// //output: 999

// var myString = '999 JS Coders';
// var myInt = myString.match(intRegex);
// console.log(isInt);
// //output: null
// Moving on with this article on Javascript String functions, let’s understand replace function.

// 8.replace(regexp/substr, replacetext)
// Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// //replace(substr, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(/JavaScript/i, "jQuery"));
// //output: 999 jQuery Coders

// //replace(regexp, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
// //output: The JavaScript Coders

// 9.search(regexp)
// Tests for a match in a string. It returns the index of the match, or -1 if not found.

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// //search(regexp)
// var intRegex = /[0-9 -()+]+$/;

// var myNumber = '999';
// var isInt = myNumber.search(intRegex);
// console.log(isInt);
// //output: 0

// 10.slice(start, [end])
// This function returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of the string.

// 1
// 2
// 3
// 4
// //slice(start, end)
// var text="excellent"
// text.slice(0,4) //returns "exce"
// text.slice(2,4) //returns "ce"
// Moving on with this article on Javascript String functions

// 11.split(delimiter, [limit])
// This will split a string into many according to the specified delimiter, and returns an array containing each element. The optional “limit” is an integer that lets you specify the maximum number of elements to return.

// 1
// 2
// 3
// 4
// 5
// //split(delimiter)
// var message="Welcome to jQuery4u"
// //word[0] contains "We"
// //word[1] contains "lcome to jQuery4u"
// var word=message.split("l")

// 12.substr(start, [length])

// This function returns the characters in a string beginning at “start” and through the specified number of characters, “length”. “Length” is optional, and if omitted, up to the end of the string is assumed.

// 1
// 2
// 3
// 4
// //substring(from, to)
// var text="excellent"
// text.substring(0,4) //returns "exce"
// text.substring(2,4) //returns "ce"

// 13.substring(from, [to])
// It returns the characters in a string between “from” and “to” indexes, NOT including “to” itself. “To” is optional, and if omitted, up to the end of the string is assumed.

// 1
// 2
// 3
// 4
// 5
// //substring(from, [to])
// var myString = 'javascript rox';
// myString = myString.substring(0,10);
// console.log(myString)
// //output: javascript

// 14.toLowerCase()
// This will return the string with all of its characters converted to lowercase.

// 1
// 2
// 3
// 4
// 5
// //toLowerCase()
// var myString = 'JAVASCRIPT ROX';
// myString = myString.toLowerCase();
// console.log(myString)
// //output: javascript rox

// 15.toUpperCase()
// This will return the string with all of its characters converted to uppercase.

// 1
// 2
// 3
// 4
// 5
// //toUpperCase()
// var myString = 'javascript rox';
// myString = myString.toUpperCase();
// console.log(myString)
// //output: JAVASCRIPT ROX

// 16. includes()
// It is used to check whether a string contains the specified string or characters.

// 1
// 2
// 3
// 4
// //includes()
// var mystring = "Hello, welcome to edureka";
// var n = mystring.includes("edureka");
// //output: True

// 17. endsWith()
// This function checks whether a string ends with specified string or characters.

// 1
// 2
// 3
// 4
// //endsWith()
// var mystr = "List of javascript functions";
// var n = mystr.endsWith("functions");
// //output: True

// 18. repeat()
// This returns a new string with a specified number of copies of an existing string.

// 1
// 2
// 3
// 4
// //repeat()
// var string = "Welcome to Edureka";
// string.repeat(2);
// //output: Welcome to Edureka Welcome to Edureka

// 19. valueOf()
// It is used to return the primitive value of a String object.

// 1
// 2
// 3
// 4
// //valueOf()
// var mystr = "Hello World!";
// var res = mystr.valueOf();
// //output: Hello World!

// 20. trim()
// This function removes whitespace from both ends of a string.

// 1
// 2
// 3
// //trim()
// var str = "     Hello Edureka!     ";
// alert(str.trim());
