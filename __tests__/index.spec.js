const JsUseful = require('../lib/src')

describe('Index Module Test', () => {
	it('Should return Constants module', () => {
		expect(JsUseful.Constants).toBeDefined()
	})

	it('Should return Random module', () => {
		expect(JsUseful.Random).toBeDefined()
	})

	it('Should return Text module', () => {
		expect(JsUseful.Text).toBeDefined()
	})

	it('Should return Values module', () => {
		expect(JsUseful.Values).toBeDefined()
	})

	it('Should return Functions module', () => {
		expect(JsUseful.Functions).toBeDefined()
	})
})
