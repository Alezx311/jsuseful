export class Check {
	//* Very simple validate of number arguments
	public static number(data: number, ...rest: number[]): boolean {
		return [data, ...rest].every((v: any): boolean => typeof v === 'number')
	}

	//* Very simple validate of array arguments
	public static array(data: any[], ...rest: any[]): boolean {
		return [data, ...rest].every((v: any): boolean => !!v)
	}

	//* Very simple validate of string arguments
	public static string(data: string, ...rest: string[]): boolean {
		return [data, ...rest].every((v: any): boolean => typeof v === 'string')
	}

	//* Very simple validate of object arguments
	public static object(data: any, ...rest: any[]): boolean {
		return [data, ...rest].every((v: any): boolean => !!Object.assign({}, v))
	}

	//* Very simple validate of truthy arguments
	public static truthy(data: any, ...rest: any[]): boolean {
		return [data, ...rest].every((v: any): boolean => !!v)
	}
}

// @Injectable()
// export class CustomValidationService {
//   constructor() {}

//   isUndefined(value: any) {
//     return Object.prototype.toString.call(value) === '[object Undefined]';
//   }

//   isNull(value: any) {
//     return Object.prototype.toString.call(value) === '[object Null]';
//   }

//   isBoolean(value: any) {
//     return Object.prototype.toString.call(value) === '[object Boolean]';
//   }

//   isNumber(value: any) {
//     return Object.prototype.toString.call(value) === '[object Number]';
//   }

//   isBigInt(value: any) {
//     return Object.prototype.toString.call(value) === '[object BigInt]';
//   }

//   isString(value: any) {
//     return Object.prototype.toString.call(value) === '[object String]';
//   }

//   isObject(value: any) {
//     return Object.prototype.toString.call(value) === '[object Object]';
//   }

//   isArray(value: any) {
//     return Object.prototype.toString.call(value) === '[object Array]';
//   }

//   isSymbol(value: any) {
//     return Object.prototype.toString.call(value) === '[object Symbol]';
//   }

//   isDate(value: any) {
//     if (!this.isString(value)) {
//       return false;
//     }

//     const d = new Date(value);
//     if (Object.prototype.toString.call(d) === '[object Date]') {
//       if (isNaN(d.getTime())) {
//         return false;
//       }

//       return true;
//     }

//     return false;
//   }

//   isExists(value: any) {
//     return typeof value !== 'undefined';
//   }

//   isEmpty(value: any) {
//     return this.isString(value) && !value.length;
//   }
// }
