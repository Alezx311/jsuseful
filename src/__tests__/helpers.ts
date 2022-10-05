import * as Constants from '../constants'
import * as Primitives from '../primitives'
import * as Randoms from '../randoms'
import * as Errors from '../errors'
import * as Messages from '../messages'
import * as Usefuls from '../usefuls'
import * as Validates from '../validates'
import * as JsUseful from '../index'
import { A, O } from '../types'

describe('Main Modules', () => {
	it('Is modules defined', () => {
		expect(Constants).toBeDefined()
		expect(Primitives).toBeDefined()
		expect(Randoms).toBeDefined()
		expect(Errors).toBeDefined()
		expect(Messages).toBeDefined()
		expect(Usefuls).toBeDefined()
		expect(Validates).toBeDefined()
		expect(JsUseful).toBeDefined()
	})
})

type tConstants = typeof Constants
type tErrors = typeof Errors
type tMessages = typeof Messages
type tRandoms = typeof Randoms
type tUsefuls = typeof Usefuls
type tValidates = typeof Validates
type tJsUseful = typeof JsUseful

type kConstants = keyof tConstants
type kErrors = keyof tErrors
type kMessages = keyof tMessages
type kRandoms = keyof tRandoms
type kUsefuls = keyof tUsefuls
type kValidates = keyof tValidates
type kJsUseful = keyof tJsUseful

//! <----- Helpers ----->
const isA = (v: any): v is A => Array.isArray(v)
const isO = (v: any): v is O => typeof v === 'object' && !!v && !isA(v)
const toTypeOf = (value: any) => (Constants.TYPEOF.includes(value) ? value : typeof value)
const toArray = (value: any) => (isA(value) ? value : [value])

//! <----- Array of Values ----->
const VALUES_CONSTANTS = Object.values(Constants)
const VALUES_ERRORS = Object.values(Errors)
const VALUES_MESSAGES = Object.values(Messages)
const VALUES_RANDOMS = Object.values(Randoms)
const VALUES_USEFULS = Object.values(Usefuls)
const VALUES_VALIDATES = Object.values(Validates)
const VALUES_TOTAL = Object.values(JsUseful)

//! <----- Array of Props ----->
const NAMES_CONSTANTS = Object.getOwnPropertyNames(Constants) as kConstants[]
const NAMES_ERRORS = Object.getOwnPropertyNames(Errors) as kErrors[]
const NAMES_MESSAGES = Object.getOwnPropertyNames(Messages) as kMessages[]
const NAMES_RANDOMS = Object.getOwnPropertyNames(Randoms) as kRandoms[]
const NAMES_USEFULS = Object.getOwnPropertyNames(Usefuls) as kUsefuls[]
const NAMES_VALIDATES = Object.getOwnPropertyNames(Validates) as kValidates[]
const NAMES_TOTAL = Object.getOwnPropertyNames(JsUseful) as kJsUseful[]
const NAMES = [
	...new Set([
		...NAMES_CONSTANTS,
		...NAMES_ERRORS,
		...NAMES_MESSAGES,
		...NAMES_RANDOMS,
		...NAMES_USEFULS,
		...NAMES_VALIDATES,
		...NAMES_TOTAL,
	]),
] as kJsUseful[]
//! <----- Array of { prop, desc } ----->
const DESC = [
	...NAMES_CONSTANTS.map(prop => ({ prop, value: Constants[prop], desc: `Constants -> ${prop}` })),
	...NAMES_ERRORS.map(prop => ({ prop, value: Errors[prop], desc: `Errors -> ${prop}` })),
	...NAMES_MESSAGES.map(prop => ({ prop, value: Messages[prop], desc: `Messages -> ${prop}` })),
	...NAMES_RANDOMS.map(prop => ({ prop, value: Randoms[prop], desc: `Randoms -> ${prop}` })),
	...NAMES_USEFULS.map(prop => ({ prop, value: Usefuls[prop], desc: `Usefuls -> ${prop}` })),
	...NAMES_VALIDATES.map(prop => ({ prop, value: Validates[prop], desc: `Validates -> ${prop}` })),
	...NAMES.map(prop => ({ prop, value: JsUseful[prop], desc: `JsUseful -> ${prop}` })),
]

