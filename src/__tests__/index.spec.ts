import * as moduleTotal from '../index'
import moduleDefault from '../index'
import { JsUseful as moduleNamed } from '../index'

const { Errors, Constants, Randoms, Messages, Usefuls, Validates, Primitives } = moduleDefault

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

const modules = ['Errors', 'Constants', 'Randoms', 'Messages', 'Usefuls', 'Validates', 'Primitives']

describe('Modules is defined', () => {
	it('Should be defined', () => {
		modules.map(prop => {
			expect(moduleDefault).toHaveProperty(prop)
			expect(moduleNamed).toHaveProperty(prop)
			expect(moduleTotal).toHaveProperty(prop)
		})
	})
})
