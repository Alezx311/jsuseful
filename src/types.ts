export type B = boolean
export type S = string
export type N = number
export type O = any
export type A<T = any> = Array<T>
export type DeepA<T> = A<T | A<T>>
export type V = void
export type U = undefined
export type DateStr = Date | S
export type E = Error | { message?: S }
export type P<T = void> = Promise<T>
export type Value = S | N | B
export type Data = Value | A | O
export type Entry = Record<S, unknown>
export type R = RegExp
