export class Values {
	public static DateNow(): number {
		return Date.now()
	}

	public static DateValue(): Date {
		return new Date(this.DateNow())
	}

	//* Time in UNIX seconds
	public static DateStamp(): string {
		const date = this.DateValue().toISOString()
		return `${date}`
	}

	//* Time in string
	public static TimeStamp(): string {
		const date = this.DateValue().toLocaleTimeString()
		return `${date}`
	}

	//* Useful when need fast check performance
	public static TimeDifference(time: number): number {
		return this.DateNow() - ~~time
	}

	//* Just simple math expression evaluation
	public static CalcExp(exp: string): number | boolean {
		const calc = new Function('', `return ${exp}`)
		return calc()
	}
}
