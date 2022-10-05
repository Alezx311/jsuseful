import { itDefined, itTypeFunction, itTypeObject } from './helpers'
import * as Primitives from '../primitives'

describe('Is Primitives defined', () => {
	itDefined(Primitives)
})

describe('Primitives -> STR_SRC', () => {
	itTypeObject(Primitives.STR_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> BLN_SRC', () => {
	itTypeObject(Primitives.BLN_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> NUM_SRC', () => {
	itTypeObject(Primitives.NUM_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> OBJ_SRC', () => {
	itTypeObject(Primitives.OBJ_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> BIG_SRC', () => {
	itTypeObject(Primitives.BIG_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> SYM_SRC', () => {
	itTypeObject(Primitives.SYM_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> FUN_SRC', () => {
	itTypeObject(Primitives.FUN_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Primitives -> UND_SRC', () => {
	itTypeObject(Primitives.UND_SRC, ['type', 'is', 'rand', 'value'])
})

describe('Is Primitive sources', () => {
	Primitives.PRIMITIVE_SRC.map(src => {
		itTypeObject(src)

		expect(src).toHaveProperty('type')
		expect(src).toHaveProperty('is')
		expect(src).toHaveProperty('rand')
		expect(src).toHaveProperty('value')

		expect(typeof src.type).toBe('string')
		expect(typeof src.is).toBe('function')
		expect(typeof src.rand).toBe('function')
		expect(typeof src.value).toBe(src.type)
	})
})

describe('Is randSrc is function', () => {
	itTypeFunction(Primitives.randSrc)
})

describe('Is everyIs is function', () => {
	itTypeFunction(Primitives.everyIs)
})

describe('Is everyFn is function', () => {
	itTypeFunction(Primitives.everyFn)
})
