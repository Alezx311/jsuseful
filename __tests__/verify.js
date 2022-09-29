const { JsUseful } = require('../lib/src')

const verifyDefined = v => {
	expect(v).toBeDefined()
}

const verifyProperty = v => {
	expect(typeof v).toBe('string')
	expect(JsUseful).toHaveProperty(v)
}

const verifyNotNull = v => {
	expect(v).not.toBeNull()
}
const verifyNotFalsy = v => {
	expect(v).toBeTruthy()
}
const verifyStr = v => {
	expect(typeof v).toBe('string')
	expect(v.length).toBeGreaterThanOrEqual(0)
}
const verifyNum = v => {
	expect(typeof v).toBe('number')
	expect(v).toBeGreaterThanOrEqual(0)
}


const verifyModule = () => {
	expect(JsUseful).toBeDefined()
}
const verifyArr = v => {
	expect(typeof v).toBe('object')
	expect(Array.isArray(v)).toBe(true)
	expect(v.length).toBeGreaterThanOrEqual(0)
}
const verifyObj = v => {
	expect(typeof v).toBe('object')
	expect(Array.isArray(v)).toBe(false)
}

const verifyFunc = v => {
	expect(typeof v).toBe('function')
}

class Verify {
	static cb = v => (v ? true : false)
	static getValue = desc => JsUseful?.[desc]
	static getType = desc => typeof JsUseful?.[desc]
	static getValues = desc => ({ desc, value: this.getValue(desc), type: this.getType(desc), cb: this.cb })

	static mapper = (src, index = 0) => {
		const values = this.getValues(src.desc)
		return { index, ...values, ...src }
	}

	static verifyModule = verifyModule
	static verifyDefined = verifyDefined
	static verifyProperty = verifyProperty
	static verifyNotNull = verifyNotNull
	static verifyNotFalsy = verifyNotFalsy
	static verifyStr = verifyStr
	static verifyNum = verifyNum
	static verifyArr = verifyArr
	static verifyObj = verifyObj
	static verifyFunc = verifyFunc
}

module.exports = Verify