//! <----- Array of Sources ----->
const SOURCES = DESC.map(src => ({ ...src, type: typeof src.value }))
const FUNCTIONS = SOURCES.filter(src => src.type === 'function')
const VALUES = SOURCES.filter(src => src.type !== 'function')
const STRINGS = VALUES.filter(src => src.type === 'string')
const NUMBERS = VALUES.filter(src => src.type === 'number')
const OBJECTS = VALUES.filter(src => isO(src.value))
const ARRAYS = VALUES.filter(src => isA(src.value))
const STATS_TOTAL = {
	FUNCTIONS: {
		count: FUNCTIONS.length,
	},
	VALUES: {
		count: VALUES.length,
	},
	STRINGS: {
		count: STRINGS.length,
	},
	NUMBERS: {
		count: NUMBERS.length,
	},
	OBJECTS: {
		count: OBJECTS.length,
	},
	ARRAYS: {
		count: ARRAYS.length,
	},
	CONSTANTS: {
		values: VALUES_CONSTANTS.length,
		names: NAMES_CONSTANTS.length,
	},
	ERRORS: {
		values: VALUES_ERRORS.length,
		names: NAMES_ERRORS.length,
	},
	MESSAGES: {
		values: VALUES_MESSAGES.length,
		names: NAMES_MESSAGES.length,
	},
	RANDOMS: {
		values: VALUES_RANDOMS.length,
		names: NAMES_RANDOMS.length,
	},
	USEFULS: {
		values: VALUES_USEFULS.length,
		names: NAMES_USEFULS.length,
	},
	VALIDATES: {
		values: VALUES_VALIDATES.length,
		names: NAMES_VALIDATES.length,
	},
	TOTAL: {
		values: VALUES_TOTAL.length,
		names: NAMES_TOTAL.length,
		sources: SOURCES.length,
	},
}
const STATS_TOTAL_DESC = JSON.stringify(STATS_TOTAL, null, 2)

console.log(`JsUseful STATS:\n${STATS_TOTAL_DESC}`)

//! <----- Test Sources ----->

describe('Test values should be defined', () => {
	it(`Modules is defined`, () => {
		expect(Constants).toBeDefined()
		expect(Errors).toBeDefined()
		expect(Messages).toBeDefined()
		expect(Randoms).toBeDefined()
		expect(Usefuls).toBeDefined()
		expect(Validates).toBeDefined()
	})

	it(`JsUseful module is defined`, () => {
		expect(JsUseful).toBeDefined()
		expect(JsUseful.Constants).toBeDefined()
		expect(JsUseful.Errors).toBeDefined()
		expect(JsUseful.Messages).toBeDefined()
		expect(JsUseful.Randoms).toBeDefined()
		expect(JsUseful.Usefuls).toBeDefined()
		expect(JsUseful.Validates).toBeDefined()
	})

	it(`SOURCES is defined`, () => {
		expect(SOURCES).toBeDefined()
		expect(FUNCTIONS).toBeDefined()
		expect(VALUES).toBeDefined()
		expect(STRINGS).toBeDefined()
		expect(NUMBERS).toBeDefined()
		expect(OBJECTS).toBeDefined()
		expect(ARRAYS).toBeDefined()
		expect(STATS_TOTAL).toBeDefined()
		expect(STATS_TOTAL_DESC).toBeDefined()

		expect(SOURCES.length).toBeGreaterThan(0)
		expect(FUNCTIONS.length).toBeGreaterThan(0)
		expect(VALUES.length).toBeGreaterThan(0)
		expect(STRINGS.length).toBeGreaterThan(0)
		expect(NUMBERS.length).toBeGreaterThan(0)
		expect(OBJECTS.length).toBeGreaterThan(0)
		expect(ARRAYS.length).toBeGreaterThan(0)
		expect(STATS_TOTAL_DESC.length).toBeGreaterThan(0)
	})
})

//! <----- Is Property Name ----->

export const itConstantsProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Constants prop`, () => {
		expect(Constants).toHaveProperty(value)
	})
}

export const itErrorsProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Errors prop`, () => {
		expect(Errors).toHaveProperty(value)
	})
}

export const itMessageProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Messages prop`, () => {
		expect(Messages).toHaveProperty(value)
	})
}

export const itRandomProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Randoms prop`, () => {
		expect(Randoms).toHaveProperty(value)
	})
}

