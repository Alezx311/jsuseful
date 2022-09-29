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
const RANDOM_CONSTANTS = [
	{ desc: 'RANDOM_ARRAY_SIZE' },
	{ desc: 'RANDOM_MIN' },
	{ desc: 'RANDOM_MAX' },
	{ desc: 'RANDOM_CONSTANTS_SOURCES' },
	{ desc: 'RANDOM_NUM' },
	{ desc: 'RANDOM_BOOL' },
	{ desc: 'RANDOM_INT' },
	{ desc: 'RANDOM_STR' },
	{ desc: 'RANDOM_SRC' },
	{ desc: 'RANDOM_ARR' },
	{ desc: 'RANDOM_OBJ' },
	{ desc: 'RANDOM_TEXT' },
	{ desc: 'RANDOM_VALUES_SOURCES' },
	{ desc: 'random' },
	{ desc: 'randomBool' },
	{ desc: 'randomNum' },
	{ desc: 'randomInt' },
	{ desc: 'randomCoin' },
	{ desc: 'randomStr' },
	{ desc: 'randomArr' },
	{ desc: 'randomMany' },
	{ desc: 'randomIndex' },
	{ desc: 'randomElement' },
	{ desc: 'randomSort' },
	{ desc: 'randomShuffle' },
	{ desc: 'randomSource' },
	{ desc: 'randomObject' },
	{ desc: 'randomKey' },
	{ desc: 'randomValue' },
	{ desc: 'randomEntry' },
	{ desc: 'RANDOM_EXAMPLES_SOURCES' },
	{ desc: 'genArr' },
	{ desc: 'genNums' },
	{ desc: 'genSources' },
	{ desc: 'randomTypeOf' },
	{ desc: 'randomSourceByType' },
	{ desc: 'randomMusicNoteChar' },
	{ desc: 'randomMusicNoteBemole' },
	{ desc: 'randomMusicNoteSharp' },
	{ desc: 'randomMusicScale' },
	{ desc: 'randomMusicDurationChar' },
	{ desc: 'randomMusicIntervalChar' },
	{ desc: 'randomMusicOctave' },
	{ desc: 'randomMusicMidiIndex' },
	{ desc: 'randomMusicValues' },
	{ desc: 'randomColorClassname' },
	{ desc: 'randomColorName' },
	{ desc: 'randomColorCode' },
	{ desc: 'randomColorValues' },
	{ desc: 'float' },
	{ desc: 'number' },
	{ desc: 'powerOfTwo' },
	{ desc: 'numbersDeep' },
	{ desc: 'values' },
	{ desc: 'boolean' },
	{ desc: 'array' },
	{ desc: 'numbers' },
	{ desc: 'arrays' },
	{ desc: 'arrayGrow' },
	{ desc: 'arraySequence' },
	{ desc: 'arrayChange' },
	{ desc: 'arrayMerge' },
	{ desc: 'arrayDouble' },
	{ desc: 'arrayRepeats' },
	{ desc: 'arrayIndex' },
	{ desc: 'arrayElement' },
	{ desc: 'arrayElements' },
	{ desc: 'arrayUnicals' },
	{ desc: 'arrayShuffle' },
	{ desc: 'arrayPart' },
	{ desc: 'arrayDeepSomeValues' },
	{ desc: 'joinedStrings' },
	{ desc: 'objectKey' },
	{ desc: 'objectValue' },
	{ desc: 'objectEntry' },
	{ desc: 'RANDOM_ARRAY_SIZE' },
	{ desc: 'RANDOM_MIN' },
	{ desc: 'RANDOM_MAX' },
	{ desc: 'RANDOM_CONSTANTS_SOURCES' },
	{ desc: 'RANDOM_NUM' },
	{ desc: 'RANDOM_BOOL' },
	{ desc: 'RANDOM_INT' },
	{ desc: 'RANDOM_STR' },
	{ desc: 'RANDOM_SRC' },
	{ desc: 'RANDOM_ARR' },
	{ desc: 'RANDOM_OBJ' },
	{ desc: 'RANDOM_TEXT' },
	{ desc: 'RANDOM_VALUES_SOURCES' },
	{ desc: 'RANDOM_EXAMPLES_SOURCES' },
]
	.map(mapper)
	.map(src => {
		const { value, desc } = src
		describe(desc, () => {
			vDesc(src)
			vValue(src)
		})
	})
