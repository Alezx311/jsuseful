const { CONSTANT_VALUES, CONSTANTS_ARRAYS, run, vArr } = require('./sources.test')

describe('JsUseful -> Constants -> VALUES', () => {
	run(CONSTANT_VALUES)
})
describe('JsUseful -> Constants -> ARRAYS', () => {
	run(CONSTANTS_ARRAYS, vArr)
})
