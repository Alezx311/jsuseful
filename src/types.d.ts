declare namespace Useful {
	interface Interface {}
	enum Enum {}
	const fn: <T, R>(v: T) => R

	type Type =
		| any
		| never
		| unknown
		| void
		| undefined
		| null
		| boolean
		| string
		| number
		| any[]
		| object
		| Promise<any>
		| Function
		| symbol
		| 'key'
		| 'index'
		| 'value'

	//? Type Shorthands
	type ANY = any
	type UNK = unknown
	type NVR = never
	type VOI = void
	type UND = undefined
	type NULL = null
	type IS<T> = Pick<ANY, keyof T>
	type OMIT<T> = Omit<ANY, keyof T>
	type NOT<T> = Omit<ANY, keyof T>
	type PropsOr<T = A<S>, T2 = T> = { [key in keyof T & T2] }
	type PropsAnd<T = A<S>, T2 = T> = { [key in keyof Omit<T2, keyof T>] }

	type B = boolean
	type S = string
	type N = number

	type A<T = UNK> = T[]
	type AFilt<T = UNK> = PropsOr<T>

	type O<T = UNK> = Record<S, T>
	type Obj<T = UNK> = { S: T }
	type ObjFilt<T = UNK, T2 = KEYS> = { [key in keyof T2]: T }

	type P<T = void> = Promise<T>
	type F<T = UNK, R = RESULT, T1 = OPT> = (v: T, o: T1) => R

	type RESULT<T = ANY> = T
	type KEYS<T = S> = T | ANY | A<T>
	type VALUE<T = UNK> = T & (B | S | N | A<ANY> | O<UNK>)
	type TYPE<T1 = UNK, T2 = KEYS, T3 = RESULT> = T1 | T2 | T3
	type EMP = NVR | VOI | UND | NULL

	type TKREQ<T = UNK, T2 = T> = keyof T & keyof T2
	type OR<T = UNK, T2 = UNK> = T | T2
	type AND<T = UNK, T2 = UNK> = T & T2
	type OPT<T = UNK> = T | NULL
	type INSTANCEOF = Object | Function | String | Number
	type NOT_NULL<T = UNK> = NonNullable<T>
	type IFC = Interface
	type ENM = Enum
}
