const { JsUseful, Arrays } = require('../lib/src')
const Verify = require('./verify')

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

const CONSTANT_VALUES = [
	{ desc: 'STR', cb: v => typeof v === 'string' },
	{ desc: 'BLN', cb: v => typeof v === 'boolean' },
	{ desc: 'NUM', cb: v => typeof v === 'number' },
	{ desc: 'RND', cb: v => typeof v === 'number' },
	{ desc: 'ARR', cb: v => typeof v === 'object' },
	{ desc: 'OBJ', cb: v => typeof v === 'object' },
	{ desc: 'ERR', cb: v => v instanceof Error },
	{ desc: 'BIG' },
	{ desc: 'FUNC', cb: v => typeof v === 'function' && typeof v() === 'number' },
]
	.map(Verify.mapper)
	.map(src => {
		describe(src.desc, () => {
			vDesc(src)
			vValue(src)
			vCallback(src)
		})
	})

const CONSTANTS_ARRAYS = [
	{ desc: 'TYPEOF' },
	{ desc: 'MUSIC_NOTES_CHARS' },
	{ desc: 'MUSIC_NOTES_BEMOLE' },
	{ desc: 'MUSIC_NOTES_SHARP' },
	{ desc: 'MUSIC_DURATION_CHARS' },
	{ desc: 'MUSIC_INTERVAL_CHARS' },
	{ desc: 'MUSIC_SCALES' },
	{ desc: 'COLOR_CLASS' },
	{ desc: 'COLOR_NAMES' },
	{ desc: 'COLOR_CODES' },
]
	.map(Verify.mapper)
	.map(src => {
		const { value, desc } = src
		describe(desc, () => {
			vDesc(src)
			vValue(src)
			vCallback(src)
			vArr(src)
		})
	})
