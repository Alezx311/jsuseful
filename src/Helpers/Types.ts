export type ReplaceDict = [string | string][]
export type ReplaceFunc = (str?: string, dict?: ReplaceDict) => string

export type TextJoiners = '' | ' ' | '\n' | '\t'
export type TextDividersTitle = '-' | '=' | '>' | '<' | '|'
export type TextCreateCuteMessageFunction = (data: LoggerData) => string

export type LoggerData = string | number | string[] | number[]
export type LoggerFunction = (data: LoggerData, priority?: number) => void
export type LoggerResult = { message: string; showed: boolean }

export type DateFormat = 'toISOString' | 'toUTCString'

export type MusicNoteChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'
export type MusicNoteNotation = null | '#' | 'b'
export type MusicNoteDuration = 'n' | 't' | 's' | 'm' | '.'
export type MusicNote = MusicNoteChar & MusicNoteNotation & number
export type ToneSound = {
	MusicNote: MusicNote
	duration: number & MusicNoteDuration
	velocity: number
	time?: string | number
}
