export class Info {
	public static array(data: any[]): string {
		const infoMessage = `Info about array -> Data: ${data}, Length: ${data?.length}`

		return infoMessage
	}

	public static object(data: {}): string {
		const infoMessage = `Info about object -> Data: ${data}, Size: ${Object.keys(data)?.length}`

		return infoMessage
	}

	public static string(data: string): string {
		const infoMessage = `Info about string -> Data: ${data}, Length: ${data?.length}`

		return infoMessage
	}

	public static time(): string {
		return new Date(Date.now()).toISOString()
	}

	public static saveLog(data: string): string {
		const infoMessage = `Info about saveLog -> Data: ${data}, Length: ${data?.length}`

		return infoMessage
	}
}
