export default class Convert {
	public static runFuncMethod(
		func: any,
		methodsEnum: any,
		methodIndex: number = 0,
		funcValue?: any,
	): boolean {
		const result = func?.[methodsEnum?.[methodIndex]]?.(funcValue) ?? ''

		return !!result
	}
}
