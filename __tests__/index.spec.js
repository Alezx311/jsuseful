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

describe('Index Module Test', () => {
	it('Main Module', () => {
		expect(JsUseful).toBeDefined()
	})

	it('All', () => {
		expect(JsUseful.All).toBeDefined()
		const keys = Object.keys(JsUseful.All)
		expect(keys.length).toBeGreaterThan(0)
		console.log(keys)
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

describe('Test all JsUseful keys', () => {
	const JSUSEFUL = [
		{ desc: 'errBasic' },
		{ desc: 'errType' },
		{ desc: 'errEval' },
		{ desc: 'errRange' },
		{ desc: 'errSyntax' },
		{ desc: 'errReference' },
		{ desc: 'ERROR_BASIC' },
		{ desc: 'ERROR_TYPE' },
		{ desc: 'ERROR_EVAL' },
		{ desc: 'ERROR_RANGE' },
		{ desc: 'ERROR_SYNTAX' },
		{ desc: 'ERROR_REFERENCE' },
		{ desc: 'ERROR_TYPE_NOT_STRING' },
		{ desc: 'ERROR_TYPE_NOT_ARRAY' },
		{ desc: 'ERROR_VALUE' },
		{ desc: 'ERROR_VALUE_NOT_DEFINED' },
		{ desc: 'ERROR_VALUE_NOT_TRUTHY' },
		{ desc: 'ERROR_LENGTH' },
		{ desc: 'ERROR_LENGTH_SHORT' },
		{ desc: 'ERROR_LENGTH_LARGE' },
		{ desc: 'STR' },
		{ desc: 'RND' },
		{ desc: 'BLN' },
		{ desc: 'NUM' },
		{ desc: 'ARR' },
		{ desc: 'OBJ' },
		{ desc: 'ERR' },
		{ desc: 'BIG' },
		{ desc: 'FUNC' },
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
		{ desc: 'All' },
		{ desc: 'Errors' },
		{ desc: 'Constants' },
		{ desc: 'Randoms' },
		{ desc: 'Messages' },
		{ desc: 'Useful' },
		{ desc: 'Validators' },
		{ desc: 'Converters' },
		{ desc: 'Arrays' },
		{ desc: 'Objects' },
		{ desc: 'Dates' },
		{ desc: 'Sources' },
	]
		.map(mapper)
		.map(src => {
			const { value, desc } = src
			vDesc(src)
			vValue(src)
		})
})
