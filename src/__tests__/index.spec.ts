import * as moduleTotal from '../index'
import moduleDefault from '../index'
import { JsUseful as moduleNamed, Errors, Constants, Randoms, Messages, Usefuls } from '../index'

describe('JsUseful default import is defined', () => {
	it('Should be defined', () => {
		const value = moduleDefault
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')
		expect(value).toHaveProperty('Constants')
		expect(value).toHaveProperty('Errors')
		expect(value).toHaveProperty('Usefuls')
		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('JsUseful named import is defined', () => {
	it('Should be defined', () => {
		const value = moduleNamed
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')
		expect(value).toHaveProperty('Constants')
		expect(value).toHaveProperty('Errors')
		expect(value).toHaveProperty('Usefuls')
		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('JsUseful total import is defined', () => {
	it('Should be defined', () => {
		const value = moduleTotal
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')
		expect(value).toHaveProperty('Constants')
		expect(value).toHaveProperty('Errors')
		expect(value).toHaveProperty('Usefuls')
		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('Errors import is defined', () => {
	it('Should be defined', () => {
		const value = Errors
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')

		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('Constants import is defined', () => {
	it('Should be defined', () => {
		const value = Constants
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')

		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('Randoms import is defined', () => {
	it('Should be defined', () => {
		const value = Randoms
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')

		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('Messages import is defined', () => {
	it('Should be defined', () => {
		const value = Messages
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')

		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})

describe('Usefuls import is defined', () => {
	it('Should be defined', () => {
		const value = Usefuls
		expect(value).toBeDefined()
		expect(typeof value).toBe('object')

		const KEYS = Object.keys(value)
		expect(KEYS.length).toBeGreaterThan(0)
	})
})
