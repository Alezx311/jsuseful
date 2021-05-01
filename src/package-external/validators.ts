export class Validate {
	public static DataType(data: any): string {
		return Object?.prototype?.toString?.call(data)
	}
	public static isUndefined(data: any): boolean {
		return Validate.DataType(data) === 'object Undefined'
	}
	public static isNull(data: any): boolean {
		return Validate.DataType(data) === 'object Null'
	}
	public static isBoolean(data: any): boolean {
		return Validate.DataType(data) === 'object Boolean'
	}
	public static isNumber(data: any): boolean {
		return Validate.DataType(data) === 'object Number'
	}
	public static isBigInt(data: any): boolean {
		return Validate.DataType(data) === 'object BigInt'
	}
	public static isString(data: any): boolean {
		return Validate.DataType(data) === 'object String'
	}
	public static isObject(data: any): boolean {
		return Validate.DataType(data) === 'object Object'
	}
	public static isArray(data: any): boolean {
		return Validate.DataType(data) === 'object Array'
	}
	public static isSymbol(data: any): boolean {
		return Validate.DataType(data) === 'object Symbol'
	}
	public static isLength(data: string | string[]): boolean {
		return !!(data?.length > 0)
	}
	public static isHasFileSystem(): boolean {
		try {
			const dir = __dirname
			return true
		} catch (e) {
			console.error(NO_FILE_SYSTEM)
			return false
		}
	}
}