export const itUsefulProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Usefuls prop`, () => {
		expect(Usefuls).toHaveProperty(value)
	})
}

export const itValidateProp = (value: any) => {
	it(`Value is equal to some of JsUseful.Validates prop`, () => {
		expect(Validates).toHaveProperty(value)
	})
}

export const itJsUsefulProp = (value: any) => {
	it(`Value is equal to some of JsUseful prop`, () => {
		expect(JsUseful).toHaveProperty(value)
	})
}

//! <----- Is Property Value ----->
export const itConstantsValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Constants value`, () => {
		expect(VALUES_CONSTANTS).toContain(value)
	})
}

export const itErrorsValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Errors value`, () => {
		expect(VALUES_ERRORS).toContain(value)
	})
}

export const itMessageValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Messages value`, () => {
		expect(VALUES_MESSAGES).toContain(value)
	})
}

export const itRandomValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Randoms value`, () => {
		expect(VALUES_RANDOMS).toContain(value)
	})
}

export const itUsefulValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Usefuls value`, () => {
		expect(VALUES_USEFULS).toContain(value)
	})
}

export const itValidateValue = (value: any) => {
	it(`Value is equal to some of JsUseful.Validates value`, () => {
		expect(VALUES_VALIDATES).toContain(value)
	})
}

export const itJsUsefulValue = (value: any) => {
	it(`Value is equal to some of JsUseful prop`, () => {
		expect(VALUES_TOTAL).toContain(value)
	})
}

//! <----- Simple Value Tests ----->

//? Is provided value defined?
export const itDefined = (value: any) => {
	it(`Provided value ${value} should be defined`, () => {
		expect(value).toBeDefined()
	})
}

//? Is provided value truthy?
export const itTruthy = (value: any) => {
	it(`Provided value ${value} should be truthy`, () => {
		expect(value).toBeTruthy()
	})
}

//? Is provided value expected?
export const itBe = (value: any, expected: any) => {
	it(`Provided value ${value} should be strict equal to ${expected}`, () => {
		expect(value).toBe(expected)
	})
}

//? Is provided value equals to expected?
export const itEqual = (value: any, expected: any) => {
	it(`Provided value ${value} should be strict equal to ${expected}`, () => {
		expect(value).toEqual(expected)
	})
}

//? Is provided value strict equals to expected?
export const itEqualStrict = (value: any, expected: any) => {
	it(`Provided value ${value} should be strict equal to ${expected}`, () => {
		expect(value).toStrictEqual(expected)
	})
}

//? Is provided value not equal to any of provided values?
export const itNot = (value: any, ...expected: any) => {
	it(`Provided value ${value} should not equal to any of ${expected}`, () => {
		expect(expected).not.toContain(value)
	})
}

//! <----- Test Value Types ----->

//? Is provided value types equals?
export const itType = (value: any, ...expected: Array<any>) => {
	const type = toTypeOf(value)
	const types = [...new Set([...toArray(expected).map(toTypeOf)])]

	it(`Value type should be one of ${types}`, () => {
		expect(types).toContain(type)
	})
}

//? Is provided props are properties of value?
export const itElement = (value: any, elements: any) => {
	it(`Value should be contain ${elements}`, () => {
		expect(value).toContain(elements)
	})
}

//? Is provided props are properties of value?
export const itProperty = (value: any, props: string | string[]) => {
	it(`Value should have ${props} properties`, () => {
		expect(value).toHaveProperty(props)
	})
}

//? Is provided value type equal to string?
export const itTypeString = (value: any, minLength?: number, maxLength?: number, matches?: string | RegExp) => {
	const expected = typeof 'string'

	it(`Value ${value} type should be ${expected}`, () => {
		expect(typeof value).toBe(expected)
	})

	if (minLength && typeof minLength === 'number') {
		it(`Value length should be greater than ${minLength}`, () => {
			expect(value.length).toBeGreaterThanOrEqual(minLength)
		})
	}

	if (maxLength && typeof minLength === 'number') {
		it(`Value length should be less than ${maxLength}`, () => {
			expect(value.length).toBeLessThanOrEqual(maxLength)
		})
	}

	if (matches) {
		const arr = toArray(matches)
		const arrStr = arr.filter(String)
		const arrRxp = arr.filter(RegExp)

		if (arrStr.length) {
			arrStr.map((str: string) => {
				it(`Value should include ${str}`)
				expect(value.includes(str)).toBe(true)
			})
		}

		if (arrRxp.length) {
			arrRxp.map((rxp: RegExp) => {
				it(`Value should match ${rxp.toString()}`)
				expect(value).toMatch(rxp)
			})
		}
	}
}

