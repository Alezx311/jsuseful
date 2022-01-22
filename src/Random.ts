import { ObjE, ObjK, ObjV } from './Exp'
import { A, ANY, B, N, O, S } from './types'

//* Returns random nums arr
export const numsDeep = (len: N = 10, max: N = 4) => nums(len, max).map((v: ANY) => (v > 1 ? nums(v, max) : v))

//* Returns random values
export const values = (arr: A) => arrGen(10).map((v: ANY) => arrElement(arr))

//* Returns random num
export const rand = (): N => Math.random()

//* Returns random range
export const range = (min: N = 0.01, max: N = 0.99, size: N = 2): N =>
	Number((rand() * (max - min) + min).toFixed(size))

//* Random integer
export const num = (min: N = 1, max: N = 100): N => ~~(min + rand() * (max + 1 - min))

//* Returns random power of two
export const powerOfTwo = (min: N = 1, max: N = 10): N => 2 ** ~~num(min, max)

//* Boolean with given chance
export const boolean = (chance: N = 50): B => num(1, 100) > chance

//* Returns random arr, can create element from given callback
export const arrGen = (size: N = 10, cb = () => num()): A<N> =>
	Array(size)
		.fill(cb)
		.map(v => (v instanceof Function ? v() : v))

//* Returns random nums arr
export const nums = (size?: N, min?: N, max?: N): A<N> => arrGen(size, () => num(min, max))

//* Return Random arrs
export const arrs = (size: N = 10, maxDeep: N = 5) => arrGen(size).map(() => arrGen(num(2, maxDeep)))

//* Return Random arrGrow
export const arrGrow = <T1 extends A>(arr: T1, growSize: N = 2) =>
	arrGen(growSize).reduce((acc: ANY[]) => [...acc, ...arr], [])

//* Return Random example
export const example = (size: N = 10): A<N> => nums(size)

//* Return Random arrExamples
export const arrExamples = (size: N = 10) => arrGen(size).map(() => example(size))

//* Return Random arrSequence
export const arrSequence = (start: N = 1, end: N = 100) => arrGen(end).map((v, i) => start + i)

//* Return Random arrChange
export const arrChange = (size: N = 10, arr: A) => arrElement(arrGen(size).map(v => arrShuffle(arr)))

//* Return Random arrMerge
export const arrMerge = <T1 extends A<A>>(...arrs: T1) => [...new Set(arrs.reduce((acc, arr) => [...acc, ...arr], []))]

//* Return Random arrDouble
export const arrDouble = <T1 extends A>(arr: T1) => [arr, arr]

//* Return Random arrRepeats
export const arrRepeats = <T1 extends A>(arr: T1, repeats: N = 2) =>
	arrGen(repeats).reduce((acc: T1[]) => [...acc, ...arr], [])

//* Return Random arrShuffles
export const arrShuffles = <T1 extends A>(arr: T1, repeats: N = 2) => arrShuffle(arrRepeats(arr, repeats))

//* Return Random arrShuffleUnicals
export const arrShuffleUnicals = <T1 extends A>(arr: T1) => arrUnicals(arrShuffle(arr))

//* Return Random arrDoubleSome

export const arrDoubleSome = <T1 extends A>(arr: T1, chance: N = 50) =>
	arrShuffles(arr).map(v => (boolean(chance) ? [v, v] : v))

//* Random index from given arr
export const arrIndex = <T1 extends A>(arr: T1): N => (!!arr?.length ? num(0, arr.length - 1) : 0)

//* Random Element from given arr
export const arrElement = <T1 extends A>(arr: T1): T1[N] => {
	return arr?.[arrIndex(arr)] ?? null
}

//* arr of random elements from given arr... GENIUS BLYAT
export const arrValues = <T1 extends A>(arr: T1, size: N = 2) => arrGen(size, () => arrElement(arr))

//* Only unical values
export const arrUnicals = <T1 extends A>(arr: T1) => [...new Set(arr)]

//* Shuffle elements
export const arrShuffle = <T1 extends A>(arr: T1) => (!arr?.length ? [] : arr.sort(() => rand() - 0.5))

//* Random part of arr
export const arrPart = <T1 extends A>(arr: T1) => {
	if (!arr?.length) return []
	if (~~arr?.length < 3) return [arr[0]]

	const startIndex = num(0, arr?.length - 2)
	const endIndex = num(startIndex, arr?.length - 1)

	return arr.slice(startIndex, endIndex)
}

//* Transform random values of arr to another arr
export const arrDeepSomeValues = <T1 extends A>(arr: T1, chance?: N) =>
	arr.reduce((acc, v) => [...acc, boolean(chance) ? [v, v] : v], [])

//* Return matched text, from given string
export const matchText = (str: S): S => (str.trim().match(/[a-z]/gi) || []).join('')

//* Return random string, created from given strings arr
export const joinedStrings = (parts: A<S>, size: N): S => parts.map(matchText).slice(0, size).join('')

//* Return random lines from given text
export const textLines = (text: S, size: N) => text.split('\n').slice(0, ~~size)

//* Returns random objectKey
export const objectKey = <T1 extends O>(obj: T1): keyof T1 => {
	const arr = ObjK(obj)
	return arr?.length ? arrElement(arr) : ''
}

//* Returns random objectValue

export const objectValue = <T1 extends O>(obj: T1): T1[keyof T1] => {
	const arr = ObjV(obj)
	return arr?.length ? arrElement(arr) : null
}

//* Returns random objectEntry
export const objectEntry = <T1 extends O>(obj: T1): A<[keyof T1, T1[keyof T1]]> => {
	const arr = ObjE(obj)
	return arr?.length ? arrElement(arr) : ['', null]
}

export default {
	numsDeep,
	values,
	rand,
	range,
	num,
	powerOfTwo,
	boolean,
	arrGen,
	nums,
	arrs,
	arrGrow,
	example,
	arrExamples,
	arrSequence,
	arrChange,
	arrMerge,
	arrDouble,
	arrRepeats,
	arrShuffles,
	arrShuffleUnicals,
	arrDoubleSome,
	arrIndex,
	arrElement,
	arrValues,
	arrUnicals,
	arrShuffle,
	arrPart,
	arrDeepSomeValues,
	matchText,
	joinedStrings,
	textLines,
	objectKey,
	objectValue,
	objectEntry,
}
