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
	{ desc: 'is' },
	{ desc: 'isF' },
	{ desc: 'isO' },
	{ desc: 'isN' },
	{ desc: 'isS' },
	{ desc: 'isA' },
	{ desc: 'isB' },
	{ desc: 'isE' },
	{ desc: 'isNull' },
	{ desc: 'isUndefined' },
	{ desc: 'isRegExp' },
	{ desc: 'isError' },
	{ desc: 'isDate' },
	{ desc: 'isSymbol' },
	{ desc: 'isLen' },
	{ desc: 'isTruthy' },
	{ desc: 'isOdd' },
	{ desc: 'isPalindrome' },
	{ desc: 'toS' },
	{ desc: 'toA' },
	{ desc: 'toO' },
	{ desc: 'toL' },
	{ desc: 'toJson' },
	{ desc: 'toTypeOf' },
	{ desc: 'toCallback' },
	{ desc: 'arrLastIndex' },
	{ desc: 'arrLast' },
	{ desc: 'arrFlat' },
	{ desc: 'arrUnical' },
	{ desc: 'arrUnicals' },
	{ desc: 'arrMax' },
	{ desc: 'arrMin' },
	{ desc: 'arrayQuickSort' },
	{ desc: 'arrShuffle' },
	{ desc: 'arrQuickSort' },
	{ desc: 'objAssign' },
	{ desc: 'objKeys' },
	{ desc: 'objValues' },
	{ desc: 'objEntries' },
	{ desc: 'objFrom' },
	{ desc: 'objCreate' },
	{ desc: 'getTimePerformance' },
	{ desc: 'timeStamp' },
	{ desc: 'timeISO' },
	{ desc: 'timeUTC' },
	{ desc: 'getSourceValues' },
]
	.map(mapper)
	.map(src => {
		const { value, desc } = src
		describe(desc, () => {
			vDesc(src)
			vValue(src)
		})
	})