//? Is provided value type equal to array?
export const itTypeArray = (
	value: any,
	minLength?: number,
	maxLength?: number,
	elements?: any,
	types?: string | string[]
) => {
	const expected = 'object'

	it(`Value ${value} type should be ${expected}`, () => {
		expect(typeof value).toBe(expected)
	})

	it(`Value ${value} should be array`, () => {
		expect(Array.isArray(value)).toBe(true)
	})

	if (minLength && typeof minLength === 'number') {
		it(`Value length should be greater than ${minLength}`, () => {
			expect(value.length).toBeGreaterThanOrEqual(minLength)
		})
	}

	if (maxLength && typeof minLength === 'number') {
		it(`Value length should be less than ${maxLength}`, () => {
			expect(value.length).toBeLessThanOrEqual(maxLength)
		})
	}

	if (elements) {
		it(`Value ${value} should contain elements`, () => {
			expect(value).toContain(elements)
		})
	}

	if (types) {
		const typesArr = toArray(types).filter((t: any) => Constants.TYPEOF.includes(t))

		it(`Value ${value}  elements should be ${types} type`, () => {
			value.map((el: any) => expect(typesArr).toContain(typeof el))
		})
	}
}

//? Is provided value type equal to object?
export const itTypeObject = (value: any, props?: string | string[]) => {
	const expected = 'object'

	it(`Value ${value} type should be ${expected}`, () => {
		expect(typeof value).toBe(expected)
	})

	it(`Value ${value} should be not an array`, () => {
		expect(Array.isArray(value)).toBe(false)
	})

	if (props) {
		it(`Provided value should have props ${props}`, () => {
			const propsArr = toArray(props)
			propsArr.map(prop => {
				expect(value).toHaveProperty(prop)
			})
		})
	}
}

//? Is provided value type equal to number?
export const itTypeNumber = (value: any, min?: number, max?: number) => {
	const expected = 'number'

	it(`Value ${value} type should be ${expected}`, () => {
		expect(typeof value).toBe(expected)
	})

	if (min && typeof min === 'number') {
		it(`Value should be greater than ${min}`, () => {
			expect(value).toBeGreaterThanOrEqual(min)
		})
	}

	if (max && typeof min === 'number') {
		it(`Value should be less than ${max}`, () => {
			expect(value).toBeLessThanOrEqual(max)
		})
	}
}

//? Is provided value type equal to boolean?
export const itTypeBoolean = (value: any, eq?: boolean) => {
	const expected = 'boolean'

	it(`Value ${value} type should be ${expected}`, () => {
		expect(typeof value).toBe(expected)
	})

	if (eq && typeof eq === 'boolean') {
		it(`Value ${value} type should equal to ${eq}`, () => {
			expect(value).toBe(eq)
		})
	}
}

//? Is provided value type equal to big int?
export const itTypeBig = (value: any) => {
	it(`Value type should be bigint`, () => {
		expect(typeof value).toBe('bigint')
	})
}

//? Is provided value equal to symbol?
export const itTypeSymbol = (value: any) => {
	it(`Value type should be symbol`, () => {
		expect(typeof value).toBe('symbol')
	})
}

//? Is provided value type equal to error?
export const itTypeError = (value: any) => {
	it(`Value ${value} type should be instance of Error`, () => {
		expect(value instanceof Error).toBe(true)
	})

	it(`Value ${value} should have message property`, () => {
		expect(value).toHaveProperty('message')
	})
}

//? Is provided value equal to function?
export const itTypeFunction = (value: any) => {
	it(`Value ${value} should be instance of Function`, () => {
		expect(value instanceof Function).toBe(true)
	})

	it(`Value ${value} type should be function`, () => {
		expect(typeof value).toBe('function')
	})
}

