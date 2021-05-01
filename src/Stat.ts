export default class Stat {
	public static Length(data: string | any[]): number {
		const result = data?.length

		if (!result) {
			console.debug(`\tInvalid data: ${data}`)
			return null
		} else {
			return result
		}
	}
	public static Message(data: string): Promise<void> {}
}
