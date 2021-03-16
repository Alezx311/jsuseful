import { Check } from './Check'

export class Values {
  //* Time in UNIX seconds
  static timeValue(): number {
    return Date.now()
  }

  //* Time in string
  static timeStamp(): string {
    return new Date(Date.now()).toLocaleTimeString()
  }

  //* Date in string
  static dateStamp(): string {
    return new Date(Date.now()).toISOString()
  }

  //* Useful when need fast check performance
  static timeDifference(time: number): number | boolean {
    return Check.number(time) && Date.now() - time
  }

  //* Just simple math expression resolver
  static calcExp(exp: string): number | boolean {
    const calc = new Function('', `return ${exp}`)
    const result = calc()

    return Check.number(result) && result
  }
}