//? Is provided value element of Constants.TYPEOF?
export const itTypeOf = (value: any) => {
	itElement(Constants.TYPEOF, value)
}

//? Is provided value element of Constants.MUSIC_NOTES_CHARS?
export const itMusicNoteChar = (value: any) => {
	itElement(Constants.MUSIC_NOTES_CHARS, value)
}

//? Is provided value element of Constants.MUSIC_NOTES_BEMOLE?
export const itMusicNoteBemole = (value: any) => {
	itElement(Constants.MUSIC_NOTES_BEMOLE, value)
}

//? Is provided value element of Constants.MUSIC_NOTES_SHARP?
export const itMusicNoteSharp = (value: any) => {
	itElement(Constants.MUSIC_NOTES_SHARP, value)
}

//? Is provided value element of Constants.MUSIC_DURATION_CHARS?
export const itMusicDurationChar = (value: any) => {
	itElement(Constants.MUSIC_DURATION_CHARS, value)
}

//? Is provided value element of Constants.MUSIC_INTERVAL_CHARS?
export const itMusicIntervalChar = (value: any) => {
	itElement(Constants.MUSIC_INTERVAL_CHARS, value)
}

//? Is provided value element of Constants.MUSIC_SCALES?
export const itMusicScale = (value: any) => {
	itElement(Constants.MUSIC_SCALES, value)
}

//? Is provided value element of Constants.COLOR_CLASS?
export const itColorClass = (value: any) => {
	itElement(Constants.COLOR_CLASS, value)
}

//? Is provided value element of Constants.COLOR_NAMES?
export const itColorNames = (value: any) => {
	itElement(Constants.COLOR_NAMES, value)
}

//? Is provided value element of Constants.COLOR_CODES?
export const itColorCodes = (value: any) => {
	itElement(Constants.COLOR_CODES, value)
}

//? Is provided value source object with all required props?
export const itTypeSource = (src: any) => {
	itProperty(src, ['value', 'type', 'name', 'desc'])

	const value = src?.value
	const type = src?.type
	const name = src?.name
	const desc = src?.desc

	it('Provided source properties must be a valid string', () => {
		expect(typeof type).toBe('string')
		expect(typeof name).toBe('string')
		expect(typeof desc).toBe('string')

		expect(type.length).toBeGreaterThan(0)
		expect(name.length).toBeGreaterThan(0)
		expect(desc.length).toBeGreaterThan(0)
	})

	it('Provided source.type should equal to typeof source.value property', () => {
		expect(typeof value).toBe(type)
	})
}

//? Is provided value greater than provided number?
export const itNumGreater = (value: any, expected: any) => {
	it('Value and expected should be number', () => {
		expect(typeof value).toBe('number')
		expect(typeof expected).toBe('number')
	})

	it(`Provided value ${value} should be greater than expected ${expected}`, () => {
		expect(value).toBeGreaterThan(expected)
	})
}

//? Is provided value less than provided number?
export const itNumLess = (value: any, expected: any) => {
	it('Value and expected should be number', () => {
		expect(typeof value).toBe('number')
		expect(typeof expected).toBe('number')
	})

	it(`Provided value ${value} should be less than expected ${expected}`, () => {
		expect(value).toBeLessThan(expected)
	})
}

//? Is provided value number like expected +- diff?
export const itNumBetween = (value: any, expected: any, diff: number = 1) => {
	it(`Provided value ${value} should be number like expected ${expected}`, () => {
		expect(typeof value).toBe('number')
		expect(typeof expected).toBe('number')
		expect(typeof diff).toBe('number')
	})

	it('Provided Value should be greater than expected - min', () => {
		expect(value).toBeGreaterThanOrEqual(expected - diff)
	})

	it('Provided Value should be less than expected + min', () => {
		expect(value).toBeLessThanOrEqual(expected + diff)
	})
}

