import { Check } from './Check'

export class Random {
  //* Returns random range
  static range(min: number = 0.01, max: number = 0.99, size: number = 2): number | boolean {
    return Check.number(min, max, size) && Number((Math.random() * (max - min) + min).toFixed(size))
  }

  //* Returns random number
  static number(min: number = 1, max: number = 100): number | boolean {
    return Check.number(min, max) && Math.floor(min + Math.random() * (max + 1 - min))
  }

  //* Returns random powerOfTwo
  static powerOfTwo(min: number = 1, max: number = 10): number | boolean {
    return Check.number(min, max) && 2 ** ~~this.number(min, max)
  }

  //* Returns random boolean
  static boolean(chance: number = 50): boolean {
    return Check.number(chance) && this.number(1, 100) > chance
  }

  //* Returns random array
  static array(size: number = 10, value = () => this.number()): any[] | boolean {
    return (
      Check.truthy(size, value) &&
      Array(size)
        .fill(value)
        .map(v => (v instanceof Function ? v() : v))
    )
  }

  //* Returns random numbers
  static numbers(min: number = 1, max: number = 100, size: number = 10): number[] | boolean {
    return Check.number(min, max, size) && this.array(size, () => this.number(min, max))
  }

  //* Returns random arrayIndex
  static arrayIndex(array: any[]): any {
    return Check.array(array) && this.number(0, array.length - 1)
  }

  //* Returns random arrayElement
  static arrayElement(array: any[]): any | boolean {
    return Check.array(array) && array[this.arrayIndex(array)]
  }

  //* Returns random arrayValues
  static arrayValues(array: any[], size: number = 10): any[] | boolean {
    return Check.array(array) && Check.number(size) && this.array(size, () => this.arrayElement(array))
  }

  //* Returns random arrayUnicals
  static arrayUnicals(array: any[]): any[] | boolean {
    return Check.array(array) && Array.from(new Set([...array]))
  }

  //* Returns random arrayShuffle
  static arrayShuffle(array: any[]): any[] | boolean {
    return Check.array(array) && array.sort(() => Math.random() - 0.5)
  }

  //* Returns random objectKey
  static objectKey(obj: object): string | boolean {
    return Check.object(obj) && this.arrayElement(Object.keys(obj))
  }

  //* Returns random objectValue
  static objectValue(obj: object): any | boolean {
    return Check.object(obj) && this.arrayElement(Object.values(obj))
  }

  //* Returns random objectEntry
  static objectEntry(obj: object): [string, any] | boolean {
    return Check.object(obj) && this.arrayElement(Object.entries(obj))
  }
}
