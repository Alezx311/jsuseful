import * as _Errors from './errors'
import * as _Constants from './constants'
import * as _Randoms from './randoms'
import * as _Messages from './messages'
import * as _Usefuls from './usefuls'
import * as _Validates from './validates'
import * as _Primitives from './primitives'

export const Errors = _Errors
export const Constants = _Constants
export const Randoms = _Randoms
export const Messages = _Messages
export const Usefuls = _Usefuls
export const Validates = _Validates
export const Primitives = _Primitives

export const JsUsefulTotal = {
	...Errors,
	...Constants,
	...Randoms,
	...Messages,
	...Usefuls,
	...Validates,
	...Primitives,
}
export const JsUsefulModules = { Errors, Constants, Randoms, Messages, Usefuls, Validates, Primitives }
export const JsUseful = { ...JsUsefulTotal, ...JsUsefulModules }

export default JsUseful