//? Is provided value valid array?
export const itArray = (
	value: any,
	minLength?: number,
	maxLength?: number,
	types?: string | string[],
	elements?: any
) => {
	it('Provided value should be defined', () => {
		expect(value).toBeDefined()
	})

	it(`Provided value should be array`, () => {
		expect(Array.isArray(value)).toBe(true)
	})

	if (minLength) {
		it(`Provided array should have length greater than ${minLength}`, () => {
			expect(value.length).toBeGreaterThanOrEqual(minLength)
		})
	}

	if (maxLength) {
		it(`Provided array should have length less than ${maxLength}`, () => {
			expect(value.length).toBeLessThanOrEqual(maxLength)
		})
	}

	if (types) {
		const expectedTypes = toArray(types)
		it('All array elements should be equal to provided types', () => {
			value.map((v: any) => expect(expectedTypes).toContain(typeof v))
		})
	}

	if (elements) {
		it(`Provided array should have contain required elements ${elements}`, () => {
			expect(value).toContain(elements)
		})
	}
}

//? Is provided value element of array?
export const itArrayElement = (element: any, array: Array<any>) => {
	itArray(array)

	it('Provided array should contain value', () => {
		expect(array).toContain(element)
	})
}

//! <----- Described tests ----->

export const describeSources = () => {
	describe(`Is Module Sources`, () => {
		SOURCES.map(src => {
			it(`Source of ${src.desc}`, () => {
				expect(src).toHaveProperty('value')
				expect(src).toHaveProperty('type')
				expect(src).toHaveProperty('desc')
				expect(typeof src.value).toBe(src.type)
			})
		})
	})

	describe(`Is Module Functions`, () => {
		FUNCTIONS.map(src => {
			it(`Value of JsUseful -> ${src.desc} must be a Function type`)
			expect(typeof src.value).toBe('function')
			expect(typeof src.type).toBe('string')
			expect(typeof src.desc).toBe('string')
			expect(src.type).toBe(typeof src.value)
		})
	})

	describe(`Is Module Values`, () => {
		VALUES.map(src => {
			it(`Value of JsUseful -> ${src.desc} must be a not function type`)
			expect(typeof src.value).not.toBe('function')
			expect(typeof src.type).toBe('string')
			expect(typeof src.desc).toBe('string')
			expect(src.type).toBe(typeof src.value)
		})
	})

	describe(`Is Module Strings`, () => {
		STRINGS.map(src => {
			it(`Value of JsUseful -> ${src.desc} must be a String type`)
			expect(typeof src.value).toBe('string')
			expect(typeof src.type).toBe('string')
			expect(typeof src.desc).toBe('string')
			expect(src.type).toBe(typeof src.value)
		})

		describe(`Is Module Numbers`, () => {
			NUMBERS.map(src => {
				it(`Value of JsUseful -> ${src.desc} must be a Number type`)
				expect(typeof src.value).toBe('number')
				expect(typeof src.type).toBe('string')
				expect(typeof src.desc).toBe('string')
				expect(src.type).toBe(typeof src.value)
			})
		})

		describe(`Is Module Objects`, () => {
			OBJECTS.map(src => {
				it(`Value of JsUseful -> ${src.desc} must be a Object type`)
				expect(typeof src.value).toBe('object')
				expect(typeof src.type).toBe('string')
				expect(typeof src.desc).toBe('string')
				expect(src.type).toBe(typeof src.value)
			})
		})

		describe(`Is Module Arrays`, () => {
			ARRAYS.map(src => {
				it(`Value of JsUseful -> ${src.desc} must be a Array type`)
				expect(typeof src.value).toBe('array')
				expect(typeof src.type).toBe('string')
				expect(typeof src.desc).toBe('string')
				expect(src.type).toBe(typeof src.value)
			})
		})
	})
}

