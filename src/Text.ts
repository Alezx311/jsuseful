export class Text {
	public static isLength = (str: string): boolean => ~~str?.length > 0
	public static isIncludes = (str: string, findChars: string[]): boolean => [...str].some(s => findChars.includes(s))
}
