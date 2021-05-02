import { MessageEnum } from './Enums'

export class Messages {
	public static Title(str?: string): string {
		return `${MessageEnum.TITLE_START} ${str} ${MessageEnum.TITLE_END}`
	}
}
