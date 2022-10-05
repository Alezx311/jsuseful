import * as Errors from '../errors'

describe('Is Errors defined', () => {
	expect(Errors).toBeDefined()
})

describe('Errors create new', () => {
	it('errBasic', () => {
		const result = Errors.errBasic('Test')
		expect(result).toBeInstanceOf(Error)
		expect(result.message).toBe('Test')
	})
	it('errType', () => {
		const result = Errors.errType('Test')
		expect(result).toBeInstanceOf(TypeError)
		expect(result.message).toBe('Test')
	})
	it('errEval', () => {
		const result = Errors.errEval('Test')
		expect(result).toBeInstanceOf(EvalError)
		expect(result.message).toBe('Test')
	})
	it('errRange', () => {
		const result = Errors.errRange('Test')
		expect(result).toBeInstanceOf(RangeError)
		expect(result.message).toBe('Test')
	})
	it('errSyntax', () => {
		const result = Errors.errSyntax('Test')
		expect(result).toBeInstanceOf(SyntaxError)
		expect(result.message).toBe('Test')
	})
	it('errReference', () => {
		const result = Errors.errReference('Test')
		expect(result).toBeInstanceOf(ReferenceError)
		expect(result.message).toBe('Test')
	})
})

describe('Errors pre defined errors', () => {
	it('ERROR_BASIC', () => {
		const value = Errors.ERROR_BASIC
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_TYPE', () => {
		const value = Errors.ERROR_TYPE
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_EVAL', () => {
		const value = Errors.ERROR_EVAL
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_RANGE', () => {
		const value = Errors.ERROR_RANGE
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_SYNTAX', () => {
		const value = Errors.ERROR_SYNTAX
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_REFERENCE', () => {
		const value = Errors.ERROR_REFERENCE
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_TYPE_NOT_STRING', () => {
		const value = Errors.ERROR_TYPE_NOT_STRING
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_TYPE_NOT_ARRAY', () => {
		const value = Errors.ERROR_TYPE_NOT_ARRAY
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_VALUE', () => {
		const value = Errors.ERROR_VALUE
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_VALUE_NOT_DEFINED', () => {
		const value = Errors.ERROR_VALUE_NOT_DEFINED
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_VALUE_NOT_TRUTHY', () => {
		const value = Errors.ERROR_VALUE_NOT_TRUTHY
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_LENGTH', () => {
		const value = Errors.ERROR_LENGTH
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_LENGTH_SHORT', () => {
		const value = Errors.ERROR_LENGTH_SHORT
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
	it('ERROR_LENGTH_LARGE', () => {
		const value = Errors.ERROR_LENGTH_LARGE
		expect(value).toBeDefined()
		expect(value).toBeInstanceOf(Error)
		expect(typeof value.message).toBe('string')
	})
})
