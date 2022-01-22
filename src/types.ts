//? ANY = Shortcut for any type
export type ANY = any

//? NL = Shortcut for Null type
export type NL = null

//? UNK = Shortcut for Unknown type
export type UNK = unknown

//? UND = Shortcut for Undefined type
export type UND = undefined

//? VD = Shortcut for Void type
export type VD = void

//? B = Shortcut for Boolean type
export type B = boolean

//? S = Shortcut for String type
export type S = string

//? N = Shortcut for Number type
export type N = number

//? A = Shortcut for Array type
export type A<T1 = ANY> = T1 extends Array<ANY> ? [...T1] : T1 extends Array<ANY> ? Array<ANY> : T1[]

//? O = Shortcut for Object type
export type O<T1 = UNK & ANY> = Record<S, T1>

//? F = Shortcut for Function type
export type F<T2 = ANY, T1 = A> = T1 extends A ? (...args: [T1]) => T2 : (arg?: T1) => T2

//? P = Shortcut for Promise type
export type P<T1 = ANY> = Promise<T1>

//? E = Shortcut for Error type
export type E = Error

//? R = Shortcut for RegExp type
export type R = RegExp

//? VALUE = Shortcut for S or N or B type
export type VALUE = S | N | B

//? DATA = Shortcut for VALUE or A or O type
export type DATA = VALUE | A | O
