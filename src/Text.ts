import { A, B, S } from './types'

export class Text {
	public static isLength = (str: S): B => ~~str?.length > 0
	public static isIncludes = (str: S, findChars: A<S>): B => [...str].some(s => findChars.includes(s))
}

export default {
	isLength: Text.isLength,
	isIncludes: Text.isIncludes,
}
