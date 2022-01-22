import fs from 'fs'
import util from 'util'
import { Random } from './Random'
import { A, ANY, B, F, N, O, S } from './types'

export const Sym = Symbol
export const Big = BigInt
export const Bln = Boolean
export const Err = Error
export const Str = String
export const Arr = Array
export const Num = Number
export const Obj = Object
export const Rgx = RegExp
export const Prms = Promise
export const Func = Function

export const toType = (v1: ANY) => typeof v1
export const toLen = <T1 extends { length: N }>(v: T1): T1['length'] | 0 => v?.length ?? 0
export const toStr = (v: ANY) => (v ? json(utInsp(v)) : '')
export const isInst = (v1: ANY, v2: ANY) => v1 instanceof v2
export const filtBln = (...v: ANY[]): A<B> => v.filter(Bln)
export const filtNum = (...v: ANY[]): A<N> => v.filter(Num)
export const filtStr = (...v: ANY[]): A<S> => v.filter(Str)
export const about = <T1>(src: T1, ...info: S[]) => ({ info, src, typeOf: toType(src) })

export const arrIs = Arr.isArray
export const arrFrom = Arr.from

export const objK = Obj.keys
export const objV = Obj.values
export const objE = Obj.entries
export const objF = Obj.fromEntries
export const objA = Obj.assign

export const prmsRes = Prms.resolve
export const prmsRej = Prms.reject
export const prmsAll = Prms.all
export const prmsRace = Prms.race
export const prmsSetl = Prms.allSettled

export const Cons = console
export const showLog = Cons.log
export const showInf = Cons.info
export const showTab = Cons.table
export const showDeb = Cons.debug
export const showDir = Cons.dir
export const showWar = Cons.warn
export const showErr = Cons.error
export const showTrc = Cons.trace

export const perf = performance.now

export const fsPrms = fs.promises
export const fsRead = fs.readFile
export const fsWrite = fs.writeFile
export const fsAppend = fs.appendFile

export const rndArr = Random.arr
export const rndNum = Random.number
export const rndFlt = Random.range
export const rndBln = Random.boolean
export const rndArrEl = Random.arrElement

export const mRnd = Math.random
export const mFloor = Math.floor
export const mCeil = Math.ceil
export const mSign = Math.sign
export const mMin = Math.min
export const mMax = Math.max
export const mAbs = Math.abs

export const now = () => Date.now()
export const nowTime = () => new Date().getTime()
export const nowUTC = () => new Date().toUTCString()
export const nowISO = () => new Date().toISOString()

export const funcSimple = <T1>(v1: T1): T1 => v1

export const rndId = (radx: N = 36) =>
	now()
		.toString(~~radx)
		.replace(/[^a-z0-9]/gi, '')
export const rndKey = () => `${rndId()}_${now()}`
export const rndArrCb = (size: N, cb: F<ANY, ANY> = funcSimple) => rndArr(size).map(cb)

export const ut = util
export const utInsp = ut.inspect
export const utFormat = ut.format

export const strngf = JSON.stringify
export const parse = JSON.parse
export const json = (v: ANY): S => strngf(v, null, '\t')
export const jsonInsp = (v: ANY): S => json(utInsp(v, true))
export const jsonFormat = (v: ANY): O => parse(strngf(v))

export const isPrms = (v: ANY): v is typeof Prms => isInst(v, Prms)
export const isFunc = (v: ANY): v is typeof Func => isInst(v, Func)
export const isStr = (v: ANY): v is typeof Str => isInst(v, Str)
export const isArr = (v: ANY): v is typeof Arr => isInst(v, Arr)
export const isNum = (v: ANY): v is typeof Num => isInst(v, Num)
export const isObj = (v: ANY): v is typeof Obj => isInst(v, Obj)
export const isRgx = (v: ANY): v is typeof Rgx => isInst(v, Rgx)
