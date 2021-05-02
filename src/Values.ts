import { Check } from './Check'
// import { Logger } from './Logger'
export class Values {
	// constructor(
	//   private readonly logger: new Logger('Values Scripts')
	// )

	//* Time in UNIX seconds
	static DateStamp(): string {
		const date = new Date(Date.now())

		// return date.getTime
		// return date.toISOString()
		// return date.toUTCString

		return date.toISOString()
	}

	//* Time in string
	static TimeStamp(): string {
		return new Date(Date.now()).toLocaleTimeString()
	}

	//* Useful when need fast check performance
	static TimeDifference(time: number): number | boolean {
		return Check.number(time) && Date.now() - time
	}

	// public static Truthy(data?: any): boolean {
	//   return !!data
	// }
	// public static IsPromise(data: any): boolean {
	//   return !!(data && data instanceof Promise)
	// }
	// public static ToPromise(v: any): Promise<{data: any, type: string}> {
	//   if
	//   return new Promise<{data: v, type: typeof v}>
	// }
	// public static FuncResult(expression: Function, v?: any): Promise<number> {

	//   const results = expression?.(v)

	//   return results ? results : null
	// }

	//* Just simple math expression evaluation
	public static CalcExp(exp: string): number | boolean {
		const calc = new Function('', `return ${exp}`)
		const result = calc()

		return Check.number(result) && result
	}
}
