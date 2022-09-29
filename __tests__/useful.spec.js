const { JSUSEFUL_KEYS, run, vDesc, vValue } = require('./sources.test')

describe('JsUseful -> Useful keys', () => {
	run(JSUSEFUL_KEYS, vDesc, vValue)
})
