const { Values } = require('../lib/src')

describe('JsUseful.Values module tests', () => {
	it('Should return timeValue', () => {
		const result = Values.CalcExp('2+2')
		expect(result).toBe(4)
	})
})

describe('JsUseful.Values module tests', () => {
	it('Should return timeStamp', () => {
		const result = Values.TimeStamp()
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})
})

describe('JsUseful.Values module tests', () => {
	it('Should return dateStamp', () => {
		const result = Values.DateStamp()
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})
})

describe('JsUseful.Values module tests', () => {
	it('Should return timeDifference', () => {
		const result = Values.TimeDifference(Date.now() - 1000)
		expect(result).toBeGreaterThanOrEqual(1)
	})
})
