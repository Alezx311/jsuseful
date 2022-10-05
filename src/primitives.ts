import { rand, randBig, randBool, randElement, randNum, randObj, randStr, randSym, randTypeOf } from './randoms'
import { B, BIG, F, N, O, S, SYM, UND } from './types'
import { isB, isBigInt, isF, isN, isO, isS, isSymbol, isUnd } from './usefuls'

type tSrcType = 'string' | 'boolean' | 'number' | 'object' | 'bigint' | 'symbol' | 'function' | 'undefined'
type tSrcValue = F | S | B | N | O | BIG | SYM | UND
type tSrc<T = tSrcValue> = { type: tSrcType; is: (v?: any) => v is T; rand: () => T; value: T }

//? <----- Primitive value sources ----->
export const STR_SRC: tSrc<S> = { type: 'string', is: isS, rand: randStr, value: randStr() }
export const BLN_SRC: tSrc<B> = { type: 'boolean', is: isB, rand: randBool, value: randBool() }
export const NUM_SRC: tSrc<N> = { type: 'number', is: isN, rand: randNum, value: randNum() }
export const OBJ_SRC: tSrc<O> = { type: 'object', is: isO, rand: randObj, value: randObj() }
export const BIG_SRC: tSrc<BIG> = { type: 'bigint', is: isBigInt, rand: randBig, value: randBig() }
export const SYM_SRC: tSrc<SYM> = { type: 'symbol', is: isSymbol, rand: randSym, value: randSym() }
export const FUN_SRC: tSrc<F> = { type: 'function', is: isF, rand: () => rand, value: rand }
export const UND_SRC: tSrc<UND> = { type: 'undefined', is: isUnd, rand: () => undefined, value: undefined }
export const PRIMITIVE_SRC: tSrc[] = [STR_SRC, BLN_SRC, NUM_SRC, OBJ_SRC, BIG_SRC, SYM_SRC, FUN_SRC, UND_SRC]

//? <----- Return source with rand value by provided or rand type ----->
export const randSrc = (type: tSrcType = randTypeOf()): tSrc => {
	const src = PRIMITIVE_SRC.find(el => el.type === type) || randElement(PRIMITIVE_SRC)
	return { ...src, value: src.rand() }
}

//? <----- Return validate results for every source ----->
export const everyIs = (src: tSrc) => {
	const results = PRIMITIVE_SRC.map(({ type, is }) => ({ type, result: is(src.value) }))
	return { type: src.type, value: src.value, results }
}

//? <----- Return callback result for every source ----->
export const everyFn = (fn: F) => {
	const values = PRIMITIVE_SRC.map(({ type, rand }) => ({ type, value: rand() }))
	return values.map(({ type, value }) => ({ type, value, result: fn(value) }))
}
