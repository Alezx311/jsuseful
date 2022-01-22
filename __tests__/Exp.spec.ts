import { A, N } from '../src/types'
import * as Exp from '../src/Exp'
import { _ARR, _BLN, _DATESTAMP, _DATESTR, _FNC, _NUM, _OBJ, _RAND, _STR, _VALUES } from './ExampleValues.spec'

beforeAll(() => {
	Exp.ShowTest({ _VALUES, desc: 'Test Values' })
})

beforeEach(() => {
	console.count('Next...')
})

describe('Functions <<< JsUseful.Exp >>> Tests', () => {
	it('Exp -> NumPrsI', () => {
		const result = Exp.NumPrsI(`${_NUM}`)

		expect(result).toBeTruthy()
	})

	it('Exp -> NumPrsF', () => {
		const result = Exp.NumPrsF(`${_RAND}`)

		expect(result).toBeTruthy()
	})

	it('Exp -> NumIsNaN', () => {
		expect(Exp.NumIsNaN(Number.NaN)).toBe(true)
		expect(Exp.NumIsNaN(_NUM)).toBe(false)
	})

	it('Exp -> Arr', () => {
		const result = Exp.Arr(7)

		expect(result).toBeTruthy()
		expect(result).toHaveLength(7)
	})

	it('Exp -> ArrF', () => {
		const result = Exp.ArrF(_STR)

		expect(result).toBeTruthy()
		expect(result).toBe(_STR.split(''))
	})

	it('Exp -> ArrIs', () => {
		expect(Exp.ArrIs(_ARR)).toBe(true)
		expect(Exp.ArrIs(_STR)).toBe(false)
	})

	it('Exp -> ArrUniq', () => {
		const result = Exp.ArrUniq([..._ARR, ..._ARR])

		expect(result).toBeTruthy()
	})

	it('Exp -> ArrMap', () => {
		const mapValue = [_STR, _NUM]
		const result = Exp.ArrMap([mapValue, mapValue])

		expect(result).toBeTruthy()
	})

	it('Exp -> FncArgs', () => {
		const result = Exp.FncArgs(_FNC(_NUM))

		expect(result).toBeTruthy()
	})

	it('Exp -> ObjK', () => {
		const result = Exp.ObjK(_OBJ)

		expect(result).toBeTruthy()
	})

	it('Exp -> ObjV', () => {
		const result = Exp.ObjV(_OBJ)

		expect(result).toBeTruthy()
	})

	it('Exp -> ObjE', () => {
		const result = Exp.ObjE(_OBJ)

		expect(result).toBeTruthy()
	})

	it('Exp -> ObjF', () => {
		const result = Exp.ObjF(Object.entries(_OBJ))

		expect(result).toBeTruthy()
		expect(Object.keys(result)).toBe(Object.keys(_OBJ))
	})

	it('Exp -> ObjA', () => {
		const result = Exp.ObjA({}, _OBJ, { key1: _STR })

		expect(result).toBeTruthy()
		expect(Object.values(result)).toContain(_STR)
	})

	it('Exp -> Inspect -> _BLN', () => {
		expect(Exp.Insp(_VALUES._BLN)).toBeTruthy()
	})

	it('Exp -> Inspect -> _FNC', () => {
		expect(Exp.Insp(_VALUES._FNC)).toBeTruthy()
	})

	it('Exp -> Inspect -> _NUM', () => {
		expect(Exp.Insp(_VALUES._NUM)).toBeTruthy()
	})

	it('Exp -> Inspect -> _RAND', () => {
		expect(Exp.Insp(_VALUES._RAND)).toBeTruthy()
	})

	it('Exp -> Inspect -> _STR', () => {
		expect(Exp.Insp(_VALUES._STR)).toBeTruthy()
	})

	it('Exp -> Inspect -> _ARR', () => {
		expect(Exp.Insp(_VALUES._ARR)).toBeTruthy()
	})

	it('Exp -> Inspect -> _OBJ', () => {
		expect(Exp.Insp(_VALUES._OBJ)).toBeTruthy()
	})

	it('Exp -> Inspect -> _DATESTAMP', () => {
		expect(Exp.Insp(_VALUES._DATESTAMP)).toBeTruthy()
	})

	it('Exp -> Inspect -> _DATESTR', () => {
		expect(Exp.Insp(_VALUES._DATESTR)).toBeTruthy()
	})

	it('Exp -> Insp', () => {
		const result = Exp.Insp(_STR)

		expect(result).toBeTruthy()
		expect(result).toBeTruthy()
	})

	it('Exp -> InspAll', () => {
		const result = Exp.InspAll(_STR)

		expect(result).toBeTruthy()
		expect(result).toBeTruthy()
	})

	it('Exp -> JsonStr', () => {
		const result = Exp.JsonStr(_OBJ)

		expect(result).toBeTruthy()
		expect(result).toBeTruthy()
	})

	it('Exp -> JsonMsg', () => {
		const result = Exp.JsonMsg(_OBJ)

		expect(result).toBeTruthy()
	})

	it('Exp -> JsonPrs', () => {
		const result = Exp.JsonPrs(JSON.stringify(_OBJ))

		expect(result).toBeTruthy()
	})

	it('Exp -> toMethods', () => {
		const result = Exp.toMethods(Exp)

		expect(result).toBeTruthy()
		expect(result).toContain('toMethods')
	})

	it('Exp -> toInfo', () => {
		const result = Exp.toInfo(_OBJ)

		expect(result).toBeTruthy()
		expect(Object.keys(result)).toContain('type')
	})

	it('Exp -> toType', () => {
		const result = Exp.toType(_STR)

		expect(result).toBe(typeof _STR)
	})

	it('Exp -> toObj', () => {
		const result = Exp.toObj(_STR)

		expect(result).toBe({ data: _STR })
	})

	it('Exp -> fRand', () => {
		const result = Exp.fRand()

		expect(result).toBeGreaterThan(0)
		expect(result).toBeLessThan(1)
	})

	it('Exp -> fMin', () => {
		const result = Exp.fMin(3, 7, 33)

		expect(result).toBeTruthy()
		expect(result).toBe(3)
	})

	it('Exp -> fMax', () => {
		const result = Exp.fMax(3, 4, 311)

		expect(result).toBeTruthy()
		expect(result).toBe(311)
	})

	it('Exp -> fFloor', () => {
		const result = Exp.fFloor(3.11)

		expect(result).toBeTruthy()
		expect(result).toBe(3)
	})

	it('Exp -> fCeil', () => {
		const result = Exp.fCeil(3.11)

		expect(result).toBeTruthy()
		expect(result).toBe(Math.ceil(3.11))
	})

	it('Exp -> fRange', () => {
		const numbers = [..._ARR.filter(Number), 311, 1, 0.5] as A<N>
		const result = Exp.fRange(...numbers)

		expect(result).toBe([Math.min(...numbers), Math.max(...numbers)])
	})

	it('Exp -> fDiff', () => {
		const result = Exp.fDiff(42, 311)

		expect(result).toBe(311 - 42)
	})

	it('Exp -> fRandFloat', () => {
		const result = Exp.fRandFloat(...(_ARR as N[]))

		expect(result).toBeTruthy()
	})

	it('Exp -> fRandInt', () => {
		const result = Exp.fRandInt(...(_ARR as N[]))

		expect(result).toBeTruthy()
	})

	it('Exp -> fValue', () => {
		expect(Exp.fValue(true)).toBe(true)
		expect(Exp.fValue(false)).toBe(false)
		expect(Exp.fValue(42)).toBe(42)
	})

	it('Exp -> fArr', () => {
		const result = Exp.fArr(_NUM, 311)

		expect(result).toBeTruthy()
		expect(result).toContain(311)
		expect(result).toHaveLength(_NUM)
	})

	it('Exp -> fArrFunc', () => {
		const result = Exp.fArrFunc(_NUM, v => 311)

		expect(result).toBeTruthy()
		expect(result).toContain(311)
		expect(result).toHaveLength(_NUM)
	})

	it('Exp -> fRand', () => {
		const result = Exp.fRand()

		expect(result).toBeTruthy()
		expect(result).toBeGreaterThan(0)
	})
})

afterAll(() => {
	Exp.ShowTest('Tested with Values')
	Exp.Show(_VALUES)

	Exp.Show(Exp.Insp(_BLN), 'Inspect -> _BLN')
	Exp.Show(Exp.Insp(_FNC), 'Inspect -> _FNC')
	Exp.Show(Exp.Insp(_NUM), 'Inspect -> _NUM')
	Exp.Show(Exp.Insp(_RAND), 'Inspect -> _RAND')
	Exp.Show(Exp.Insp(_STR), 'Inspect -> _STR')
	Exp.Show(Exp.Insp(_ARR), 'Inspect -> _ARR')
	Exp.Show(Exp.Insp(_OBJ), 'Inspect -> _OBJ')
	Exp.Show(Exp.Insp(_DATESTAMP), 'Inspect -> _DATESTAMP')
	Exp.Show(Exp.Insp(_DATESTR), 'Inspect -> _DATESTR')
})
