import * as Constants from '../constants'

describe('Constants', () => {
	it('Should be defined', () => {
		expect(Constants).toBeDefined()
		expect(Constants).not.toBeNull()
		expect(Constants).not.toBeUndefined()

		expect(typeof Constants).toBe('object')
	})
})

describe('Constants -> STR', () => {
	it('Should be defined', () => {
		expect(Constants).toHaveProperty('STR')
	})

	const value = Constants.STR

	it('Should be string', () => {
		expect(typeof value).toBe('string')
		expect(value.length).toBeGreaterThan(0)
	})
})

describe('Constants -> NUM', () => {
	it('Should be defined', () => {
		expect(Constants).toHaveProperty('NUM')
	})

	const value = Constants.NUM

	it('Should be number', () => {
		expect(typeof value).toBe('number')
	})

	it('Should be greater than', () => {
		expect(value).toBeGreaterThan(0)
	})
})

describe('Constants -> ARR', () => {
	it('Should be defined', () => {
		expect(Constants).toHaveProperty('ARR')
	})

	const value = Constants.ARR

	it('Should be array', () => {
		expect(typeof value).toBe('object')
		expect(Array.isArray(value)).toBe(true)
		expect(value.length).toBeGreaterThan(0)
	})
})

describe('Constants -> OBJ', () => {
	it('Should be defined', () => {
		expect(Constants).toHaveProperty('OBJ')
	})

	const value = Constants.OBJ

	it('Should be object', () => {
		expect(typeof value).toBe('object')
	})
})

describe('Constants -> FUN', () => {
	it('Should be defined', () => {
		expect(Constants).toHaveProperty('FUN')
	})

	const value = Constants.FUN

	it('Should be function', () => {
		expect(typeof value).toBe('function')
		expect(value).toBeInstanceOf(Function)
	})
})
