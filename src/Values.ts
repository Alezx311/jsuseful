import { B, N, S } from './types'
export class Values {
	public static Types = [
		'ANY',
		'UNK',
		'NVR',
		'VOI',
		'UND',
		'NULL',
		'IS',
		'OMIT',
		'NOT',
		'PropsOr',
		'PropsAnd',
		'B',
		'S',
		'N',
		'A',
		'AFilt',
		'O',
		'Obj',
		'ObjFilt',
		'P',
		'F',
		'RESULT',
		'KEYS',
		'VALUE',
		'TYPE',
		'EMP',
		'TKREQ',
		'OR',
		'AND',
		'OPT',
		'INSTANCEOF',
		'NOT_NULL',
		'IFC',
		'ENM',
	]

	public static DateNow(): N {
		return Date.now()
	}

	public static DateValue(): Date {
		return new Date(this.DateNow())
	}

	//* Time in UNIX seconds
	public static DateStamp(): S {
		const date = this.DateValue().toISOString()
		return `${date}`
	}

	//* Time in string
	public static TimeStamp(): S {
		const date = this.DateValue().toLocaleTimeString()
		return `${date}`
	}

	//* Useful when need fast check performance
	public static TimeDifference(time: N): N {
		return this.DateNow() - ~~time
	}

	//* Just simple math expression Date
	public static CalcExp(exp: S): N | B {
		const calc = new Function('', `return ${exp}`)
		return calc()
	}
}

export default {
	DateNow: Values.DateNow,
	DateValue: Values.DateValue,
	DateStamp: Values.DateStamp,
	TimeStamp: Values.TimeStamp,
	TimeDifference: Values.TimeDifference,
	CalcExp: Values.CalcExp,
}
