import * as Usefuls from '../usefuls'

const STR = 'Some string value'
const NUM = 42
const ARR = [311, 'Some string element']
const OBJ = { STR, NUM, ARR }

describe('Usefuls -> is', () => {
	const prop = 'is'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.is

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(STR)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(null)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isF', () => {
	const prop = 'isF'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isF

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(() => true)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isO', () => {
	const prop = 'isO'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isO

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(OBJ)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isN', () => {
	const prop = 'isN'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isN

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(NUM)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isS', () => {
	const prop = 'isS'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isS

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(STR)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isA', () => {
	const prop = 'isA'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isA

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(ARR)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isB', () => {
	const prop = 'isB'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isB

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(false)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(null)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isError', () => {
	const prop = 'isError'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isError

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(new Error('Test'))
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isNull', () => {
	const prop = 'isNull'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isNull

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(null)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isUndefined', () => {
	const prop = 'isUndefined'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isUndefined

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(undefined)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isRegExp', () => {
	const prop = 'isRegExp'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isRegExp

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(new RegExp('test'))
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isDate', () => {
	const prop = 'isDate'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isDate

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(new Date())
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isSymbol', () => {
	const prop = 'isSymbol'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isSymbol

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(Symbol('Test'))
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isLen', () => {
	const prop = 'isLen'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isLen

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true on strings', () => {
		const result = value(STR)
		expect(result).toBe(true)
	})

	it('Result must be true on arrays', () => {
		const result = value(ARR)
		expect(result).toBe(true)
	})

	it('Result must be false on other types', () => {
		const result = value(false)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isTruthy', () => {
	const prop = 'isTruthy'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isTruthy

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(1)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(0)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isOdd', () => {
	const prop = 'isOdd'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isOdd

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(2)
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(1)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> isPalindrome', () => {
	const prop = 'isPalindrome'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.isPalindrome

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value('abba')
		expect(result).toBe(true)
	})

	it('Result must be false', () => {
		const result = value(STR)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> toS', () => {
	const prop = 'toS'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toS

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true on numbers', () => {
		const result = value(42)
		expect(typeof result).toBe('string')
		expect(result.length).toBeGreaterThan(0)
		expect(result).toBe('42')
	})

	it('Result must be true on other types', () => {
		const result = value(OBJ)
		expect(typeof result).toBe('string')
		expect(result.length).toBeGreaterThan(0)
	})
})

describe('Usefuls -> toA', () => {
	const prop = 'toA'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toA

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(42)
		expect(Array.isArray(result)).toBe(true)
		expect(result.length).toBeGreaterThan(0)
	})

	it('Result must be same on array', () => {
		const result = value(ARR)
		expect(result).toEqual(ARR)
	})
})

describe('Usefuls -> toO', () => {
	const prop = 'toO'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toO

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(NUM)
		expect(typeof result).toBe('object')
		expect(Object.values(result)).toContain(NUM)
	})

	it('Result must be same on array', () => {
		const result = value(OBJ)
		expect(result).toEqual(OBJ)
	})
})

describe('Usefuls -> toL', () => {
	const prop = 'toL'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toL

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true on array', () => {
		const result = value(ARR)
		expect(result).toBe(ARR.length)
	})

	it('Result must be true on string', () => {
		const result = value(STR)
		expect(result).toBe(STR.length)
	})

	it('Result must be false on other types', () => {
		const result = value(42)
		expect(result).toBe(false)
	})
})

describe('Usefuls -> toJson', () => {
	const prop = 'toJson'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toJson

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true, and can be parsed back to original object', () => {
		const result = value(OBJ)
		expect(typeof result).toBe('string')
		expect(result.length).toBeGreaterThan(0)
		expect(JSON.parse(result)).toEqual(OBJ)
	})
})

describe('Usefuls -> toTypeOf', () => {
	const prop = 'toTypeOf'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toTypeOf

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be type of value', () => {
		const result = value(OBJ)
		expect(result).toBe('object')
	})

	it('Result must be type of value', () => {
		const result = value(STR)
		expect(result).toBe('string')
	})

	it('Result must be type of value', () => {
		const result = value(NUM)
		expect(result).toBe('number')
	})
})

