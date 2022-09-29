import * as ERRORS from './errors'
import * as CONSTANTS from './constants'
import * as RANDOMS from './random'
import * as MESSAGES from './message'
import * as USEFULS from './useful'

export class JSUSEFUL {
	static Error = ERRORS
	static Constant = CONSTANTS
	static Random = RANDOMS
	static Message = MESSAGES
	static Useful = USEFULS
}

export class Validators {
	static is = USEFULS.is
	static isF = USEFULS.isF
	static isO = USEFULS.isO
	static isN = USEFULS.isN
	static isS = USEFULS.isS
	static isA = USEFULS.isA
	static isB = USEFULS.isB
	static isE = USEFULS.isE
	static isNull = USEFULS.isNull
	static isUndefined = USEFULS.isUndefined
	static isRegExp = USEFULS.isRegExp
	static isError = USEFULS.isError
	static isDate = USEFULS.isDate
	static isSymbol = USEFULS.isSymbol
	static isLen = USEFULS.isLen
	static isTruthy = USEFULS.isTruthy
	static isOdd = USEFULS.isOdd
	static isPalindrome = USEFULS.isPalindrome
}
export class Converters {
	static toS = USEFULS.toS
	static toA = USEFULS.toA
	static toO = USEFULS.toO
	static toL = USEFULS.toL
	static toJson = USEFULS.toJson
	static toTypeOf = USEFULS.toTypeOf
	static toCallback = USEFULS.toCallback
}
export class Arrays {
	static arrLastIndex = USEFULS.arrLastIndex
	static arrLast = USEFULS.arrLast
	static arrFlat = USEFULS.arrFlat
	static arrUnical = USEFULS.arrUnical
	static arrUnicals = USEFULS.arrUnicals
	static arrMax = USEFULS.arrMax
	static arrMin = USEFULS.arrMin
	static arrayQuickSort = USEFULS.arrayQuickSort
	static arrShuffle = USEFULS.arrShuffle
	static arrQuickSort = USEFULS.arrQuickSort
}
export class Objects {
	static objAssign = USEFULS.objAssign
	static objKeys = USEFULS.objKeys
	static objValues = USEFULS.objValues
	static objEntries = USEFULS.objEntries
	static objFrom = USEFULS.objFrom
	static objCreate = USEFULS.objCreate
}
export class Dates {
	static getTimePerformance = USEFULS.getTimePerformance
	static timeStamp = USEFULS.timeStamp
	static timeISO = USEFULS.timeISO
	static timeUTC = USEFULS.timeUTC
}
export class Errors {
	static errBasic = ERRORS.errBasic
	static errType = ERRORS.errType
	static errEval = ERRORS.errEval
	static errRange = ERRORS.errRange
	static errSyntax = ERRORS.errSyntax
	static errReference = ERRORS.errReference

	static ERROR_BASIC = ERRORS.ERROR_BASIC
	static ERROR_TYPE = ERRORS.ERROR_TYPE
	static ERROR_EVAL = ERRORS.ERROR_EVAL
	static ERROR_RANGE = ERRORS.ERROR_RANGE
	static ERROR_SYNTAX = ERRORS.ERROR_SYNTAX
	static ERROR_REFERENCE = ERRORS.ERROR_REFERENCE
	static ERROR_TYPE_NOT_STRING = ERRORS.ERROR_TYPE_NOT_STRING
	static ERROR_TYPE_NOT_ARRAY = ERRORS.ERROR_TYPE_NOT_ARRAY
	static ERROR_VALUE = ERRORS.ERROR_VALUE
	static ERROR_VALUE_NOT_DEFINED = ERRORS.ERROR_VALUE_NOT_DEFINED
	static ERROR_VALUE_NOT_TRUTHY = ERRORS.ERROR_VALUE_NOT_TRUTHY
	static ERROR_LENGTH = ERRORS.ERROR_LENGTH
	static ERROR_LENGTH_SHORT = ERRORS.ERROR_LENGTH_SHORT
	static ERROR_LENGTH_LARGE = ERRORS.ERROR_LENGTH_LARGE
}
export class Sources {
	static getEntries(v: any) {
		return [...Object.entries(v)].filter(String)
	}

