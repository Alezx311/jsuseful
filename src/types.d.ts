declare namespace Useful {
	interface Interface {}
	enum Enum {}
	const fn: <T, R>(v: T) => R

	export type UNK = unknown
	export type NO = null | UNK
	export type B = boolean
	export type S = string
	export type N = number
	export type V = void
	export type U = undefined
	export type O = Record<S, UNK> | { [key: S]: UNK }
	export type A<T = any> = Array<T>
	export type P<T = void> = Promise<T>
	export type R = RegExp
	export type E = Error | { message?: S }
	export type Value = S | N | B
	export type Data = Value | A | O
	export type Entry = [S, any]
	export type Source<T = any> = { value: T; desc: S; type: S; prop: S }
	export type DeepA<T> = A<T | A<T>>
}
