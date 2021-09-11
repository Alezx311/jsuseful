export type AnyValue = any
export type AnyArray = any[]

export class Random {
	//* Returns random numbers arr
	public static numbersDeep = (len = 10, max = 4): (number | number[])[] =>
		this.numbers(len, max).map(v => (v > 1 ? this.numbers(v, max) : v))

	//* Returns random values
	public static values = (arr: AnyArray): AnyArray => this.array(10).map(v => this.arrayElement(arr))

	//* Returns random range
	public static range(min = 0.01, max = 0.99, size = 2): number {
		return Number((Math.random() * (max - min) + min).toFixed(size))
	}

	//* Random integer
	public static number(min = 1, max = 100): number {
		return ~~(min + Math.random() * (max + 1 - min))
	}

	//* Returns random power of two
	public static powerOfTwo(min = 1, max = 10): number {
		return 2 ** ~~this.number(min, max)
	}

	//* Boolean with given chance
	public static boolean(chance = 50): boolean {
		return this.number(1, 100) > chance
	}

	//* Returns random arr, can create element from given callback
	public static array(size: number = 10, cb = () => this.number()): AnyArray {
		return Array(size)
			.fill(cb)
			.map(v => (v instanceof Function ? v() : v))
	}

	//* Returns random numbers arr
	public static numbers(size?: number, min?: number, max?: number): number[] {
		return this.array(size, () => this.number(min, max))
	}

	//* Return Random arrays
	public static arrays = (size = 10, maxDeep = 5): AnyArray =>
		this.array(size).map(v => this.array(this.number(2, maxDeep)))

	//* Return Random arrayGrow
	public static arrayGrow = (arr: AnyArray, growSize = 2): AnyArray => {
		return Array(growSize)
			.fill(arr)
			.reduce((acc, v) => [...acc, v], [])
	}

	//* Return Random example
	public static example = (size = 10): number[] => this.numbers(size)

	//* Return Random arrayExamples
	public static arrayExamples = (size = 10): AnyArray => this.array(size).map(v => this.example(size))

	//* Return Random arraySequence
	public static arraySequence = (start = 1, end = 100): AnyArray => this.array(end).map((v, i) => start + i)

	//* Return Random arrayChange
	public static arrayChange = (size = 10, arr: AnyArray): AnyArray =>
		this.arrayElement(this.array(size).map(v => this.arrayShuffle(arr)))

	//* Return Random arrayMerge
	public static arrayMerge = (...arrays: AnyArray): AnyArray => [
		...new Set(arrays.reduce((acc, arr) => [...acc, ...arr], [])),
	]

	//* Return Random arrayDouble
	public static arrayDouble = (arr: AnyArray): AnyArray => [arr, arr]

	//* Return Random arrayRepeats
	public static arrayRepeats = (arr: AnyArray, repeats = 2): AnyArray => Array(repeats).fill(arr).flat(Infinity)

	//* Return Random arrayShuffles
	public static arrayShuffles = (arr: AnyArray, repeats = 2): AnyArray =>
		this.arrayShuffle(this.arrayRepeats(arr, repeats))

	//* Return Random arrayShuffleUnicals
	public static arrayShuffleUnicals = (arr: AnyArray): AnyArray => this.arrayUnicals(this.arrayShuffle(arr))

	//* Return Random arrayDoubleSome

	public static arrayDoubleSome = (arr: AnyArray, chance = 50): AnyArray =>
		this.arrayShuffles(arr).map(v => (this.boolean(chance) ? [v, v] : v))

	//* Random index from given arr
	public static arrayIndex(arr: AnyArray): number {
		const endIndex = ~~arr?.length - 1
		return endIndex > 0 ? this.number(0, endIndex) : 0
	}

	//* Random Element from given arr
	public static arrayElement(arr: AnyArray): AnyValue {
		return arr?.[this.arrayIndex(arr)] ?? null
	}

	//* Array of random elements from given arr... GENIUS BLYAT
	public static arrayValues(arr: AnyArray, size: number = 2): AnyArray {
		return this.array(size, () => this.arrayElement(arr))
	}

	//* Only unical values
	public static arrayUnicals(arr: AnyArray): AnyArray {
		return [...new Set(arr)]
	}

	//* Shuffle elements
	public static arrayShuffle(arr: AnyArray): AnyArray {
		if (!arr?.length) {
			return []
		}

		return arr.sort(() => Math.random() - 0.5)
	}

	//* Random part of arr
	public static arrayPart(arr: AnyArray): AnyArray {
		if (!arr?.length) return []
		if (~~arr?.length < 3) return [arr[0]]

		const startIndex = this.number(0, arr?.length - 2)
		const endIndex = this.number(startIndex, arr?.length - 1)

		return arr.slice(startIndex, endIndex)
	}

	//* Transform random values of arr to another arr
	public static arrayDeepSomeValues(arr: AnyArray, chance?: number): AnyArray {
		return arr.reduce((acc, v) => {
			if (this.boolean(chance)) {
				return [...acc, [v, v]]
			} else {
				return [...acc, v]
			}
		}, [])
	}

	//* Return random string, created from given strings arr
	public static joinedStrings(parts: string[], size?: number): string {
		const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''))
		return this.arrayValues(filtered, size).join('')
	}

	//* Return random lines from given text
	public static textLines(text: string, size?: number): string[] {
		return this.arrayValues(text.split('\n'), size)
	}

	//* Returns random objectKey
	public static objectKey(obj = {}): string {
		const arr = Object.keys(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}

	//* Returns random objectValue
	public static objectValue(obj = {}): AnyValue {
		const arr = Object.values(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}

	//* Returns random objectEntry
	public static objectEntry(obj = {}): [string, any] {
		const arr = Object.entries(obj)
		return arr?.length ? this.arrayElement(arr) : null
	}
}

export default Random
