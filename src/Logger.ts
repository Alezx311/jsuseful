// import { LogMessageType } from './package-external/enums'

import { DateFormatEnum, ConsoleGradientsEnum,
	ConsoleColorsEnum,
	ConsoleMethodsEnum } from './package-external/enums' 

export function trimStr(str: string): string {
	return `${str?.trim() ?? `${str}`?.replace(/[^a-zа-я0-9\\s\\t]/gi, '')}`
}

export function createInitLoggerMessage(context: string, timeStamp: string) {
	return `Logger created at ${context?.trim()} on ${timeStamp?.trim()}`
}

export class Logger {
	constructor(context?: string, EnableLogsTimeStamp?: boolean, EnableLogsDebugMode: boolean, private readonly createTime = new Date()) {}
		// if (context?.trim()?.length) {
		// 	this.createTime =
		// 		EnableLogsTimeStamp === true
		// 			? `${new Date()}`
		// 			: 'No TimeStamp Was Provided at initialize!'
		// 	this.initMessage = `Logger at <<< ${context} >>> created at <<< ${createTime} >>>`

		// 	console.log(initMessage)
		// }
	
public static ShowFunctionArguments(arr?: any[]): ConsoleMessage {
	
}
	private readonly TimeStamp(stampFormat?: DateFormatEnum = DateFormatEnum.ISO8601) {
		if(!this.isTimestampEnabled) {
			return `Timestamps is not enabled!`
		}


		const timestamp = new Date()

		if()
		const timestamp =
			this.isTimestampEnabled === true
				? new Date()
				: 'Timestamps is not enabled!'
	}

	private Title(str: string): string {
		return `---> ${str} <---`
	}

	private ErrorMessage(err?: LogMessageError) {
		const message = `---> ${err?.message ?? err} <---`
	}
}
// export default class Logs {
// 	public static async ShowWithStdout(message: string, type: LogMessageType = 0): Promise<void> {

//   }
// 	public static async ShowWithConsole(message: string, type: LogMessageType = 0): Promise<void> {

//   }
// 	public static async Show(text: string): Promise<void> {
// 		const message = this.CreateCuteMessage(text)

//     return text && typeof text === 'string' ? this.DebugError()
//     if (typeof text !== 'string') {
// 			return console.info()
// 		}
// 	}
// 	public static Info
// 	public static Error
// 	public static Debug
// }