	static getSourceValues(obj: any) {
		return this.getEntries(obj)
			.map(([k, v]) => ({ isFunc: typeof v !== 'function', desc: k, value: v, type: typeof v }))
			.reduce((acc: any, el) => [...acc, el], [])
	}

	static getConstantSourceValues(obj: any) {
		return this.getEntries(obj)
			.filter(([k, v]) => typeof v !== 'function')
			.map(([k, v]) => ({ desc: k, value: v, type: typeof v }))
			.reduce((acc: any, el) => [...acc, el], [])
	}

	static getExampleSourceValues(obj: any) {
		const values = this.getConstantSourceValues(obj)
		const Message = JSON.stringify(values, null, 2)
		console.log(`Examples from ${obj?.name}:\n${Message}`)
		return values
	}

	static getFunctionSourceValues(obj: any) {
		return this.getEntries(obj)
			.filter(([k, v]) => v instanceof Function || typeof v === 'function')
			.map(([k, v]) => ({ desc: k, value: v, type: typeof v }))
			.reduce((acc: any, el) => [...acc, el], [])
	}
	static ErrorMethods = Sources.getSourceValues(ERRORS)
	static Constants = Sources.getSourceValues(CONSTANTS)
	static Random = Sources.getSourceValues(RANDOMS)
	static Message = Sources.getSourceValues(MESSAGES)
	static Useful = Sources.getSourceValues(USEFULS)
	static Values = [...this.ErrorMethods, ...this.Constants, ...this.Random, ...this.Message, ...this.Useful]
}

// export class JsUseful extends JSUSEFUL {
export const JsUseful = {
	...ERRORS,
	...CONSTANTS,
	...RANDOMS,
	...MESSAGES,
	...USEFULS,
	ERRORS,
	CONSTANTS,
	RANDOMS,
	MESSAGES,
	USEFULS,
	Validators,
	Converters,
	Arrays,
	Objects,
	Dates,
	Errors,
	Sources,
}

export default JsUseful

// ! Working with different types of path
// console.log('random', JsUseful.RANDOMS.random())
// console.log('random', JsUseful.Validators.is(true))

