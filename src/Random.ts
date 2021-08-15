export class Random {
	//* Returns random range
	public static range(min?: number, max?: number, size?: number): number {
		if (!min) min = 0.01
		if (!max) max = 0.99
		if (!size) size = 2

		return Number((Math.random() * (max - min) + min).toFixed(size))
	}

	//* Returns random number
	public static number(min?: number, max?: number): number {
		if (!min) min = 1
		if (!max) max = 100

		return Math.floor(min + Math.random() * (max + 1 - min))
	}

	//* Returns random powerOfTwo
	public static powerOfTwo(min?: number, max?: number): number {
		if (!min) min = 1
		return 2 ** ~~this.number(min, max)
	}

	//* Returns random boolean
	public static boolean(chance?: number): boolean {
		if (!chance) chance = 50
		return this.number(1, 100) > chance
	}

	//* Returns random array
	public static array(size: number = 10, cb = () => this.number()): any[] {
		return Array(size)
			.fill(cb)
			.map(v => (v instanceof Function ? v() : v))
	}

	//* Returns random numbers
	public static numbers(size?: number, min?: number, max?: number): number[] {
		return this.array(size, () => this.number(min, max))
	}

	//* Returns random arrayIndex
	public static arrayIndex(array: any[]): number {
		return this.number(0, array.length - 1)
	}

	//* Returns random arrayElement
	public static arrayElement(array: any[]): any {
		return array[this.arrayIndex(array)]
	}

	//* Returns random arrayValues
	public static arrayValues(array: any[], size: number = 2): any[] {
		return this.array(size, () => this.arrayElement(array))
	}

	//* Returns random arrayUnicalscb && cb
	public static arrayUnicals(array: any[]): any[] {
		return Array.from(new Set([...array]))
	}

	//* Returns random arrayShuffle
	public static arrayShuffle(array: any[]): any[] {
		return array.sort(() => Math.random() - 0.5)
	}

	//* Return random part of array
	public static arrayPart(array: any[]): any[] {
		if ((array?.length ?? 0) < 3) {
			throw new Error('Invalid or too small array')
		}

		const startIndex = this.number(0, array.length - 2)
		const endIndex = this.number(startIndex, array.length - 1)

		return array.slice(startIndex, endIndex)
	}

	//* Return array with some deep values arrays
	public static arrayDeepSomeValues(array: any[], chance?: number): any[] {
		return [...array].reduce((acc, val) => {
			if (this.boolean(chance)) {
				return [...acc, [val, val]]
			} else {
				return [...acc, val]
			}
		})
	}

	//* Return random string, created from given strings array
	public static joinedStrings(parts: string[], size?: number): string {
		const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''))

		return this.arrayValues(filtered, size).join('')
	}

	//* Return random lines from given text
	public static textLines(text: string, size?: number): string[] {
		return this.arrayValues(text.split('\n'), size)
	}

	//* Returns random objectKey
	public static objectKey(obj: {}): string {
		return this.arrayElement(Object.keys(obj))
	}

	//* Returns random objectValue
	public static objectValue(obj: {}): any {
		return this.arrayElement(Object.values(obj))
	}

	//* Returns random objectEntry
	public static objectEntry(obj: {}): [string, any] {
		return this.arrayElement(Object.entries(obj))
	}
}

export default Random
