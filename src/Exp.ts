import util from 'util'
import { A, ANY, F, N, O, S } from './types'

export const Num = Number
export const NumPrsI = Num.parseInt
export const NumPrsF = Num.parseFloat
export const NumIsNaN = Num.isNaN

export const Str = String
export const StrRaw = Str.raw

export const Arr = Array
export const ArrF = Arr.from
export const ArrIs = Arr.isArray
export const ArrUniq = (arr: A) => [...new Set([...arr])]
export const ArrMap = (arr: A<[ANY, ANY]>) => [...new Map([...arr])]

export const Fnc = Function
export const FncName = Fnc.name
export const FncArgs = Fnc.arguments

export const Obj = Object
export const ObjK = Obj.keys
export const ObjV = Obj.values
export const ObjE = Obj.entries
export const ObjF = Obj.fromEntries
export const ObjA = Obj.assign

export const Inspect = util.inspect
export const Insp = (data: ANY) => Inspect(toObj(data), false, null, true)
export const InspAll = (data: ANY) => Inspect(toObj(data), true, null, true)
export const JsonStr = (data: ANY) => JSON.stringify(toObj(data))
export const JsonMsg = (data: ANY) => JSON.stringify(toObj(data), null, 2)
export const JsonPrs = (data: S) => JSON.parse(data)

export const toMethods = (obj: O) => ArrUniq((ObjK(obj) || []).filter(Str))
export const toInfo = (data: ANY, desc: S = `${data?.toString}`) => ({ ...toObj(data), desc, inspect: InspAll(data) })
export const toType = (data?: ANY) => typeof data
export const toObj = (data?: ANY) => ({ data, toType: typeof data, date: Date.now(), time: new Date().toISOString() })

export const fRand = Math.random
export const fMin = Math.min
export const fMax = Math.max
export const fFloor = Math.floor
export const fCeil = Math.ceil

export const vRand = fRand()
export const vDef = null
export const v0 = 0
export const v1 = 1
export const v7 = 7
export const v42 = 42
export const vMin = 1
export const vMax = 100
export const vMaxSafe = Num.MAX_SAFE_INTEGER
export const vMinSafe = Num.MIN_SAFE_INTEGER
export const vSize = v7
export const vBln = !!vRand
export const vInt = ~~vRand
export const vNum = vRand * v42
export const vRange: [N, N] = [vMin, vMax]

export const fRange = (...args: A<N>) => [fMin(...args), fMax(...args)]
export const fDiff = (...args: A<N>) => fMax(...args) - fMin(...args)
export const fRandFloat = (...args: A<N>) => fRand() * fDiff(...args) + fMax(...args)
export const fRandInt = (...args: A<N>) => ~~fRandFloat(...args)
export const fValue: F<ANY, ANY> = (value = null) => value
export const fArr = (size: N = vSize, fillV: ANY = v1) => Array(size).fill(fillV)
export const fArrFunc = (size: N = vSize, mapF: F<ANY> = fValue) => fArr(size).map(mapF)

export const Cons = console

export const Show = (data: ANY, desc: S = 'Data') => Cons.info(InspAll(data), desc)
export const ShowTest = (data: ANY) => {
	Cons.log('Test of Insp', Insp(data))
	Cons.log('Test of InspAll', InspAll(data))
	Cons.log('Test of Console.log', data)
	Cons.info('Test of Console.info', data)
	Cons.warn('Test of Console.warn', data)
	Cons.error('Test of Console.error', data)
	Cons.debug('Test of Console.debug', data)
	Cons.table('Test of Console.table', data)
}
