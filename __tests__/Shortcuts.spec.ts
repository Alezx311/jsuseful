import * as Shortcuts from '../src/Shortcuts'
import { _ARR, _FNC, _NUM, _OBJ, _STR, _VALUES } from './ExampleValues.spec'

const isValid = (arg: any, desc: string = 'Warning!') => {
	if (!arg) {
		console.warn('Invalid or empty result')
		console.trace(desc)
	}

	expect(arg).toBeDefined()
	expect(arg).toBeTruthy()
}

describe('Functions <<< JsUseful.Shortcuts >>> Tests', () => {
	it('Shortcuts -> Instances', () => {
		isValid(Shortcuts.Sym, 'Shortcuts.Sym')
		isValid(Shortcuts.Big, 'Shortcuts.Big')
		isValid(Shortcuts.Bln, 'Shortcuts.Bln')
		isValid(Shortcuts.Err, 'Shortcuts.Err')
		isValid(Shortcuts.Str, 'Shortcuts.Str')
		isValid(Shortcuts.Arr, 'Shortcuts.Arr')
		isValid(Shortcuts.Num, 'Shortcuts.Num')
		isValid(Shortcuts.Obj, 'Shortcuts.Obj')
		isValid(Shortcuts.Rgx, 'Shortcuts.Rgx')
		isValid(Shortcuts.Prms, 'Shortcuts.Prms')
		isValid(Shortcuts.Func, 'Shortcuts.Func')
	})

	it('Shortcuts -> toType', () => {
		const result = Shortcuts.toType(_STR)

		isValid(result, 'Shortcuts -> toType')
		expect(result).toBe(typeof _STR)
	})

	it('Shortcuts -> toLen', () => {
		const result = Shortcuts.toLen(_ARR)

		isValid(result, 'Shortcuts -> toLen')
		expect(result).toBe(_ARR.length)
	})

	it('Shortcuts -> toStr', () => {
		const result = Shortcuts.toStr(_ARR)

		isValid(result, 'Shortcuts -> toStr -> Value')
		isValid(result.length, 'Shortcuts -> toStr -> Value.length')
	})

	it('Shortcuts -> isInst', () => {
		const result = Shortcuts.isInst(new Date(), Date)

		isValid(result, 'Shortcuts -> isInst')
		expect(result).toBe(true)
	})

	it('Shortcuts -> filtBln', () => {
		const result = Shortcuts.filtBln(_ARR)

		isValid(result, 'Shortcuts -> filtBln')
	})

	it('Shortcuts -> filtNum', () => {
		const result = Shortcuts.filtNum(_ARR)

		isValid(result, 'Shortcuts -> filtNum')
	})

	it('Shortcuts -> filtStr', () => {
		const result = Shortcuts.filtStr([..._ARR, _STR])

		isValid(result, 'Shortcuts -> filtStr')
	})

	it('Shortcuts -> about', () => {
		const result = Shortcuts.about(_VALUES)

		isValid(result, 'Shortcuts -> about')
	})

	it('Shortcuts -> arrIs', () => {
		const result = Shortcuts.arrIs(_ARR)

		isValid(result, 'Shortcuts -> arrIs')
	})

	it('Shortcuts -> arrFrom', () => {
		const result = Shortcuts.arrFrom(_STR)

		isValid(result, 'Shortcuts -> arrFrom')
	})

	it('Shortcuts -> objK', () => {
		const result = Shortcuts.objK(_OBJ)

		isValid(result, 'Shortcuts -> objK')
		expect(result).toContain('_STR')
	})

	it('Shortcuts -> objV', () => {
		const result = Shortcuts.objV(_OBJ)

		isValid(result, 'Shortcuts -> objV')
		expect(result).toContain(_STR)
	})

	it('Shortcuts -> objE', () => {
		const result = Shortcuts.objE(_OBJ)

		isValid(result, 'Shortcuts -> objE')
		expect(result).toContain(['_STR', _STR])
	})

	it('Shortcuts -> objF', () => {
		const result = Shortcuts.objF([['_STR', _STR]])

		isValid(result, 'Shortcuts -> objF')
		expect(result).toEqual({ _STR: _STR })
	})

	it('Shortcuts -> objA', () => {
		const result = Shortcuts.objA(_OBJ, { current: Date.now() })

		isValid(result.current, 'Shortcuts -> objA')
	})

	it('Shortcuts -> prmsRes', () => {
		const result = Shortcuts.prmsRes(true)

		isValid(result, 'Shortcuts -> prmsRes')
	})

	it('Shortcuts -> prmsRej', () => {
		const { result } = { result: Shortcuts.prmsRej({ msg: _STR }) }

		isValid(result, 'Shortcuts -> prmsRej')
		expect(result).toStrictEqual({ msg: _STR })
	})

	it('Shortcuts -> Cons', () => {
		const result = Shortcuts.Cons

		expect(result).toBeDefined()
	})

	it('Shortcuts -> showLog', () => {
		Shortcuts.showLog(' ShowLog')

		expect(Shortcuts.showLog).toBeDefined()
	})

	it('Shortcuts -> showInf', () => {
		Shortcuts.showInf(' ShowInf')

		expect(Shortcuts.showInf).toBeDefined()
	})

	it('Shortcuts -> showTab', () => {
		Shortcuts.showTab(' ShowTab')

		expect(Shortcuts.showTab).toBeDefined()
	})

	it('Shortcuts -> showDeb', () => {
		Shortcuts.showDeb(' ShowDeb')

		expect(Shortcuts.showDeb).toBeDefined()
	})

	it('Shortcuts -> showDir', () => {
		Shortcuts.showDir(' ShowDir')

		expect(Shortcuts.showDir).toBeDefined()
	})

	it('Shortcuts -> showWar', () => {
		Shortcuts.showWar(' ShowWar')

		expect(Shortcuts.showWar).toBeDefined()
	})

	it('Shortcuts -> showErr', () => {
		Shortcuts.showErr(' ShowErr')

		expect(Shortcuts.showErr).toBeDefined()
	})

	it('Shortcuts -> showTrc', () => {
		Shortcuts.showTrc(' ShowTrc')

		expect(Shortcuts.showTrc).toBeDefined()
	})

	it('Shortcuts -> perf', () => {
		const result = Shortcuts.perf()

		expect(Shortcuts.showTrc).toBeDefined()
	})

	it('Shortcuts -> fsPrms', () => {
		const result = Shortcuts.fsPrms

		expect(Shortcuts.showTrc).toBeDefined()
	})

	it('Shortcuts -> fsRead', () => {
		Shortcuts.fsRead('./index.spec.js', (err: Error, data) => {
			if (err) console.error(err)
			expect(err).toBeFalsy()
			isValid(data, 'Shortcuts -> fsRead')
		})
	})

	it('Shortcuts -> fsWrite', () => {
		Shortcuts.fsWrite('./test.txt', 'test', { encoding: 'utf8' }, (err: Error) => {
			expect(err).toBeFalsy()
			if (err) console.error(err)
		})
	})

	it('Shortcuts -> fsAppend', () => {
		Shortcuts.fsAppend('./index.spec.js', '\ntest\n', (err: Error) => {
			expect(err).toBeFalsy()
			if (err) console.error(err)
		})
	})

	it('Shortcuts -> rndArr', () => {
		const result = Shortcuts.rndArr(_NUM)

		isValid(result, 'Shortcuts -> rndArr')
		expect(result).toHaveLength(_NUM)
	})

	it('Shortcuts -> rndNum', () => {
		const result = Shortcuts.rndNum(305, 311)

		isValid(result, 'Shortcuts -> rndNum')
		expect(result).toBeGreaterThanOrEqual(305)
		expect(result).toBeLessThanOrEqual(311)
	})

	it('Shortcuts -> rndFlt', () => {
		const result = Shortcuts.rndFlt(0.305, 0.311)

		isValid(result, 'Shortcuts -> rndFlt')
		expect(result).toBeGreaterThanOrEqual(0.305)
		expect(result).toBeLessThanOrEqual(0.311)
	})

	it('Shortcuts -> rndBln', () => {
		const result = Shortcuts.rndBln()

		isValid(typeof result === 'boolean', 'Shortcuts -> rndBln')
	})

	it('Shortcuts -> rndArrEl', () => {
		const result = Shortcuts.rndArrEl(_ARR.filter(Boolean))

		isValid(result, 'Shortcuts -> rndArrEl')
	})

	it('Shortcuts -> mRnd', () => {
		const result = Shortcuts.mRnd()

		isValid(result, 'Shortcuts -> mRnd')
	})

	it('Shortcuts -> mFloor', () => {
		const result = Shortcuts.mFloor(0.7)

		isValid(result, 'Shortcuts -> mFloor')
	})

	it('Shortcuts -> mCeil', () => {
		const result = Shortcuts.mCeil(3.1)

		isValid(result, 'Shortcuts -> mCeil')
	})

	it('Shortcuts -> mSign', () => {
		const result = Shortcuts.mSign(3)

		isValid(result, 'Shortcuts -> mSign')
	})

	it('Shortcuts -> mMin', () => {
		const result = Shortcuts.mMin(3, 4)

		isValid(result, 'Shortcuts -> mMin')
		expect(result).toBe(3)
	})

	it('Shortcuts -> mMax', () => {
		const result = Shortcuts.mMax(2, 3, 311)

		isValid(result, 'Shortcuts -> mMax')
		expect(result).toBe(311)
	})

	it('Shortcuts -> mAbs', () => {
		const result = Shortcuts.mAbs(-311)

		isValid(result, 'Shortcuts -> mAbs')
		expect(result).toBe(311)
	})

	it('Shortcuts -> now', () => {
		const result = Shortcuts.now()

		isValid(result, '-> now')
	})

	it('Shortcuts -> nowTime', () => {
		const result = Shortcuts.nowTime()

		isValid(result, 'Shortcuts -> nowTime')
	})

	it('Shortcuts -> nowUTC', () => {
		const result = Shortcuts.nowUTC()

		isValid(result, 'Shortcuts -> nowUTC')
	})

	it('Shortcuts -> nowISO', () => {
		const result = Shortcuts.nowISO()

		isValid(result, 'Shortcuts -> nowISO')
	})

	it('Shortcuts -> funcSimple', () => {
		const result = Shortcuts.funcSimple(311)

		isValid(result, 'Shortcuts -> funcSimple')
		expect(result).toBe(311)
	})

	it('Shortcuts -> rndId', () => {
		const result = Shortcuts.rndId()

		isValid(result, 'Shortcuts -> rndId')
	})

	it('Shortcuts -> rndKey', () => {
		const result = Shortcuts.rndKey()

		isValid(result, 'Shortcuts -> rndKey')
	})

	it('Shortcuts -> rndArrCb', () => {
		const result = Shortcuts.rndArrCb(7, () => 311)

		isValid(result, 'Shortcuts -> rndArrCb')
		expect(result).toContain(311)
	})

	it('Shortcuts -> ut', () => {
		const result = Shortcuts.ut

		isValid(result, '-> ut')
	})

	it('Shortcuts -> utInsp', () => {
		isValid(Shortcuts.utInsp(_VALUES._BLN), 'utInsp -> _BLN')
		isValid(Shortcuts.utInsp(_VALUES._FNC), 'utInsp -> _FNC')
		isValid(Shortcuts.utInsp(_VALUES._NUM), 'utInsp -> _NUM')
		isValid(Shortcuts.utInsp(_VALUES._RAND), 'utInsp -> _RAND')
		isValid(Shortcuts.utInsp(_VALUES._STR), 'utInsp -> _STR')
		isValid(Shortcuts.utInsp(_VALUES._ARR), 'utInsp -> _ARR')
		isValid(Shortcuts.utInsp(_VALUES._OBJ), 'utInsp -> _OBJ')
		isValid(Shortcuts.utInsp(_VALUES._DATESTAMP), 'utInsp -> _DATESTAMP')
		isValid(Shortcuts.utInsp(_VALUES._DATESTR), 'utInsp -> _DATESTR')
	})

	it('Shortcuts -> utFormat', () => {
		const result = Shortcuts.utFormat(_OBJ)

		isValid(result, 'Shortcuts -> utFormat')
	})

	it('Shortcuts -> strngf', () => {
		const result = Shortcuts.strngf(_OBJ)

		isValid(result, 'Shortcuts -> strngf')
	})

	it('Shortcuts -> parse', () => {
		const result = Shortcuts.parse(JSON.stringify(_OBJ))

		isValid(result, 'Shortcuts -> parse')
	})

	it('Shortcuts -> json', () => {
		const result = Shortcuts.json(_OBJ)

		isValid(result, 'Shortcuts -> json')
	})

	it('Shortcuts -> jsonInsp', () => {
		const result = Shortcuts.jsonInsp(_OBJ)

		isValid(result, 'Shortcuts -> jsonInsp')
	})

	it('Shortcuts -> jsonFormat', () => {
		const result = Shortcuts.jsonFormat(_OBJ)

		isValid(result, 'Shortcuts -> jsonFormat')
	})

	it('Shortcuts -> isPrms', () => {
		const result = Shortcuts.isPrms(Promise.resolve())

		isValid(result, 'Shortcuts -> isPrms')
	})

	it('Shortcuts -> isFunc', () => {
		const result = Shortcuts.isFunc(_FNC)

		isValid(result, 'Shortcuts -> isFunc')
	})

	it('Shortcuts -> isStr', () => {
		const result = Shortcuts.isStr(_STR)

		isValid(result, 'Shortcuts -> isStr')
	})

	it('Shortcuts -> isArr', () => {
		const result = Shortcuts.isArr(_ARR)

		isValid(result, 'Shortcuts -> isArr')
	})

	it('Shortcuts -> isNum', () => {
		const result = Shortcuts.isNum(_NUM)

		isValid(result, 'Shortcuts -> isNum')
	})

	it('Shortcuts -> isObj', () => {
		const result = Shortcuts.isObj(_OBJ)

		isValid(result, 'Shortcuts -> isObj')
	})

	it('Shortcuts -> isRgx', () => {
		isValid(Shortcuts.isRgx(/[a-z]/gim), 'Shortcuts -> isRgx -> With Constructor')
		isValid(Shortcuts.isRgx(new RegExp(/[a-z]/gim)), 'Shortcuts -> isRgx ->  Without Constructor')
	})
})
