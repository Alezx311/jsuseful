import { Check } from './Check'

export class Values {
  static timeValue(): number {
    return Date.now()
  }
  static timeStamp(): string {
    return new Date(Date.now()).toLocaleTimeString()
  }
  static dateStamp(): string {
    return new Date(Date.now()).toISOString()
  }
  static timeDifference(time_stamp: number): number | boolean {
    return Check.number(time_stamp) && Date.now() - time_stamp
  }
  static calcExp(exp: string): number | boolean {
    const calc = new Function('', `return ${exp}`)
    const result = calc()

    return Check.number(result) && result
  }
}
