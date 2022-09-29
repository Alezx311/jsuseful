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
export const JSUSEFUL_REDUCED = {
	...ERRORS,
	...CONSTANTS,
	...RANDOMS,
	...MESSAGES,
	...USEFULS,
}
export const JsUseful = {
	...JSUSEFUL_REDUCED,
	All: JSUSEFUL_REDUCED,
	Errors: ERRORS,
	Constants: CONSTANTS,
	Randoms: RANDOMS,
	Messages: MESSAGES,
	Useful: USEFULS,
	Validators,
	Converters,
	Arrays,
	Objects,
	Dates,
	Sources,
}

export default JsUseful
