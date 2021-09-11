const { Text } = require('../lib/src')

describe('JsUseful.Text module tests', () => {
	it('Should return text length check', () => {
		const result = Text.isLength(`1\n2\n3`)

		expect(result).toBe(true)
	})
})
