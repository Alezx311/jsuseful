export enum ConsoleGradientsEnum {
	RAINBOW = 0,
	VICE = 1,
	INSTAGRAM = 2,
}

export enum ConsoleColorsEnum {
	RED = 0,
	GREEN = 1,
	YELLOW = 2,
	GRAY = 3,
}

export enum ConsoleMethodsEnum {
	LOG = 0,
	ERROR = 1,
	DEBUG = 2,
	INFO = 3,
}

export enum LogPriorityEnum {
	DATA = 0,
	ERROR = 1,
	DEBUG = 2,
	INFO = 3,
}

export enum LogMessageEnum {
	EMPTY = 0,
	INT_NUMBER = 1,
	FLOAT_NUMBER = 2,
	STRING = 3,
	ARRAY_WITH_STRINGS = 4,
	OBJECT_WITH_STRINGS = 5,
	ARRAY_WITH_MIXED = 6,
	OBJECT_WITH_MIXED = 7,
	TEXTFILE = 8,
	BASHFILE = 9,
	ERROR_MESSAGE = 10,
	ERROR_OBJECT = 11,
}

export enum TimeFormatEnum {
	getTime = 0,
	toISOString = 1,
	toUTCString = 2,
}

export enum DateFormatEnum {
	ISO = '.toISO',
}

export enum FunctionEnum {
	ConsoleGradientsEnum = 'consoleGradient',
	ConsoleColorsEnum = 'consoleChalk',
	ConsoleMethodsEnum = 'console',
	DateFormatEnum = 'new Date',
}

export enum MessageEnum {
	EMPTY_LINES = `\n\n`,
	TITLE_START = `\n\n--->\t!`,
	TITLE_END = `\t<---\n\n`,
	CREATED_FILE = `New File Created`,
	CREATED_LOG_MESSAGE = `New Log Message Created`,
	NO_FILE_SYSTEM = `No FileSystem Finded!`,
}
