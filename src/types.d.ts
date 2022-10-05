export declare interface Interface {}
export declare enum Enum {}
export declare const fn: <T, R>(v: T) => R
export declare type UND = undefined
export declare type UNK = unknown
export declare type BIG = bigint
export declare type SYM = symbol
export declare type V = void
export declare type S = string
export declare type B = boolean
export declare type N = number
export declare type U = undefined
export declare type R = RegExp
export declare type E = Error
export declare type F = (v?: any) => any
export declare type O = Record<S, UNK> | { [key: S]: UNK }
export declare type A<T = any> = Array<T> | T[]
export declare type P<T = void> = Promise<T>
export declare type Only<T1 = any, T2 = any> = T1 extends T2 ? T1 : never
export declare type Not<T1 = any, T2 = any> = T1 extends T2 ? never : T1
export declare type Maybe<T = any> = T | null | UND
export declare type NotNull<T = any> = NonNullable<T>
export declare type Value = S | N | B
export declare type Data = Value | A | O
export declare type Entry = [S, any]
export declare type Source<T = any> = { value: T; desc: S; type: S; prop: S }
export declare type DeepA<T> = A<T | A<T>>

export declare namespace JsUseful {
	export interface Interface {}
	export enum Enum {}
	export const fn: <T, R>(v: T) => R

	export type UND = undefined
	export type UNK = unknown
	export type BIG = bigint
	export type SYM = symbol
	export type V = void
	export type S = string
	export type B = boolean
	export type N = number
	export type U = undefined
	export type R = RegExp
	export type E = Error
	export type F = (v?: any) => any
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
}
