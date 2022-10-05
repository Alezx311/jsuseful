export type UND = undefined
export type UNK = unknown
export type BIG = bigint
export type SYM = symbol
export type NO = null | undefined
export type V = void
export type S = string
export type B = boolean
export type N = number
export type U = undefined
export type R = RegExp
export type E = Error
export type F<T1 = any, T2 = any> = (v?: T1) => T2
export type O = Record<S, UNK> | { [key: S]: UNK }
export type A<T = any> = Array<T> | T[]
export type P<T = void> = Promise<T>
export type Only<T1 = any, T2 = any> = T1 extends T2 ? T1 : never
export type Not<T1 = any, T2 = any> = T1 extends T2 ? never : T1
export type Maybe<T = any> = T | null | UND
export type NotNull<T = any> = NonNullable<T>
export type Value = S | N | B
export type Data = Value | A | O
export type Entry = [S, any]
export type Source<T = any> = { value: T; desc: S; type: S; prop: S }
export type DeepA<T> = A<T | A<T>>
export type tTypeToDesc<T> = T extends S | string
	? 'string'
	: T extends B
	? 'boolean'
	: T extends N
	? 'number'
	: T extends BIG
	? 'bigint'
	: T extends SYM
	? 'symbol'
	: T extends F | Function
	? 'function'
	: T extends UND
	? 'undefined'
	: T extends O | object
	? 'object'
	: T
