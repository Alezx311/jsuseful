export const _BLN = true
export const _NUM = 42
export const _FNC = (value?: any) => value
export const _RAND = Math.random()
export const _STR = 'Test Message'
export const _ARR = [_BLN, _STR, _RAND, _NUM, 311]
export const _OBJ = { _BLN, _NUM, _STR, _ARR }
export const _DATESTAMP = Date.now()
export const _DATESTR = new Date(_DATESTAMP).toUTCString()

export class _VALUES {
	public static _BLN = _BLN
	public static _FNC = _FNC
	public static _NUM = _NUM
	public static _RAND = _RAND
	public static _STR = _STR
	public static _ARR = _ARR
	public static _OBJ = _OBJ
	public static _DATESTAMP = _DATESTAMP
	public static _DATESTR = _DATESTR
}