describe('Usefuls -> toCallback', () => {
	const prop = 'toCallback'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.toCallback

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(42)
		expect(typeof result).toBe('function')
		expect(result()).toBe(42)
	})
})

describe('Usefuls -> arrLastIndex', () => {
	const prop = 'arrLastIndex'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrLastIndex

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(ARR)
		expect(result).toBe(ARR.length - 1)
	})
})

describe('Usefuls -> arrLast', () => {
	const prop = 'arrLast'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrLast

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(ARR)
		expect(result).toBe(ARR[ARR.length - 1])
	})
})

describe('Usefuls -> arrFlat', () => {
	const prop = 'arrFlat'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrFlat

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value([ARR])
		expect(result).toEqual(ARR)
	})
})

describe('Usefuls -> arrUnical', () => {
	const prop = 'arrUnical'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrUnical

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value([...ARR, ...ARR])
		expect(result).toEqual(ARR)
	})
})

describe('Usefuls -> arrMax', () => {
	const prop = 'arrMax'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrMax

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value([42, 7, 311])
		expect(result).toBe(311)
	})
})

describe('Usefuls -> arrMin', () => {
	const prop = 'arrMin'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrMin

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value([42, 7, 311])
		expect(result).toBe(7)
	})
})

describe('Usefuls -> arrShuffle', () => {
	const prop = 'arrShuffle'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrShuffle

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(ARR)
		expect(Array.isArray(result)).toBe(true)
	})
})

describe('Usefuls -> arrQuickSort', () => {
	const prop = 'arrQuickSort'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.arrQuickSort

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(ARR)
		expect(Array.isArray(result)).toBe(true)
	})
})

describe('Usefuls -> objAssign', () => {
	const prop = 'objAssign'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objAssign

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(OBJ, { key2: 'value2' })
		expect(result).toEqual({ ...OBJ, key2: 'value2' })
	})
})

describe('Usefuls -> objKeys', () => {
	const prop = 'objKeys'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objKeys

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(OBJ)
		expect(Object.keys(OBJ)).toEqual(result)
	})
})

describe('Usefuls -> objValues', () => {
	const prop = 'objValues'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objValues

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(OBJ)
		expect(Object.values(OBJ)).toEqual(result)
	})
})

describe('Usefuls -> objEntries', () => {
	const prop = 'objEntries'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objEntries

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(OBJ)
		expect(Object.entries(OBJ)).toEqual(result)
	})
})

describe('Usefuls -> objFrom', () => {
	const prop = 'objFrom'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objFrom

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(Object.entries(OBJ))
		expect(result).toEqual(OBJ)
	})
})

describe('Usefuls -> objCreate', () => {
	const prop = 'objCreate'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.objCreate

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(['key1'])
		expect(result).toHaveProperty('key1')
	})
})

describe('Usefuls -> getTimePerformance', () => {
	const prop = 'getTimePerformance'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.getTimePerformance

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value()
		expect(typeof result).toBe('number')
		expect(result).toBeGreaterThan(0)
		expect(result).toBeLessThan(performance.now())
	})
})

describe('Usefuls -> timeStamp', () => {
	const prop = 'timeStamp'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.timeStamp

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value()
		expect(typeof result).toBe('string')
	})
})

describe('Usefuls -> timeISO', () => {
	const prop = 'timeISO'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.timeISO

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value()
		expect(typeof result).toBe('string')
	})
})

describe('Usefuls -> timeUTC', () => {
	const prop = 'timeUTC'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.timeUTC

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value()
		expect(typeof result).toBe('string')
	})
})

describe('Usefuls -> getSourceValues', () => {
	const prop = 'getSourceValues'

	it('is defined', () => {
		expect(Usefuls).toHaveProperty(prop)
	})
	const value = Usefuls.getSourceValues

	it('Must be function', () => {
		expect(typeof value).toBe('function')
	})

	it('Result must be true', () => {
		const result = value(NUM)
		expect(typeof result).toBe('object')
	})
})
