//? Lot of small functions, but needs refactoring first

import { A, E, N, R, S } from './types'

//! <----- Validation Functions ----->

//? Return true if value is defined and exists.
export const is = (v: any) => v !== null && v !== undefined
//? Return true if value is object.
export const isF = (v: any) => typeof v === 'function' || v instanceof Function
//? Return true if value is object.
export const isO = (v: any) => typeof v === 'object' && is(v) && !Array.isArray(v)
//? Return true if value is number and greater than given l.
export const isN = (v: any, l: N = 1) => typeof v === 'number' && isFinite(v) && v >= l
//? Return true if value is string and value length are greater than given l.
export const isS = (v: any, l: N = 1) => (typeof v === 'string' || v instanceof String) && v.length >= l
//? Return true if value is array and value length are greater than given l.
export const isA = (v: any, l: N = 1) => Array.isArray(v) && v.length >= l
//? Return true if value is true or false
export const isB = (v: any) => typeof v === 'boolean'
//? Return true if value is Error
export const isE = (v: any) => v instanceof Error
//? Returns if a value is null
export const isNull = (v: any): v is null => v === null
//? Returns if a value is undefined
export const isUndefined = (v: any): v is undefined => typeof v === 'undefined'
//? Returns if a value is Regular Expression
export const isRegExp = (v: any): v is R => v && typeof v === 'object' && v.constructor === RegExp
//? Returns if a value is Error
export const isError = (v: any): v is E => v instanceof Error && typeof v.message !== 'undefined'
//? Returns if a value is Date
export const isDate = (v: any): v is Date => v instanceof Date
//? Returns if a value is Symbol
export const isSymbol = (v: any): v is Symbol => typeof v === 'symbol'
//? Returns true if value.length is defined and greater than given l l.
export const isLen = (v: any, l: N = 1) => is(v?.length) && v.length >= ~~l
//? Return true if value is truthy.
export const isTruthy = (v: any) => !!v
//? Check is given v is odd to n. On True, return r1, else r2
export const isOdd = (v: N = 0, n: N = 2, r1: any = true, r2: any = false) => (v % n === 0 ? r1 : r2)
//? Return true if given string is palindrome
export const isPalindrome = (v: S = 'Some string') => {
	if (!isS(v, 1)) return false
	const reversed = v.split('').reverse().join('').trim()
	return reversed === v
}

//! <----- Transform Functions ----->

//? Small Converters
export const toS = (v: any) => (isO(v) ? JSON.stringify(v) : v + '')
export const toA = (v: any) => (isA(v) ? v : [v])
export const toO = (v: any) => (isO(v) ? v : { value: v })
export const toL = (v: any) => (isS(v) || isA(v) ? v.length : false)
//? Return stringified value
export const toJson = (v: any) => (is(v) ? JSON.stringify(v, null, 2) : v + '')
export const toTypeOf = (v: any) => typeof v
//? If give a function, return itself, on value will return callback with value as result
export const toCallback = (v?: any) => {
	if (!isF(v)) return () => v
	return v
}

//! <----- Array Methods ----->
//? Return last index of given array or null
export const arrLastIndex = (arr: A) => isA(arr, 1) && ~~(arr.length - 1)
//? Return previous element of given array or null
export const arrLast = (arr: A, step: N = 1) => {
	if (!isA(arr, step)) return null
	return arr?.[arr.length - step]
}
//? Return flatty values
export const arrFlat = (...values: any) => values.flat(Infinity)
//? Return only unical elements from given array
export const arrUnical = (arr: A): A => {
	if (!isA(arr, 1)) return []
	return [...new Set([...arr])]
}
export const arrUnicals = (input: A) => [...new Set([...input])]
export const arrMax = (input: A) => Math.max(...input.filter(Number))
export const arrMin = (input: A) => Math.min(...input.filter(Number))
export const arrayQuickSort = (input: A) => input.sort()
export const arrShuffle = ([...arr]) => {
	let m = arr.length
	while (m) {
		const i = Math.floor(Math.random() * m--)
		;[arr[m], arr[i]] = [arr[i], arr[m]]
	}
	return arr
}
export const arrQuickSort = (arr: A): A => {
	const a = [...arr]
	if (a.length < 2) return a
	const pivotIndex = Math.floor(arr.length / 2)
	const pivot = a[pivotIndex]
	const [lo, hi] = a.reduce(
		(acc, val, i) => {
			if (val < pivot || (val === pivot && i != pivotIndex)) {
				acc[0].push(val)
			} else if (val > pivot) {
				acc[1].push(val)
			}
			return acc
		},
		[[], []]
	)
	return [...arrQuickSort(lo), pivot, ...arrQuickSort(hi)]
}

//! <----- Object Methods ----->

//? Object useful functions
export const objAssign = (v1: any, v2: any) => Object.assign({}, v1, v2)
export const objKeys = (v: any) => (isO(v) ? Object.keys(v) : [])
export const objValues = (v: any) => (isO(v) ? Object.values(v) : [])
export const objEntries = (v: any) => (isO(v) ? Object.entries(v) : [])
export const objFrom = (v: any) => (isA(v) ? Object.fromEntries(v) : { value: v, desc: 'Object from value' })

//? Create new object from given strings
export const objCreate = (input: A<S>) => {
	if (!isA(input)) return { desc: 'Created Object', value: input }
	const entries = arrUnical(input.filter(String)).map(k => [k, k])
	return Object.fromEntries(entries)
}

//! <----- Date Methods ----->

export const getTimePerformance = (v?: N) => {
	const current = performance.now()
	return v && v > 0 ? current - v : current
}
//? Generate simple timestamps
export const timeStamp = () => new Date().toLocaleString()
export const timeISO = () => new Date().toISOString()
export const timeUTC = () => new Date().toUTCString()

//! <----- Source Methods ----->

export const getSourceValues = (input: any) => {
	if (!input || typeof input !== 'object') {
		const err = new Error('Invalid value to search source values')
		return [{ desc: 'Error', value: input, error: err }]
	}

	const keys = [...Object.getOwnPropertyNames(input)].filter(String)

	const accum = [{ desc: 'Object', value: input, index: 0, type: typeof input }]
	if (!keys.length) {
		return accum
	}

	return keys.reduce((acc, k, index) => {
		const desc = k
		const value = input?.[k as keyof typeof input]
		const type = typeof value
		return [...acc, { desc, index, value, type }]
	}, accum)
}
