import { Logs } from './Logger'

export default class Random {
  constructor(
    private readonly logs = Logs
  )

}



export class Random {
  constructor() {}

  //* Returns random range
  static range(min?: number, max?: number, size?: number): number {
    if (!min) min = 0.01
    if (!max) max = 0.99
    if (!size) size = 2

    return Number((Math.random() * (max - min) + min).toFixed(size))
  }

  //* Returns random number
  static number(min?: number, max?: number): number {
    if (!min) min = 1
    if (!max) max = 100

    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  //* Returns random powerOfTwo
  static powerOfTwo(min?: number, max?: number): number {
    if (!min) min = 1
    return 2 ** ~~this.number(min, max)
  }

  //* Returns random boolean
  static boolean(chance?: number): boolean {
    if (!chance) chance = 50
    return this.number(1, 100) > chance
  }

  //* Returns random array
  static array(size: number = 10, cb = () => this.number()): any[] {
    return Array(size)
      .fill(cb)
      .map(v => (v instanceof Function ? v() : v))
  }

  //* Returns random numbers
  static numbers(size?: number, min?: number, max?: number): number[] {
    return this.array(size, () => this.number(min, max))
  }

  //* Returns random arrayIndex
  static arrayIndex(array: any[]): number {
    return this.number(0, array.length - 1)
  }

  //* Returns random arrayElement
  static arrayElement(array: any[]): any {
    return array[this.arrayIndex(array)]
  }

  //* Returns random arrayValues
  static arrayValues(array: any[], size: number = 2): any[] {
    return this.array(size, () => this.arrayElement(array))
  }

  //* Returns random arrayUnicalscb && cb
  static arrayUnicals(array: any[]): any[] {
    return Array.from(new Set([...array]))
  }

  //* Returns random arrayShuffle
  static arrayShuffle(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5)
  }

  //* Return random part of array
  static arrayPart(array: any[]): any[] {
    if ((array?.length ?? 0) < 3) {
      throw new Error('Invalid or too small array')
    }

    const startIndex = this.number(0, array.length - 2)
    const endIndex = this.number(startIndex, array.length - 1)

    return array.slice(startIndex, endIndex)
  }

  //* Return array with some deep values arrays
  static arrayDeepSomeValues(array: any[], chance?: number): any[] {
    return [...array].reduce((acc, val) => {
      if (this.boolean(chance)) {
        return [...acc, [val, val]]
      } else {
        return [...acc, val]
      }
    })
  }

  //* Return random string, created from given strings array
  static joinedStrings(parts: string[], size?: number): string {
    const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''))

    return this.arrayValues(filtered, size).join('')
  }

  //* Return random lines from given text
  static textLines(text: string, size?: number): string[] {
    return this.arrayValues(text.split('\n'), size)
  }

  //* Returns random objectKey
  static objectKey(obj: {}): string {
    return this.arrayElement(Object.keys(obj))
  }

  //* Returns random objectValue
  static objectValue(obj: {}): any {
    return this.arrayElement(Object.values(obj))
  }

  //* Returns random objectEntry
  static objectEntry(obj: {}): [string, any] {
    return this.arrayElement(Object.entries(obj))
  }
}