// Method list for For tests
// export const JsUsefulSources = [
// 	{ desc: 'JsUseful.is', value: JsUseful.is },
// 	{ desc: 'JsUseful.isF', value: JsUseful.isF },
// 	{ desc: 'JsUseful.isO', value: JsUseful.isO },
// 	{ desc: 'JsUseful.isN', value: JsUseful.isN },
// 	{ desc: 'JsUseful.isS', value: JsUseful.isS },
// 	{ desc: 'JsUseful.isA', value: JsUseful.isA },
// 	{ desc: 'JsUseful.isB', value: JsUseful.isB },
// 	{ desc: 'JsUseful.isE', value: JsUseful.isE },
// 	{ desc: 'JsUseful.isNull', value: JsUseful.isNull },
// 	{ desc: 'JsUseful.isUndefined', value: JsUseful.isUndefined },
// 	{ desc: 'JsUseful.isRegExp', value: JsUseful.isRegExp },
// 	{ desc: 'JsUseful.isError', value: JsUseful.isError },
// 	{ desc: 'JsUseful.isDate', value: JsUseful.isDate },
// 	{ desc: 'JsUseful.isSymbol', value: JsUseful.isSymbol },
// 	{ desc: 'JsUseful.isLen', value: JsUseful.isLen },
// 	{ desc: 'JsUseful.isTruthy', value: JsUseful.isTruthy },
// 	{ desc: 'JsUseful.isOdd', value: JsUseful.isOdd },
// 	{ desc: 'JsUseful.isPalindrome', value: JsUseful.isPalindrome },
// 	{ desc: 'JsUseful.toS', value: JsUseful.toS },
// 	{ desc: 'JsUseful.toA', value: JsUseful.toA },
// 	{ desc: 'JsUseful.toO', value: JsUseful.toO },
// 	{ desc: 'JsUseful.toL', value: JsUseful.toL },
// 	{ desc: 'JsUseful.toJson', value: JsUseful.toJson },
// 	{ desc: 'JsUseful.toTypeOf', value: JsUseful.toTypeOf },
// 	{ desc: 'JsUseful.toCallback', value: JsUseful.toCallback },
// 	{ desc: 'JsUseful.arrLastIndex', value: JsUseful.arrLastIndex },
// 	{ desc: 'JsUseful.arrLast', value: JsUseful.arrLast },
// 	{ desc: 'JsUseful.arrFlat', value: JsUseful.arrFlat },
// 	{ desc: 'JsUseful.arrUnical', value: JsUseful.arrUnical },
// 	{ desc: 'JsUseful.arrUnicals', value: JsUseful.arrUnicals },
// 	{ desc: 'JsUseful.arrMax', value: JsUseful.arrMax },
// 	{ desc: 'JsUseful.arrMin', value: JsUseful.arrMin },
// 	{ desc: 'JsUseful.arrayQuickSort', value: JsUseful.arrayQuickSort },
// 	{ desc: 'JsUseful.arrShuffle', value: JsUseful.arrShuffle },
// 	{ desc: 'JsUseful.arrQuickSort', value: JsUseful.arrQuickSort },
// 	{ desc: 'JsUseful.objAssign', value: JsUseful.objAssign },
// 	{ desc: 'JsUseful.objKeys', value: JsUseful.objKeys },
// 	{ desc: 'JsUseful.objValues', value: JsUseful.objValues },
// 	{ desc: 'JsUseful.objEntries', value: JsUseful.objEntries },
// 	{ desc: 'JsUseful.objFrom', value: JsUseful.objFrom },
// 	{ desc: 'JsUseful.objCreate', value: JsUseful.objCreate },
// 	{ desc: 'JsUseful.getTimePerformance', value: JsUseful.getTimePerformance },
// 	{ desc: 'JsUseful.timeStamp', value: JsUseful.timeStamp },
// 	{ desc: 'JsUseful.timeISO', value: JsUseful.timeISO },
// 	{ desc: 'JsUseful.timeUTC', value: JsUseful.timeUTC },
// 	{ desc: 'JsUseful.getSourceValues', value: JsUseful.getSourceValues },
// 	{ desc: 'JsUseful.SIZE', value: JsUseful.SIZE },
// 	{ desc: 'JsUseful.MIN', value: JsUseful.MIN },
// 	{ desc: 'JsUseful.MAX', value: JsUseful.MAX },
// 	{ desc: 'JsUseful.SOURCES_RANDOM_CONSTANTS', value: JsUseful.SOURCES_RANDOM_CONSTANTS },
// 	{ desc: 'JsUseful.NUM', value: JsUseful.NUM },
// 	{ desc: 'JsUseful.BOOL', value: JsUseful.BOOL },
// 	{ desc: 'JsUseful.INT', value: JsUseful.INT },
// 	{ desc: 'JsUseful.STR', value: JsUseful.STR },
// 	{ desc: 'JsUseful.SRC', value: JsUseful.SRC },
// 	{ desc: 'JsUseful.ARR', value: JsUseful.ARR },
// 	{ desc: 'JsUseful.OBJ', value: JsUseful.OBJ },
// 	{ desc: 'JsUseful.TEXT', value: JsUseful.TEXT },
// 	{ desc: 'JsUseful.SOURCES_RANDOM_VALUES', value: JsUseful.SOURCES_RANDOM_VALUES },
// 	{ desc: 'JsUseful.random', value: JsUseful.random },
// 	{ desc: 'JsUseful.randomBool', value: JsUseful.randomBool },
// 	{ desc: 'JsUseful.randomNum', value: JsUseful.randomNum },
// 	{ desc: 'JsUseful.randomInt', value: JsUseful.randomInt },
// 	{ desc: 'JsUseful.randomCoin', value: JsUseful.randomCoin },
// 	{ desc: 'JsUseful.randomStr', value: JsUseful.randomStr },
// 	{ desc: 'JsUseful.randomArr', value: JsUseful.randomArr },
// 	{ desc: 'JsUseful.randomMany', value: JsUseful.randomMany },
// 	{ desc: 'JsUseful.randomIndex', value: JsUseful.randomIndex },
// 	{ desc: 'JsUseful.randomElement', value: JsUseful.randomElement },
// 	{ desc: 'JsUseful.randomSort', value: JsUseful.randomSort },
// 	{ desc: 'JsUseful.randomShuffle', value: JsUseful.randomShuffle },
// 	{ desc: 'JsUseful.randomSource', value: JsUseful.randomSource },
// 	{ desc: 'JsUseful.randomObject', value: JsUseful.randomObject },
// 	{ desc: 'JsUseful.randomKey', value: JsUseful.randomKey },
// 	{ desc: 'JsUseful.randomValue', value: JsUseful.randomValue },
// 	{ desc: 'JsUseful.randomEntry', value: JsUseful.randomEntry },
// 	{ desc: 'JsUseful.SOURCES_RANDOM_EXAMPLES', value: JsUseful.SOURCES_RANDOM_EXAMPLES },
// 	{ desc: 'JsUseful.genArr', value: JsUseful.genArr },
// 	{ desc: 'JsUseful.genNums', value: JsUseful.genNums },
// 	{ desc: 'JsUseful.genSources', value: JsUseful.genSources },
// 	{ desc: 'JsUseful.randomTypeOf', value: JsUseful.randomTypeOf },
// 	{ desc: 'JsUseful.randomSourceByType', value: JsUseful.randomSourceByType },
// 	{ desc: 'JsUseful.randomMusicNoteChar', value: JsUseful.randomMusicNoteChar },
// 	{ desc: 'JsUseful.randomMusicNoteBemole', value: JsUseful.randomMusicNoteBemole },
// 	{ desc: 'JsUseful.randomMusicNoteSharp', value: JsUseful.randomMusicNoteSharp },
// 	{ desc: 'JsUseful.randomMusicScale', value: JsUseful.randomMusicScale },
// 	{ desc: 'JsUseful.randomMusicDurationChar', value: JsUseful.randomMusicDurationChar },
// 	{ desc: 'JsUseful.randomMusicIntervalChar', value: JsUseful.randomMusicIntervalChar },
// 	{ desc: 'JsUseful.randomMusicOctave', value: JsUseful.randomMusicOctave },
// 	{ desc: 'JsUseful.randomMusicMidiIndex', value: JsUseful.randomMusicMidiIndex },
// 	{ desc: 'JsUseful.randomMusicValues', value: JsUseful.randomMusicValues },
// 	{ desc: 'JsUseful.randomColorClassname', value: JsUseful.randomColorClassname },
// 	{ desc: 'JsUseful.randomColorName', value: JsUseful.randomColorName },
// 	{ desc: 'JsUseful.randomColorCode', value: JsUseful.randomColorCode },
// 	{ desc: 'JsUseful.randomColorValues', value: JsUseful.randomColorValues },
// 	{ desc: 'JsUseful.float', value: JsUseful.float },
// 	{ desc: 'JsUseful.number', value: JsUseful.number },
// 	{ desc: 'JsUseful.powerOfTwo', value: JsUseful.powerOfTwo },
// 	{ desc: 'JsUseful.numbersDeep', value: JsUseful.numbersDeep },
// 	{ desc: 'JsUseful.values', value: JsUseful.values },
// 	{ desc: 'JsUseful.boolean', value: JsUseful.boolean },
// 	{ desc: 'JsUseful.array', value: JsUseful.array },
// 	{ desc: 'JsUseful.numbers', value: JsUseful.numbers },
// 	{ desc: 'JsUseful.arrays', value: JsUseful.arrays },
// 	{ desc: 'JsUseful.arrayGrow', value: JsUseful.arrayGrow },
// 	{ desc: 'JsUseful.arraySequence', value: JsUseful.arraySequence },
// 	{ desc: 'JsUseful.arrayChange', value: JsUseful.arrayChange },
// 	{ desc: 'JsUseful.arrayMerge', value: JsUseful.arrayMerge },
// 	{ desc: 'JsUseful.arrayDouble', value: JsUseful.arrayDouble },
// 	{ desc: 'JsUseful.arrayRepeats', value: JsUseful.arrayRepeats },
// 	{ desc: 'JsUseful.arrayIndex', value: JsUseful.arrayIndex },
// 	{ desc: 'JsUseful.arrayElement', value: JsUseful.arrayElement },
// 	{ desc: 'JsUseful.arrayElements', value: JsUseful.arrayElements },
// 	{ desc: 'JsUseful.arrayUnicals', value: JsUseful.arrayUnicals },
// 	{ desc: 'JsUseful.arrayShuffle', value: JsUseful.arrayShuffle },
// 	{ desc: 'JsUseful.arrayPart', value: JsUseful.arrayPart },
// 	{ desc: 'JsUseful.arrayDeepSomeValues', value: JsUseful.arrayDeepSomeValues },
// 	{ desc: 'JsUseful.joinedStrings', value: JsUseful.joinedStrings },
// 	{ desc: 'JsUseful.objectKey', value: JsUseful.objectKey },
// 	{ desc: 'JsUseful.objectValue', value: JsUseful.objectValue },
// 	{ desc: 'JsUseful.objectEntry', value: JsUseful.objectEntry },
// 	{ desc: 'JsUseful.validate', value: JsUseful.validate },
// 	{ desc: 'JsUseful.toInfo', value: JsUseful.toInfo },
// 	{ desc: 'JsUseful.toJson', value: JsUseful.toJson },
// 	{ desc: 'JsUseful.toTextBlock', value: JsUseful.toTextBlock },
// 	{ desc: 'JsUseful.matchChars', value: JsUseful.matchChars },
// 	{ desc: 'JsUseful.isConstantStyle', value: JsUseful.isConstantStyle },
// 	{ desc: 'JsUseful.isStringLength', value: JsUseful.isStringLength },
// 	{ desc: 'JsUseful.strToArray', value: JsUseful.strToArray },
// 	{ desc: 'JsUseful.toTextValues', value: JsUseful.toTextValues },
// 	{ desc: 'JsUseful.toTitleCase', value: JsUseful.toTitleCase },
// 	{ desc: 'JsUseful.toValidChars', value: JsUseful.toValidChars },
// 	{ desc: 'JsUseful.matchWords', value: JsUseful.matchWords },
// 	{ desc: 'JsUseful.replaceInvalidChars', value: JsUseful.replaceInvalidChars },
// 	{ desc: 'JsUseful.isUpperCase', value: JsUseful.isUpperCase },
// 	{ desc: 'JsUseful.rxpFromChars', value: JsUseful.rxpFromChars },
// 	{ desc: 'JsUseful.rxpFromChars2', value: JsUseful.rxpFromChars2 },
// 	{ desc: 'JsUseful.dictionaryMapper', value: JsUseful.dictionaryMapper },
// 	{ desc: 'JsUseful.dictionaryCreate', value: JsUseful.dictionaryCreate },
// 	{ desc: 'JsUseful.dictionaryReplace', value: JsUseful.dictionaryReplace },
// 	{ desc: 'JsUseful.toRomanNumeral', value: JsUseful.toRomanNumeral },
// 	{ desc: 'JsUseful.errBasic', value: JsUseful.errBasic },
// 	{ desc: 'JsUseful.errType', value: JsUseful.errType },
// 	{ desc: 'JsUseful.errEval', value: JsUseful.errEval },
// 	{ desc: 'JsUseful.errRange', value: JsUseful.errRange },
// 	{ desc: 'JsUseful.errSyntax', value: JsUseful.errSyntax },
// 	{ desc: 'JsUseful.errReference', value: JsUseful.errReference },
// 	{ desc: 'JsUseful.ERROR_BASIC', value: JsUseful.ERROR_BASIC },
// 	{ desc: 'JsUseful.ERROR_TYPE', value: JsUseful.ERROR_TYPE },
// 	{ desc: 'JsUseful.ERROR_EVAL', value: JsUseful.ERROR_EVAL },
// 	{ desc: 'JsUseful.ERROR_RANGE', value: JsUseful.ERROR_RANGE },
// 	{ desc: 'JsUseful.ERROR_SYNTAX', value: JsUseful.ERROR_SYNTAX },
// 	{ desc: 'JsUseful.ERROR_REFERENCE', value: JsUseful.ERROR_REFERENCE },
// 	{ desc: 'JsUseful.ERROR_TYPE_NOT_STRING', value: JsUseful.ERROR_TYPE_NOT_STRING },
// 	{ desc: 'JsUseful.ERROR_TYPE_NOT_ARRAY', value: JsUseful.ERROR_TYPE_NOT_ARRAY },
// 	{ desc: 'JsUseful.ERROR_VALUE', value: JsUseful.ERROR_VALUE },
// 	{ desc: 'JsUseful.ERROR_VALUE_NOT_DEFINED', value: JsUseful.ERROR_VALUE_NOT_DEFINED },
// 	{ desc: 'JsUseful.ERROR_VALUE_NOT_TRUTHY', value: JsUseful.ERROR_VALUE_NOT_TRUTHY },
// 	{ desc: 'JsUseful.ERROR_LENGTH', value: JsUseful.ERROR_LENGTH },
// 	{ desc: 'JsUseful.ERROR_LENGTH_SHORT', value: JsUseful.ERROR_LENGTH_SHORT },
// 	{ desc: 'JsUseful.ERROR_LENGTH_LARGE', value: JsUseful.ERROR_LENGTH_LARGE },
// 	{ desc: 'JsUseful.STR', value: JsUseful.STR },
// 	{ desc: 'JsUseful.RND', value: JsUseful.RND },
// 	{ desc: 'JsUseful.BLN', value: JsUseful.BLN },
// 	{ desc: 'JsUseful.NUM', value: JsUseful.NUM },
// 	{ desc: 'JsUseful.ARR', value: JsUseful.ARR },
// 	{ desc: 'JsUseful.OBJ', value: JsUseful.OBJ },
// 	{ desc: 'JsUseful.ERR', value: JsUseful.ERR },
// 	{ desc: 'JsUseful.BIG', value: JsUseful.BIG },
// 	{ desc: 'JsUseful.FUNC', value: JsUseful.FUNC },
// 	{ desc: 'JsUseful.TYPEOF', value: JsUseful.TYPEOF },
// 	{ desc: 'JsUseful.MUSIC_NOTES_CHARS', value: JsUseful.MUSIC_NOTES_CHARS },
// 	{ desc: 'JsUseful.MUSIC_NOTES_BEMOLE', value: JsUseful.MUSIC_NOTES_BEMOLE },
// 	{ desc: 'JsUseful.MUSIC_NOTES_SHARP', value: JsUseful.MUSIC_NOTES_SHARP },
// 	{ desc: 'JsUseful.MUSIC_DURATION_CHARS', value: JsUseful.MUSIC_DURATION_CHARS },
// 	{ desc: 'JsUseful.MUSIC_INTERVAL_CHARS', value: JsUseful.MUSIC_INTERVAL_CHARS },
// 	{ desc: 'JsUseful.MUSIC_SCALES', value: JsUseful.MUSIC_SCALES },
// 	{ desc: 'JsUseful.COLOR_CLASS', value: JsUseful.COLOR_CLASS },
// 	{ desc: 'JsUseful.COLOR_NAMES', value: JsUseful.COLOR_NAMES },
// 	{ desc: 'JsUseful.COLOR_CODES', value: JsUseful.COLOR_CODES },
// ].map(({ desc, value }) => ({
// 	desc,
// 	value,
// 	type: typeof value,
// 	result: typeof value !== 'function' ? value : () => value()),
// )
// console.log(JsUsefulSources)
