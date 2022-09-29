const { JsUseful } = require('../lib/src')
const { JSUSEFUL_KEYS, run } = require('./sources.test')

describe('JsUseful -> Keys', () => {
	run(JSUSEFUL_KEYS)
})

describe('Index Module Test', () => {
	it('Main Module', () => {
		expect(JsUseful).toBeDefined()
	})

	it('All', () => {
		expect(JsUseful.All).toBeDefined()
		const keys = Object.keys(JsUseful.All)
		expect(keys.length).toBeGreaterThan(0)
	})
	it('Errors', () => {
		expect(JsUseful.Errors).toBeDefined()
		expect(Object.keys(JsUseful.Errors).length).toBeGreaterThan(0)
	})
	it('Constants', () => {
		expect(JsUseful.Constants).toBeDefined()
		expect(Object.keys(JsUseful.Constants).length).toBeGreaterThan(0)
	})
	it('Randoms', () => {
		expect(JsUseful.Randoms).toBeDefined()
		expect(Object.keys(JsUseful.Randoms).length).toBeGreaterThan(0)
	})
	it('Messages', () => {
		expect(JsUseful.Messages).toBeDefined()
		expect(Object.keys(JsUseful.Messages).length).toBeGreaterThan(0)
	})
	it('Useful', () => {
		expect(JsUseful.Useful).toBeDefined()
		expect(Object.keys(JsUseful.Useful).length).toBeGreaterThan(0)
	})
	it('Validators', () => {
		expect(JsUseful.Validators).toBeDefined()
		expect(Object.keys(JsUseful.Validators).length).toBeGreaterThan(0)
	})
	it('Converters', () => {
		expect(JsUseful.Converters).toBeDefined()
		expect(Object.keys(JsUseful.Converters).length).toBeGreaterThan(0)
	})
	it('Arrays', () => {
		expect(JsUseful.Arrays).toBeDefined()
		expect(Object.keys(JsUseful.Arrays).length).toBeGreaterThan(0)
	})
	it('Objects', () => {
		expect(JsUseful.Objects).toBeDefined()
		expect(Object.keys(JsUseful.Objects).length).toBeGreaterThan(0)
	})
	it('Dates', () => {
		expect(JsUseful.Dates).toBeDefined()
		expect(Object.keys(JsUseful.Dates).length).toBeGreaterThan(0)
	})
	it('Sources', () => {
		expect(JsUseful.Sources).toBeDefined()
		expect(Object.keys(JsUseful.Sources).length).toBeGreaterThan(0)
	})
})
