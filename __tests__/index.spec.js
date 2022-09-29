// const JsUseful = require('../lib/src')
const { JsUseful } = require('../lib/src')

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
	it.skip('Errors', () => {
		expect(JsUseful.Errors).toBeDefined()
		expect(Object.keys(JsUseful.Errors).length).toBeGreaterThan(0)
	})
	it.skip('Constants', () => {
		expect(JsUseful.Constants).toBeDefined()
		expect(Object.keys(JsUseful.Constants).length).toBeGreaterThan(0)
	})
	it.skip('Randoms', () => {
		expect(JsUseful.Randoms).toBeDefined()
		expect(Object.keys(JsUseful.Randoms).length).toBeGreaterThan(0)
	})
	it.skip('Messages', () => {
		expect(JsUseful.Messages).toBeDefined()
		expect(Object.keys(JsUseful.Messages).length).toBeGreaterThan(0)
	})
	it.skip('Useful', () => {
		expect(JsUseful.Useful).toBeDefined()
		expect(Object.keys(JsUseful.Useful).length).toBeGreaterThan(0)
	})
	it.skip('Validators', () => {
		expect(JsUseful.Validators).toBeDefined()
		expect(Object.keys(JsUseful.Validators).length).toBeGreaterThan(0)
	})
	it.skip('Converters', () => {
		expect(JsUseful.Converters).toBeDefined()
		expect(Object.keys(JsUseful.Converters).length).toBeGreaterThan(0)
	})
	it.skip('Arrays', () => {
		expect(JsUseful.Arrays).toBeDefined()
		expect(Object.keys(JsUseful.Arrays).length).toBeGreaterThan(0)
	})
	it.skip('Objects', () => {
		expect(JsUseful.Objects).toBeDefined()
		expect(Object.keys(JsUseful.Objects).length).toBeGreaterThan(0)
	})
	it.skip('Dates', () => {
		expect(JsUseful.Dates).toBeDefined()
		expect(Object.keys(JsUseful.Dates).length).toBeGreaterThan(0)
	})
	it.skip('Sources', () => {
		expect(JsUseful.Sources).toBeDefined()
		expect(Object.keys(JsUseful.Sources).length).toBeGreaterThan(0)
	})

	// const srcArr = [
	// 	{ desc: 'is', value: JsUseful.is },
	// 	{ desc: 'isF', value: JsUseful.isF },
	// 	{ desc: 'isO', value: JsUseful.isO },
	// 	{ desc: 'isN', value: JsUseful.isN },
	// 	{ desc: 'isS', value: JsUseful.isS },
	// 	{ desc: 'isA', value: JsUseful.isA },
	// 	{ desc: 'isB', value: JsUseful.isB },
	// 	{ desc: 'isE', value: JsUseful.isE },
	// 	{ desc: 'isNull', value: JsUseful.isNull },
	// 	{ desc: 'isUndefined', value: JsUseful.isUndefined },
	// 	{ desc: 'isRegExp', value: JsUseful.isRegExp },
	// 	{ desc: 'isError', value: JsUseful.isError },
	// 	{ desc: 'isDate', value: JsUseful.isDate },
	// 	{ desc: 'isSymbol', value: JsUseful.isSymbol },
	// 	{ desc: 'isLen', value: JsUseful.isLen },
	// 	{ desc: 'isTruthy', value: JsUseful.isTruthy },
	// 	{ desc: 'isOdd', value: JsUseful.isOdd },
	// 	{ desc: 'isPalindrome', value: JsUseful.isPalindrome },
	// 	{ desc: 'toS', value: JsUseful.toS },
	// 	{ desc: 'toA', value: JsUseful.toA },
	// 	{ desc: 'toO', value: JsUseful.toO },
	// 	{ desc: 'toL', value: JsUseful.toL },
	// 	{ desc: 'toJson', value: JsUseful.toJson },
	// 	{ desc: 'toTypeOf', value: JsUseful.toTypeOf },
	// 	{ desc: 'toCallback', value: JsUseful.toCallback },
	// 	{ desc: 'arrLastIndex', value: JsUseful.arrLastIndex },
	// 	{ desc: 'arrLast', value: JsUseful.arrLast },
	// 	{ desc: 'arrFlat', value: JsUseful.arrFlat },
	// 	{ desc: 'arrUnical', value: JsUseful.arrUnical },
	// 	{ desc: 'arrUnicals', value: JsUseful.arrUnicals },
	// 	{ desc: 'arrMax', value: JsUseful.arrMax },
	// 	{ desc: 'arrMin', value: JsUseful.arrMin },
	// 	{ desc: 'arrayQuickSort', value: JsUseful.arrayQuickSort },
	// 	{ desc: 'arrShuffle', value: JsUseful.arrShuffle },
	// 	{ desc: 'arrQuickSort', value: JsUseful.arrQuickSort },
	// 	{ desc: 'objAssign', value: JsUseful.objAssign },
	// 	{ desc: 'objKeys', value: JsUseful.objKeys },
	// 	{ desc: 'objValues', value: JsUseful.objValues },
	// 	{ desc: 'objEntries', value: JsUseful.objEntries },
	// 	{ desc: 'objFrom', value: JsUseful.objFrom },
	// 	{ desc: 'objCreate', value: JsUseful.objCreate },
	// 	{ desc: 'getTimePerformance', value: JsUseful.getTimePerformance },
	// 	{ desc: 'timeStamp', value: JsUseful.timeStamp },
	// 	{ desc: 'timeISO', value: JsUseful.timeISO },
	// 	{ desc: 'timeUTC', value: JsUseful.timeUTC },
	// 	{ desc: 'getSourceValues', value: JsUseful.getSourceValues },
	// 	{ desc: 'SIZE', value: JsUseful.SIZE },
	// 	{ desc: 'MIN', value: JsUseful.MIN },
	// 	{ desc: 'MAX', value: JsUseful.MAX },
	// 	{ desc: 'SOURCES_RANDOM_CONSTANTS', value: JsUseful.SOURCES_RANDOM_CONSTANTS },
	// 	{ desc: 'NUM', value: JsUseful.NUM },
	// 	{ desc: 'BOOL', value: JsUseful.BOOL },
	// 	{ desc: 'INT', value: JsUseful.INT },
	// 	{ desc: 'STR', value: JsUseful.STR },
	// 	{ desc: 'SRC', value: JsUseful.SRC },
	// 	{ desc: 'ARR', value: JsUseful.ARR },
	// 	{ desc: 'OBJ', value: JsUseful.OBJ },
	// 	{ desc: 'TEXT', value: JsUseful.TEXT },
	// 	{ desc: 'SOURCES_RANDOM_VALUES', value: JsUseful.SOURCES_RANDOM_VALUES },
	// 	{ desc: 'random', value: JsUseful.random },
	// 	{ desc: 'randomBool', value: JsUseful.randomBool },
	// 	{ desc: 'randomNum', value: JsUseful.randomNum },
	// 	{ desc: 'randomInt', value: JsUseful.randomInt },
	// 	{ desc: 'randomCoin', value: JsUseful.randomCoin },
	// 	{ desc: 'randomStr', value: JsUseful.randomStr },
	// 	{ desc: 'randomArr', value: JsUseful.randomArr },
	// 	{ desc: 'randomMany', value: JsUseful.randomMany },
	// 	{ desc: 'randomIndex', value: JsUseful.randomIndex },
	// 	{ desc: 'randomElement', value: JsUseful.randomElement },
	// 	{ desc: 'randomSort', value: JsUseful.randomSort },
	// 	{ desc: 'randomShuffle', value: JsUseful.randomShuffle },
	// 	{ desc: 'randomSource', value: JsUseful.randomSource },
	// 	{ desc: 'randomObject', value: JsUseful.randomObject },
	// 	{ desc: 'randomKey', value: JsUseful.randomKey },
	// 	{ desc: 'randomValue', value: JsUseful.randomValue },
	// 	{ desc: 'randomEntry', value: JsUseful.randomEntry },
	// 	{ desc: 'SOURCES_RANDOM_EXAMPLES', value: JsUseful.SOURCES_RANDOM_EXAMPLES },
	// 	{ desc: 'genArr', value: JsUseful.genArr },
	// 	{ desc: 'genNums', value: JsUseful.genNums },
	// 	{ desc: 'genSources', value: JsUseful.genSources },
	// 	{ desc: 'randomTypeOf', value: JsUseful.randomTypeOf },
	// 	{ desc: 'randomSourceByType', value: JsUseful.randomSourceByType },
	// 	{ desc: 'randomMusicNoteChar', value: JsUseful.randomMusicNoteChar },
	// 	{ desc: 'randomMusicNoteBemole', value: JsUseful.randomMusicNoteBemole },
	// 	{ desc: 'randomMusicNoteSharp', value: JsUseful.randomMusicNoteSharp },
	// 	{ desc: 'randomMusicScale', value: JsUseful.randomMusicScale },
	// 	{ desc: 'randomMusicDurationChar', value: JsUseful.randomMusicDurationChar },
	// 	{ desc: 'randomMusicIntervalChar', value: JsUseful.randomMusicIntervalChar },
	// 	{ desc: 'randomMusicOctave', value: JsUseful.randomMusicOctave },
	// 	{ desc: 'randomMusicMidiIndex', value: JsUseful.randomMusicMidiIndex },
	// 	{ desc: 'randomMusicValues', value: JsUseful.randomMusicValues },
	// 	{ desc: 'randomColorClassname', value: JsUseful.randomColorClassname },
	// 	{ desc: 'randomColorName', value: JsUseful.randomColorName },
	// 	{ desc: 'randomColorCode', value: JsUseful.randomColorCode },
	// 	{ desc: 'randomColorValues', value: JsUseful.randomColorValues },
	// 	{ desc: 'float', value: JsUseful.float },
	// 	{ desc: 'number', value: JsUseful.number },
	// 	{ desc: 'powerOfTwo', value: JsUseful.powerOfTwo },
	// 	{ desc: 'numbersDeep', value: JsUseful.numbersDeep },
	// 	{ desc: 'values', value: JsUseful.values },
	// 	{ desc: 'boolean', value: JsUseful.boolean },
	// 	{ desc: 'array', value: JsUseful.array },
	// 	{ desc: 'numbers', value: JsUseful.numbers },
	// 	{ desc: 'arrays', value: JsUseful.arrays },
	// 	{ desc: 'arrayGrow', value: JsUseful.arrayGrow },
	// 	{ desc: 'arraySequence', value: JsUseful.arraySequence },
	// 	{ desc: 'arrayChange', value: JsUseful.arrayChange },
	// 	{ desc: 'arrayMerge', value: JsUseful.arrayMerge },
	// 	{ desc: 'arrayDouble', value: JsUseful.arrayDouble },
	// 	{ desc: 'arrayRepeats', value: JsUseful.arrayRepeats },
	// 	{ desc: 'arrayIndex', value: JsUseful.arrayIndex },
	// 	{ desc: 'arrayElement', value: JsUseful.arrayElement },
	// 	{ desc: 'arrayElements', value: JsUseful.arrayElements },
	// 	{ desc: 'arrayUnicals', value: JsUseful.arrayUnicals },
	// 	{ desc: 'arrayShuffle', value: JsUseful.arrayShuffle },
	// 	{ desc: 'arrayPart', value: JsUseful.arrayPart },
	// 	{ desc: 'arrayDeepSomeValues', value: JsUseful.arrayDeepSomeValues },
	// 	{ desc: 'joinedStrings', value: JsUseful.joinedStrings },
	// 	{ desc: 'objectKey', value: JsUseful.objectKey },
	// 	{ desc: 'objectValue', value: JsUseful.objectValue },
	// 	{ desc: 'objectEntry', value: JsUseful.objectEntry },
	// 	{ desc: 'validate', value: JsUseful.validate },
	// 	{ desc: 'toInfo', value: JsUseful.toInfo },
	// 	{ desc: 'toJson', value: JsUseful.toJson },
	// 	{ desc: 'toTextBlock', value: JsUseful.toTextBlock },
	// 	{ desc: 'matchChars', value: JsUseful.matchChars },
	// 	{ desc: 'isConstantStyle', value: JsUseful.isConstantStyle },
	// 	{ desc: 'isStringLength', value: JsUseful.isStringLength },
	// 	{ desc: 'strToArray', value: JsUseful.strToArray },
	// 	{ desc: 'toTextValues', value: JsUseful.toTextValues },
	// 	{ desc: 'toTitleCase', value: JsUseful.toTitleCase },
	// 	{ desc: 'toValidChars', value: JsUseful.toValidChars },
	// 	{ desc: 'matchWords', value: JsUseful.matchWords },
	// 	{ desc: 'replaceInvalidChars', value: JsUseful.replaceInvalidChars },
	// 	{ desc: 'isUpperCase', value: JsUseful.isUpperCase },
	// 	{ desc: 'rxpFromChars', value: JsUseful.rxpFromChars },
	// 	{ desc: 'rxpFromChars2', value: JsUseful.rxpFromChars2 },
	// 	{ desc: 'dictionaryMapper', value: JsUseful.dictionaryMapper },
	// 	{ desc: 'dictionaryCreate', value: JsUseful.dictionaryCreate },
	// 	{ desc: 'dictionaryReplace', value: JsUseful.dictionaryReplace },
	// 	{ desc: 'toRomanNumeral', value: JsUseful.toRomanNumeral },
	// 	{ desc: 'errBasic', value: JsUseful.errBasic },
	// 	{ desc: 'errType', value: JsUseful.errType },
	// 	{ desc: 'errEval', value: JsUseful.errEval },
	// 	{ desc: 'errRange', value: JsUseful.errRange },
	// 	{ desc: 'errSyntax', value: JsUseful.errSyntax },
	// 	{ desc: 'errReference', value: JsUseful.errReference },
	// 	{ desc: 'ERROR_BASIC', value: JsUseful.ERROR_BASIC },
	// 	{ desc: 'ERROR_TYPE', value: JsUseful.ERROR_TYPE },
	// 	{ desc: 'ERROR_EVAL', value: JsUseful.ERROR_EVAL },
	// 	{ desc: 'ERROR_RANGE', value: JsUseful.ERROR_RANGE },
	// 	{ desc: 'ERROR_SYNTAX', value: JsUseful.ERROR_SYNTAX },
	// 	{ desc: 'ERROR_REFERENCE', value: JsUseful.ERROR_REFERENCE },
	// 	{ desc: 'ERROR_TYPE_NOT_STRING', value: JsUseful.ERROR_TYPE_NOT_STRING },
	// 	{ desc: 'ERROR_TYPE_NOT_ARRAY', value: JsUseful.ERROR_TYPE_NOT_ARRAY },
	// 	{ desc: 'ERROR_VALUE', value: JsUseful.ERROR_VALUE },
	// 	{ desc: 'ERROR_VALUE_NOT_DEFINED', value: JsUseful.ERROR_VALUE_NOT_DEFINED },
	// 	{ desc: 'ERROR_VALUE_NOT_TRUTHY', value: JsUseful.ERROR_VALUE_NOT_TRUTHY },
	// 	{ desc: 'ERROR_LENGTH', value: JsUseful.ERROR_LENGTH },
	// 	{ desc: 'ERROR_LENGTH_SHORT', value: JsUseful.ERROR_LENGTH_SHORT },
	// 	{ desc: 'ERROR_LENGTH_LARGE', value: JsUseful.ERROR_LENGTH_LARGE },
	// 	{ desc: 'STR', value: JsUseful.STR },
	// 	{ desc: 'RND', value: JsUseful.RND },
	// 	{ desc: 'BLN', value: JsUseful.BLN },
	// 	{ desc: 'NUM', value: JsUseful.NUM },
	// 	{ desc: 'ARR', value: JsUseful.ARR },
	// 	{ desc: 'OBJ', value: JsUseful.OBJ },
	// 	{ desc: 'ERR', value: JsUseful.ERR },
	// 	{ desc: 'BIG', value: JsUseful.BIG },
	// 	{ desc: 'FUNC', value: JsUseful.FUNC },
	// 	{ desc: 'TYPEOF', value: JsUseful.TYPEOF },
	// 	{ desc: 'MUSIC_NOTES_CHARS', value: JsUseful.MUSIC_NOTES_CHARS },
	// 	{ desc: 'MUSIC_NOTES_BEMOLE', value: JsUseful.MUSIC_NOTES_BEMOLE },
	// 	{ desc: 'MUSIC_NOTES_SHARP', value: JsUseful.MUSIC_NOTES_SHARP },
	// 	{ desc: 'MUSIC_DURATION_CHARS', value: JsUseful.MUSIC_DURATION_CHARS },
	// 	{ desc: 'MUSIC_INTERVAL_CHARS', value: JsUseful.MUSIC_INTERVAL_CHARS },
	// 	{ desc: 'MUSIC_SCALES', value: JsUseful.MUSIC_SCALES },
	// 	{ desc: 'COLOR_CLASS', value: JsUseful.COLOR_CLASS },
	// 	{ desc: 'COLOR_NAMES', value: JsUseful.COLOR_NAMES },
	// 	{ desc: 'COLOR_CODES', value: JsUseful.COLOR_CODES },
	// ].map(({ desc, value }) => {
	// 	it(desc, () => {
	// 		expect(desc).toBeDefined()
	// 		expect(value).toBeDefined()
	// 		expect(JsUseful).toHaveProperty(desc)
	// 	})
	// })
})
// describe('Index Module Test', () => {
// 	it('Should return Constants module', () => {
// 		expect(JsUseful.Constants).toBeDefined()
// 	})

// 	it('Should return Random module', () => {
// 		expect(JsUseful.Random).toBeDefined()
// 	})

// 	it('Should return Text module', () => {
// 		expect(JsUseful.Text).toBeDefined()
// 	})

// 	it('Should return Values module', () => {
// 		expect(JsUseful.Values).toBeDefined()
// 	})

// 	it('Should return Functions module', () => {
// 		expect(JsUseful.Functions).toBeDefined()
// 	})
// })
