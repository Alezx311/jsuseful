import { A, B, DeepA, N, O, Entry, S, Value } from './types'

export class Random {
	//* Returns random numbers arr
	public static numbersDeep = (len: N = 10, max: N = 4): DeepA<N> => {
		return this.numbers(len, max).map(v => {
			return v > 1 ? this.numbers(v, max) : v
		})
	}
	//* Returns random values
	public static values = (arr: A): A => this.array(10).map(v => this.arrayElement(arr))

	//* Returns random range
	public static range(min: N = 0.01, max: N = 0.99, size: N = 2): N {
		return Number((Math.random() * (max - min) + min).toFixed(size))
	}

	//* Random integer
	public static number(min: N = 1, max: N = 100): N {
		return ~~(min + Math.random() * (max + 1 - min))
	}

	//* Returns random power of two
	public static powerOfTwo(min: N = 1, max: N = 10): N {
		return 2 ** ~~this.number(min, max)
	}

	//* Boolean with given chance
	public static boolean(chance: N = 50): B {
		return this.number(1, 100) > chance
	}

	//* Returns random arr, can create element from given callback
	public static array(size: N = 10, cb = () => this.number()): A<N> {
		return Array(size)
			.fill(cb)
			.map(v => (v instanceof Function ? v() : v))
	}

	//* Returns random numbers arr
	public static numbers(size?: N, min?: N, max?: N): A<N> {
		return this.array(size, () => this.number(min, max))
	}

	//* Return Random arrays
	public static arrays = (size: N = 10, maxDeep: N = 5): DeepA<N> =>
		this.array(size).map(v => this.array(this.number(2, maxDeep)))

	//* Return Random arrayGrow
	public static arrayGrow = (arr: A, growSize: N = 2): A => {
		return Array(growSize)
			.fill(arr)
			.reduce((acc, v) => [...acc, v], [])
	}

	//* Return Random example
	public static example = (size: N = 10): A<N> => this.numbers(size)

	//* Return Random arrayExamples
	public static arrayExamples = (size: N = 10): A => this.array(size).map(v => this.example(size))

	//* Return Random arraySequence
	public static arraySequence = (start: N = 1, end: N = 100): A => this.array(end).map((v, i) => start + i)

	//* Return Random arrayChange
	public static arrayChange = (size: N = 10, arr: A): A =>
		this.arrayElement(this.array(size).map(v => this.arrayShuffle(arr)))

	//* Return Random arrayMerge
	public static arrayMerge = (...arrays: A): A => [...new Set(arrays.reduce((acc, arr) => [...acc, ...arr], []))]

	//* Return Random arrayDouble
	public static arrayDouble = (arr: A): A => [arr, arr]

	//* Return Random arrayRepeats
	public static arrayRepeats = (arr: A, repeats: N = 2): A => Array(repeats).fill(arr).flat(Infinity)

	//* Return Random arrayShuffles
	public static arrayShuffles = (arr: A, repeats: N = 2): A => this.arrayShuffle(this.arrayRepeats(arr, repeats))

	//* Return Random arrayShuffleUnicals
	public static arrayShuffleUnicals = (arr: A): A => this.arrayUnicals(this.arrayShuffle(arr))

	//* Return Random arrayDoubleSome

	public static arrayDoubleSome = (arr: A, chance: N = 50): A =>
		this.arrayShuffles(arr).map(v => (this.boolean(chance) ? [v, v] : v))

	//* Random index from given arr
	public static arrayIndex(arr: A): N {
		const endIndex = ~~arr?.length - 1
		return endIndex > 0 ? this.number(0, endIndex) : 0
	}

	//* Random Element from given arr
	public static arrayElement(arr: A): O {
		return arr?.[this.arrayIndex(arr)] ?? null
	}

	//* Array of random elements from given arr... GENIUS BLYAT
	public static arrayValues(arr: A, size: N = 2): A {
		return this.array(size, () => this.arrayElement(arr))
	}

	//* Only unical values
	public static arrayUnicals(arr: A): A {
		return [...new Set(arr)]
	}

	//* Shuffle elements
	public static arrayShuffle(arr: A): A {
		if (!arr?.length) {
			return []
		}

		return arr.sort(() => Math.random() - 0.5)
	}

	//* Random part of arr
	public static arrayPart(arr: A): A {
		if (!arr?.length) return []
		if (~~arr?.length < 3) return [arr[0]]

		const startIndex = this.number(0, arr?.length - 2)
		const endIndex = this.number(startIndex, arr?.length - 1)

		return arr.slice(startIndex, endIndex)
	}

	//* Transform random values of arr to another arr
	public static arrayDeepSomeValues(arr: A, chance?: N): DeepA<A> {
		return arr.reduce((acc, v) => {
			if (this.boolean(chance)) {
				return [...acc, [v, v]]
			} else {
				return [...acc, v]
			}
		}, [])
	}

	//* Return random string, created from given strings arr
	public static joinedStrings(parts: S[], size?: N): S {
		const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''))
		return this.arrayValues(filtered, size).join('')
	}

	//* Return random lines from given text
	public static textLines(text: S, size?: N): A<S> {
		return this.arrayValues(text.split('\n'), size)
	}

	//* Returns random objectKey
	public static objectKey(obj: O = {}): S {
		const arr = Object.keys(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}

	//* Returns random objectValue
	public static objectValue(obj: O = {}): Value {
		const arr = Object.values(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}

	//* Returns random objectEntry
	public static objectEntry(obj: O = {}): Entry {
		const arr = Object.entries(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}
}

export default {
	numbersDeep: Random.numbersDeep,
	values: Random.values,
	range: Random.range,
	number: Random.number,
	powerOfTwo: Random.powerOfTwo,
	boolean: Random.boolean,
	array: Random.array,
	numbers: Random.numbers,
	arrays: Random.arrays,
	arrayGrow: Random.arrayGrow,
	example: Random.example,
	arrayExamples: Random.arrayExamples,
	arraySequence: Random.arraySequence,
	arrayChange: Random.arrayChange,
	arrayMerge: Random.arrayMerge,
	arrayDouble: Random.arrayDouble,
	arrayRepeats: Random.arrayRepeats,
	arrayShuffles: Random.arrayShuffles,
	arrayShuffleUnicals: Random.arrayShuffleUnicals,
	arrayDoubleSome: Random.arrayDoubleSome,
	arrayIndex: Random.arrayIndex,
	arrayElement: Random.arrayElement,
	arrayValues: Random.arrayValues,
	arrayUnicals: Random.arrayUnicals,
	arrayShuffle: Random.arrayShuffle,
	arrayPart: Random.arrayPart,
	arrayDeepSomeValues: Random.arrayDeepSomeValues,
	joinedStrings: Random.joinedStrings,
	textLines: Random.textLines,
	objectKey: Random.objectKey,
	objectValue: Random.objectValue,
	objectEntry: Random.objectEntry,
}