export const describeTotal = () => {
	describe('Constants', () => {
		itDefined(Constants.STR)
		itTypeString(Constants.STR)

		itDefined(Constants.RND)
		itTypeNumber(Constants.RND)

		itDefined(Constants.BLN)
		itTypeBoolean(Constants.BLN)

		itDefined(Constants.NUM)
		itTypeNumber(Constants.NUM)

		itDefined(Constants.ARR)
		itTypeArray(Constants.ARR)

		itDefined(Constants.OBJ)
		itTypeObject(Constants.OBJ)

		itDefined(Constants.ERR)
		itTypeError(Constants.ERR)

		itTypeBig(Constants.BIG)

		itTypeSymbol(Constants.SYM)

		itDefined(Constants.FUN)
		itTypeFunction(Constants.FUN)

		itArray(Constants.TYPEOF, 1, 100, 'string')
		itArray(Constants.MUSIC_NOTES_CHARS, 1, 100, 'string')
		itArray(Constants.MUSIC_NOTES_BEMOLE, 1, 100, 'string')
		itArray(Constants.MUSIC_NOTES_SHARP, 1, 100, 'string')
		itArray(Constants.MUSIC_DURATION_CHARS, 1, 100, 'string')
		itArray(Constants.MUSIC_INTERVAL_CHARS, 1, 100, 'string')
		itArray(Constants.MUSIC_SCALES, 1, 100, 'string')
		itArray(Constants.COLOR_CLASS, 1, 100, 'string')
		itArray(Constants.COLOR_NAMES, 1, 100, 'string')
		itArray(Constants.COLOR_CODES, 1, 100, 'string')
	})

	describe('Randoms', () => {
		itTypeFunction(Randoms.rand)
		itTypeFunction(Randoms.randNum)
		itTypeFunction(Randoms.randInt)
		itTypeFunction(Randoms.randBool)
		itTypeFunction(Randoms.randCoin)
		itTypeFunction(Randoms.randStr)
		itTypeFunction(Randoms.randArr)
		itTypeFunction(Randoms.randMany)
		itTypeFunction(Randoms.randIndex)
		itTypeFunction(Randoms.randElement)
		itTypeFunction(Randoms.randSort)
		itTypeFunction(Randoms.randShuffle)
		itTypeFunction(Randoms.randSource)
		itTypeFunction(Randoms.randObj)
		itTypeFunction(Randoms.randKey)
		itTypeFunction(Randoms.randValue)
		itTypeFunction(Randoms.randEntry)
		itTypeFunction(Randoms.randTypeOf)
		itTypeFunction(Randoms.randColorClass)
		itTypeFunction(Randoms.randColorCode)
		itTypeFunction(Randoms.randColorName)
		itTypeFunction(Randoms.randMusicDuration)
		itTypeFunction(Randoms.randMusicInterval)
		itTypeFunction(Randoms.randMusicNoteBemole)
		itTypeFunction(Randoms.randMusicNoteChar)
		itTypeFunction(Randoms.randMusicNoteSharp)
		itTypeFunction(Randoms.randMusicScale)
		itTypeFunction(Randoms.randMusicOctave)
		itTypeFunction(Randoms.randMusicMidiIndex)
	})

	describe('Errors', () => {
		itTypeFunction(Errors.errBasic)
		itTypeFunction(Errors.errType)
		itTypeFunction(Errors.errEval)
		itTypeFunction(Errors.errRange)
		itTypeFunction(Errors.errSyntax)
		itTypeFunction(Errors.errReference)
		itTypeError(Errors.ERROR_BASIC)
		itTypeError(Errors.ERROR_TYPE)
		itTypeError(Errors.ERROR_EVAL)
		itTypeError(Errors.ERROR_RANGE)
		itTypeError(Errors.ERROR_SYNTAX)
		itTypeError(Errors.ERROR_REFERENCE)
		itTypeError(Errors.ERROR_TYPE_NOT_STRING)
		itTypeError(Errors.ERROR_TYPE_NOT_ARRAY)
		itTypeError(Errors.ERROR_VALUE)
		itTypeError(Errors.ERROR_VALUE_NOT_DEFINED)
		itTypeError(Errors.ERROR_VALUE_NOT_TRUTHY)
		itTypeError(Errors.ERROR_LENGTH)
		itTypeError(Errors.ERROR_LENGTH_SHORT)
		itTypeError(Errors.ERROR_LENGTH_LARGE)
	})

	describe('Messages', () => {
		itTypeFunction(Messages.validate)
		itTypeFunction(Messages.toInfo)
		itTypeFunction(Messages.toJson)
		itTypeFunction(Messages.toTextBlock)
		itTypeFunction(Messages.matchChars)
		itTypeFunction(Messages.isConstantStyle)
		itTypeFunction(Messages.isStringLength)
		itTypeFunction(Messages.strToArray)
		itTypeFunction(Messages.toTextValues)
		itTypeFunction(Messages.toTitleCase)
		itTypeFunction(Messages.toValidChars)
		itTypeFunction(Messages.matchWords)
		itTypeFunction(Messages.replaceInvalidChars)
		itTypeFunction(Messages.isUpperCase)
		itTypeFunction(Messages.rxpFromChars)
		itTypeFunction(Messages.rxpFromChars2)
		itTypeFunction(Messages.dictionaryMapper)
		itTypeFunction(Messages.dictionaryCreate)
		itTypeFunction(Messages.dictionaryReplace)
		itTypeFunction(Messages.toRomanNumeral)
	})

	describe('Usefuls', () => {
		itTypeFunction(Usefuls.is)
		itTypeFunction(Usefuls.isF)
		itTypeFunction(Usefuls.isO)
		itTypeFunction(Usefuls.isN)
		itTypeFunction(Usefuls.isS)
		itTypeFunction(Usefuls.isA)
		itTypeFunction(Usefuls.isB)
		itTypeFunction(Usefuls.isNull)
		itTypeFunction(Usefuls.isUnd)
		itTypeFunction(Usefuls.isRegExp)
		itTypeFunction(Usefuls.isError)
		itTypeFunction(Usefuls.isDate)
		itTypeFunction(Usefuls.isSymbol)
		itTypeFunction(Usefuls.isLen)
		itTypeFunction(Usefuls.isTruthy)
		itTypeFunction(Usefuls.isOdd)
		itTypeFunction(Usefuls.isPalindrome)
		itTypeFunction(Usefuls.toS)
		itTypeFunction(Usefuls.toA)
		itTypeFunction(Usefuls.toO)
		itTypeFunction(Usefuls.toL)
		itTypeFunction(Usefuls.toJson)
		itTypeFunction(Usefuls.toTypeOf)
		itTypeFunction(Usefuls.toCallback)
		itTypeFunction(Usefuls.arrLastIndex)
		itTypeFunction(Usefuls.arrLast)
		itTypeFunction(Usefuls.arrFlat)
		itTypeFunction(Usefuls.arrUnical)
		itTypeFunction(Usefuls.arrMax)
		itTypeFunction(Usefuls.arrMin)
		itTypeFunction(Usefuls.arrShuffle)
		itTypeFunction(Usefuls.arrQuickSort)
		itTypeFunction(Usefuls.objAssign)
		itTypeFunction(Usefuls.objKeys)
		itTypeFunction(Usefuls.objValues)
		itTypeFunction(Usefuls.objEntries)
		itTypeFunction(Usefuls.objFrom)
		itTypeFunction(Usefuls.objCreate)
		itTypeFunction(Usefuls.getTimePerformance)
		itTypeFunction(Usefuls.timeStamp)
		itTypeFunction(Usefuls.timeISO)
		itTypeFunction(Usefuls.timeUTC)
		itTypeFunction(Usefuls.getSourceValues)
	})

	describe('Validates', () => {
		itTypeString(Validates.V1)
		itTypeString(Validates.V2)
		itTypeObject(Validates.RESULT)
		itTypeFunction(Validates.getResults)
		itTypeFunction(Validates.validateEqual)
		itTypeFunction(Validates.validateTypes)
		itTypeFunction(Validates.validateProps)
	})

	describe('JsUseful', () => {
		SOURCES.map(src => {
			itProperty(JsUseful, src.prop)
		})
	})

	describe('Primitives', () => {
		itDefined(Primitives.STR_SRC)
		itTypeObject(Primitives.STR_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.BLN_SRC)
		itTypeObject(Primitives.BLN_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.NUM_SRC)
		itTypeObject(Primitives.NUM_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.OBJ_SRC)
		itTypeObject(Primitives.OBJ_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.BIG_SRC)
		itTypeObject(Primitives.BIG_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.SYM_SRC)
		itTypeObject(Primitives.SYM_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.FUN_SRC)
		itTypeObject(Primitives.FUN_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.UND_SRC)
		itTypeObject(Primitives.UND_SRC, ['value', 'type', 'is', 'random'])

		itDefined(Primitives.PRIMITIVE_SRC)
		itArray(Primitives.PRIMITIVE_SRC, 7, 9, 'object')

		itDefined(Primitives.randSrc)
		itTypeFunction(Primitives.randSrc)

		itDefined(Primitives.everyIs)
		itTypeFunction(Primitives.everyIs)

		itDefined(Primitives.everyFn)
		itTypeFunction(Primitives.everyFn)
	})
}
