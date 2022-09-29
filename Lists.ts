// getTimeISO
// getTimeStamp
// CalculateFromString
// getFizzBuzz
// timeStamp
// timeISO
// timeUTC
// factorial
// fibonacci
// caesarCipher
// partitionBy
// powerset
// countSubstrings
// distance
// indexOfAll

//? Time in UNIX seconds
export function getTimeISO(): S {
	const result = new Date().toISOString()
	return result
}

//? Time in string
export function getTimeStamp(): S {
	const result = new Date().toLocaleString()
	return result
}

//? Just simple math expression Date
export function CalculateFromString(str: S): N | B {
	const calc = new Function('', `return ${str}`)
	return calc()
}

//? If v odd to 3, return Fizz, if odd to 5, return Buzz, if is odd to 3 and 5, return FizzBuzz
export const getFizzBuzz = (v: N) => isOdd(v, 3, 'Fizz', '') + isOdd(v, 5, 'Buzz', '') || v

//! <----- Other useful functions ----->

//? Return factorial for given number
export const factorial = (v: N): N => (v > 0 ? factorial(v - 1) * v : 1)

//? Return array with fibonacci sequence for given max value
export const fibonacci = (max: N = 10, nums: A<N> = [1, 2]): A<N> => {
	if (!isA(nums)) return fibonacci(max, [1, 2])
	const prev1 = arrLast(nums, 1) || 1
	const prev2 = arrLast(nums, 2) || 1
	const next = prev1 + prev2
	if (next < max) return fibonacci(~~max, [...nums, next])
	return arrUnical(nums.filter(Number))
}

//? Return string crypted by Caesar Cipher with provided step
export const caesarCipher = (str: S, shift: N, decrypt = false) => {
	const s = decrypt ? (26 - shift) % 26 : shift
	const n = s > 0 ? s : 26 + (s % 26)
	return [...str]
		.map((l, i) => {
			const c = str.charCodeAt(i)
			if (c >= 65 && c <= 90) return String.fromCharCode(((c - 65 + n) % 26) + 65)
			if (c >= 97 && c <= 122) return String.fromCharCode(((c - 97 + n) % 26) + 97)
			return l
		})
		.join('')
}
//? caesarCipher('Hello World!', -3) //? 'Ebiil Tloia!'
//? caesarCipher('Ebiil Tloia!', 23, true) //? 'Hello World!'

export const partitionBy = (arr: A, fn: (...args: any) => any) =>
	arr.reduce(
		({ res, last }, v, i, a) => {
			const next = fn(v, i, a)
			if (next !== last) res.push([v])
			else res[res.length - 1].push(v)
			return { res, last: next }
		},
		{ res: [] }
	).res

//? const numbers = [1, 1, 3, 3, 4, 5, 5, 5]
//? partitionBy(numbers, n => n % 2 === 0); //? [[1, 1, 3, 3], [4], [5, 5, 5]]
//? partitionBy(numbers, n => n); //? [[1, 1], [3, 3], [4], [5, 5, 5]]

export const powerset = (arr: A) => arr.reduce((a, v) => a.concat(a.map((r: any) => r.concat(v))), [[]])

export const countSubstrings = (str: S, searchValue: S) => {
	let count = 0,
		i = 0
	while (true) {
		const r = str.indexOf(searchValue, i)
		if (r !== -1) [count, i] = [count + 1, r + 1]
		else return count
	}
}

//? Calculates the distance between two points.
export const distance = (x0: N, y0: N, x1: N, y1: N) => Math.hypot(x1 - x0, y1 - y0)

//? Find all indexes of given element in provided array
export const indexOfAll = (input: A, element: any) => {
	if (!isA(input)) return []
	return input.reduce((acc, v, i) => [...acc, v === element ? i : null], []).filter(Boolean)
}

//? TODO isISOString
//? TODO bucketSort
//? TODO compare
//? TODO countBy
//? TODO groupBy
//? TODO mostFrequent
//? TODO arrayFrequencies
//? TODO differenceBy
//? TODO deepFlatten
//? TODO powerset
//? TODO filterNonUnique
//? TODO filterNonUniqueBy
//? TODO cartesianProduct
//? TODO bubbleSort
//? TODO objClone
//? TODO objFreeze
//? TODO compactObject
//? TODO flattenObject
//? TODO sleep
//? TODO delay
//? TODO primes
//? TODO arithmeticProgression
//? TODO geometricProgression
//? TODO toSafeInteger
//? TODO isDateValid
//? TODO size

//? export class Functions {
//? 	static eval(exp: string): number {
//? 		try {
//? 			const f = new Function('', `return ${exp}`)
//? 			return f()
//? 		} catch (e) {
//? 			throw e
//? 		}
//? 	}
//? }
