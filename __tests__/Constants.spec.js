const { Constants } = require('../lib/src')

describe('JsUseful.Constants module tests', () => {
	it('Should return Constants', () => {
		expect(Constants).toBeDefined()
		expect(Constants.Notes?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.NotesAlternate?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.Scales?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.ColorClassnames?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.ColorNames?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.ColorCodes?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.DurationChars?.length).toBeGreaterThanOrEqual(1)
		expect(Constants.IntervalChars?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return notes', () => {
		const result = Constants.Notes
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return Alternate', () => {
		const result = Constants.NotesAlternate
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return Scales', () => {
		const result = Constants.Scales
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return ColorClassnames', () => {
		const result = Constants.ColorClassnames
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return ColorNames', () => {
		const result = Constants.ColorNames
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return ColorCodes', () => {
		const result = Constants.ColorCodes
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return DurationChars', () => {
		const result = Constants.DurationChars
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})

	it('Should return IntervalChars', () => {
		const result = Constants.IntervalChars
		expect(result?.length).toBeGreaterThanOrEqual(1)
	})
})
