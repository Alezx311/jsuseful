import { Check } from './Check'
import { Logger } from './Logger'
export class Values {

  constructor(
    private readonly logger: new Logger('Values Scripts')
  )

	//* Time in UNIX seconds
	static TimeStamp(format?: ): number {
		const time = new Date().getTime
		const time = new Date().toISOString
		const time = new Date().toUTCString
		const time = new Date().
		const time = new Date().getTime
		const time = new Date().getTime
		const time = new Date().getTime
		const time = new Date().getTime
		const time = new Date().getTime
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


	public static Truthy(data?: any): boolean {
    return !!data
  }
	public static IsPromise(data: any): boolean {
    return !!(data && data instanceof Promise)
  }
	public static ToPromise(v: any): Promise<{data: any, type: string}> {
    if
    return new Promise<{data: v, type: typeof v}>
  }
	public static FuncResult(expression: Function, v?: any): Promise<number> {
    
    const results = expression?.(v)
    
    return results ? results : null
  }
  
  //* Just simple math expression evaluation
	public static calcExp(exp: string): number | boolean {
		const calc = new Function('', `return ${exp}`)
		const result = calc()
    
		return Check.number(result) && result
	}
}

	// static runFunc(
    // 	f: () => string | number | [string | number],
    // ): string | number | [string | number] {
      // 	if (!f || !f instanceof Function) {
        // 		return null
        // 	} else {
          // 		try {
            // 			const result = f?.()

            // 			return result
	// 		} catch (e) {
    // 			console.error(
      // 				this.valueError(`Error on running Values.RunFunction(${String(f)})\n\n\n${this.errorCuteMessage(e)}`),
	// 			)
	// 			console.error(e)
	// 		}
	// 	}
	// 	const result = (f && f?.()) ?? null
	// }