const { JsUseful } = require('../lib/src')

const cb = v => (v ? true : false)
const getValue = desc => JsUseful?.[desc]
const getType = desc => typeof JsUseful?.[desc]
const getValues = desc => ({ desc, value: getValue(desc), type: getType(desc), cb: cb })

const mapper = (src, index = 0) => {
	const values = getValues(src.desc)
	return { index, ...values, ...src }
}

const vModule = () =>
	describe('Is Module Defined', () => {
		it('Is Module Defined', () => {
			expect(JsUseful).toBeDefined()
		})
	})

const vDesc = ({ desc }) =>
	it('desc', () => {
		expect(desc).toBeDefined()
		expect(desc).not.toBeNull()
		expect(JsUseful).toHaveProperty(desc)
	})
const vValue = ({ value }) =>
	it('value', () => {
		expect(value).toBeDefined()
		expect(value).not.toBeNull()
	})

const vCallback = ({ cb, value }) =>
	it('callback', () => {
		if (typeof cb === 'function') {
			const result = cb(value)
			expect(result).toBe(true)
		}
	})

const vArr = ({ value }) =>
	it('value is array', () => {
		expect(typeof value).toBe('object')
		expect(Array.isArray(value)).toBe(true)
		expect(value.length).toBeGreaterThanOrEqual(0)
	})
const USEFUL_CONSTANTS = [
	{ desc: 'validate' },
	{ desc: 'toInfo' },
	{ desc: 'toJson' },
	{ desc: 'toTextBlock' },
	{ desc: 'matchChars' },
	{ desc: 'isConstantStyle' },
	{ desc: 'isStringLength' },
	{ desc: 'strToArray' },
	{ desc: 'toTextValues' },
	{ desc: 'toTitleCase' },
	{ desc: 'toValidChars' },
	{ desc: 'matchWords' },
	{ desc: 'replaceInvalidChars' },
	{ desc: 'isUpperCase' },
	{ desc: 'rxpFromChars' },
	{ desc: 'rxpFromChars2' },
	{ desc: 'dictionaryMapper' },
	{ desc: 'dictionaryCreate' },
	{ desc: 'dictionaryReplace' },
	{ desc: 'toRomanNumeral' },
]
	.map(mapper)
	.map(src => {
		const { value, desc } = src
		describe(desc, () => {
			vDesc(src)
			vValue(src)
		})
	})
