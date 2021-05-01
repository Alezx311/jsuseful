export class Text {
	public static check = (str?: string): boolean {
    return !!(str && typeof str === 'string' && str?.length > 0)
  }
	public static ReplaceWithDictionary = (text: string, findChars: string | RegExp, replaceWith?: ReplaceFunction ): Promise<void> {
	public static RegExpReplacer = (str: string, regExp: RegExp, replacer?: string | ): Promise<void> {
    
  }
	public static CharsReplace = (str: string, regExpChars?: RegExp, regExpFunc?: (str: string) => string): Promise<void> {
    if(!regExpChars) regExpChars = new RegExp('\w', 'gi')
    if(!regExpFunc) regExpFunc = char => ''
  }
	public static length = (str: string): string {
	public static trimTo = (str: string, range?: [number, number]): string {

  }
	public static checkLen = (str: string, asBoolean?: boolean, trimToRange: [number, number]): string {
    const len = str?.trim()?.length
    
    if(asBoolean) {
      return !!len
    }
    const trimRange = trimToRange ? [0, str.length] : trimToRange?.map?.filter(v => v >= 0)
    
    const result = asBoolean ? !!len : trimToRange ? Text.TrimTo(str, trimToRange) :
    } trimToRange)

    if(!trimToRange) {
      return !!returnBoolean === true ? !!trimmed : trimmed?.length 
    }
    if(!str?.trim())
    return `${str?.length}`
  }

	public static trim(str: string): string {
		return `${str?.trim()}`
	}

	static splitToLines(text: string): string[] {
		const lines = text
			.split('\n')
			.map(v => v?.trim())
			.filter(Boolean)

		return lines
	}
}
