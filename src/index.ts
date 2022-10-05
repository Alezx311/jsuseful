import * as _Errors from './errors'
import * as _Constants from './constants'
import * as _Randoms from './randoms'
import * as _Messages from './messages'
import * as _Usefuls from './usefuls'
import * as _Validates from './validates'

export const Errors = _Errors
export const Constants = _Constants
export const Randoms = _Randoms
export const Messages = _Messages
export const Usefuls = _Usefuls
export const Validates = _Validates

export const Validate = {
	is: Usefuls.is,
	isF: Usefuls.isF,
	isO: Usefuls.isO,
	isN: Usefuls.isN,
	isS: Usefuls.isS,
	isA: Usefuls.isA,
	isB: Usefuls.isB,
	isNull: Usefuls.isNull,
	isUndefined: Usefuls.isUndefined,
	isRegExp: Usefuls.isRegExp,
	isError: Usefuls.isError,
	isDate: Usefuls.isDate,
	isSymbol: Usefuls.isSymbol,
	isLen: Usefuls.isLen,
	isTruthy: Usefuls.isTruthy,
	isOdd: Usefuls.isOdd,
	isPalindrome: Usefuls.isPalindrome,
}
export const Convert = {
	toS: Usefuls.toS,
	toA: Usefuls.toA,
	toO: Usefuls.toO,
	toL: Usefuls.toL,
	toJson: Usefuls.toJson,
	toTypeOf: Usefuls.toTypeOf,
	toCallback: Usefuls.toCallback,
}
export const Arr = {
	arrLastIndex: Usefuls.arrLastIndex,
	arrLast: Usefuls.arrLast,
	arrFlat: Usefuls.arrFlat,
	arrUnical: Usefuls.arrUnical,
	arrMax: Usefuls.arrMax,
	arrMin: Usefuls.arrMin,
	arrQuickSort: Usefuls.arrQuickSort,
	arrShuffle: Usefuls.arrShuffle,
}
export const Obj = {
	objAssign: Usefuls.objAssign,
	objKeys: Usefuls.objKeys,
	objValues: Usefuls.objValues,
	objEntries: Usefuls.objEntries,
	objFrom: Usefuls.objFrom,
	objCreate: Usefuls.objCreate,
}
export const Time = {
	getTimePerformance: Usefuls.getTimePerformance,
	timeStamp: Usefuls.timeStamp,
	timeISO: Usefuls.timeISO,
	timeUTC: Usefuls.timeUTC,
}

export const JsUsefulTotal = { ...Errors, ...Constants, ...Randoms, ...Messages, ...Usefuls, ...Validates }
export const JsUsefulModules = { Errors, Constants, Randoms, Messages, Usefuls, Validates }
export const JsUsefulCategories = { Validate, Convert, Arr, Obj, Time }
export const JsUseful = { ...JsUsefulTotal, ...JsUsefulModules, ...JsUsefulCategories }
export default JsUseful
