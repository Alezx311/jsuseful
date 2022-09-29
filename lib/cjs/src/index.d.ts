import * as ERRORS from './errors';
import * as CONSTANTS from './constants';
import * as RANDOMS from './random';
import * as MESSAGES from './message';
import * as USEFULS from './useful';
export declare class JSUSEFUL {
    static Error: typeof ERRORS;
    static Constant: typeof CONSTANTS;
    static Random: typeof RANDOMS;
    static Message: typeof MESSAGES;
    static Useful: typeof USEFULS;
}
export declare class Validators {
    static is: (v: any) => boolean;
    static isF: (v: any) => boolean;
    static isO: (v: any) => boolean;
    static isN: (v: any, l?: number) => boolean;
    static isS: (v: any, l?: number) => boolean;
    static isA: (v: any, l?: number) => boolean;
    static isB: (v: any) => boolean;
    static isE: (v: any) => boolean;
    static isNull: (v: any) => v is null;
    static isUndefined: (v: any) => v is undefined;
    static isRegExp: (v: any) => v is RegExp;
    static isError: (v: any) => v is import("./types").E;
    static isDate: (v: any) => v is Date;
    static isSymbol: (v: any) => v is Symbol;
    static isLen: (v: any, l?: number) => boolean;
    static isTruthy: (v: any) => boolean;
    static isOdd: (v?: number, n?: number, r1?: any, r2?: any) => any;
    static isPalindrome: (v?: string) => boolean;
}
export declare class Converters {
    static toS: (v: any) => string;
    static toA: (v: any) => any;
    static toO: (v: any) => any;
    static toL: (v: any) => any;
    static toJson: (v: any) => string;
    static toTypeOf: (v: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    static toCallback: (v?: any) => any;
}
export declare class Arrays {
    static arrLastIndex: (arr: import("./types").A<any>) => number | false;
    static arrLast: (arr: import("./types").A<any>, step?: number) => any;
    static arrFlat: (...values: any) => any;
    static arrUnical: (arr: import("./types").A<any>) => import("./types").A<any>;
    static arrUnicals: (input: import("./types").A<any>) => any[];
    static arrMax: (input: import("./types").A<any>) => number;
    static arrMin: (input: import("./types").A<any>) => number;
    static arrayQuickSort: (input: import("./types").A<any>) => import("./types").A<any>;
    static arrShuffle: ([...arr]: Iterable<any>) => any[];
    static arrQuickSort: (arr: import("./types").A<any>) => import("./types").A<any>;
}
export declare class Objects {
    static objAssign: (v1: any, v2: any) => any;
    static objKeys: (v: any) => string[];
    static objValues: (v: any) => unknown[];
    static objEntries: (v: any) => [string, unknown][];
    static objFrom: (v: any) => {
        [k: string]: any;
    };
    static objCreate: (input: import("./types").A<string>) => any;
}
export declare class Dates {
    static getTimePerformance: (v?: number | undefined) => number;
    static timeStamp: () => string;
    static timeISO: () => string;
    static timeUTC: () => string;
}
export declare class Sources {
    static getEntries(v: any): [string, unknown][];
    static getSourceValues(obj: any): any;
    static getConstantSourceValues(obj: any): any;
    static getExampleSourceValues(obj: any): any;
    static getFunctionSourceValues(obj: any): any;
    static ErrorMethods: any;
    static Constants: any;
    static Random: any;
    static Message: any;
    static Useful: any;
    static Values: any[];
}
export declare const JSUSEFUL_REDUCED: {
    is: (v: any) => boolean;
    isF: (v: any) => boolean;
    isO: (v: any) => boolean;
    isN: (v: any, l?: number) => boolean;
    isS: (v: any, l?: number) => boolean;
    isA: (v: any, l?: number) => boolean;
    isB: (v: any) => boolean;
    isE: (v: any) => boolean;
    isNull: (v: any) => v is null;
    isUndefined: (v: any) => v is undefined;
    isRegExp: (v: any) => v is RegExp;
    isError: (v: any) => v is import("./types").E;
    isDate: (v: any) => v is Date;
    isSymbol: (v: any) => v is Symbol;
    isLen: (v: any, l?: number) => boolean;
    isTruthy: (v: any) => boolean;
    isOdd: (v?: number, n?: number, r1?: any, r2?: any) => any;
    isPalindrome: (v?: string) => boolean;
    toS: (v: any) => string;
    toA: (v: any) => any;
    toO: (v: any) => any;
    toL: (v: any) => any;
    toJson: (v: any) => string;
    toTypeOf: (v: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    toCallback: (v?: any) => any;
    arrLastIndex: (arr: import("./types").A<any>) => number | false;
    arrLast: (arr: import("./types").A<any>, step?: number) => any;
    arrFlat: (...values: any) => any;
    arrUnical: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrUnicals: (input: import("./types").A<any>) => any[];
    arrMax: (input: import("./types").A<any>) => number;
    arrMin: (input: import("./types").A<any>) => number;
    arrayQuickSort: (input: import("./types").A<any>) => import("./types").A<any>;
    arrShuffle: ([...arr]: Iterable<any>) => any[];
    arrQuickSort: (arr: import("./types").A<any>) => import("./types").A<any>;
    objAssign: (v1: any, v2: any) => any;
    objKeys: (v: any) => string[];
    objValues: (v: any) => unknown[];
    objEntries: (v: any) => [string, unknown][];
    objFrom: (v: any) => {
        [k: string]: any;
    };
    objCreate: (input: import("./types").A<string>) => any;
    getTimePerformance: (v?: number | undefined) => number;
    timeStamp: () => string;
    timeISO: () => string;
    timeUTC: () => string;
    getSourceValues: (input: any) => {
        desc: string;
        value: any;
        index: number;
        type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    }[] | {
        desc: string;
        value: any;
        error: Error;
    }[];
    validate: (value: any, min?: number, max?: number) => TypeError[];
    toInfo: (value: any) => string;
    toTextBlock: (value: any, desc?: string) => string;
    matchChars: (input: string) => RegExpMatchArray;
    isConstantStyle: (prop: string) => boolean | 0;
    isStringLength: (input: string, min?: number, max?: number) => boolean;
    strToArray: (input: string) => string[];
    toTextValues: (input: string) => {
        value: string;
        wordsStats: {
            word: string;
            index: number;
            length: number;
            code: number[];
            popularity: number;
        }[];
        charsStats: {
            char: string;
            index: number;
            code: number;
            popularity: number;
        }[];
        lengthStats: {
            length: number;
            findedWords: number;
            findedWordsUnical: number;
            findedChars: number;
            findedCharsUnical: number;
        };
    };
    toTitleCase: (input: string) => string;
    toValidChars: (input: string) => string;
    matchWords: (input: string) => string[];
    replaceInvalidChars: (input: string) => string;
    isUpperCase: (input: string) => boolean;
    rxpFromChars: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
    rxpFromChars2: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
    dictionaryMapper: (src: any) => ({
        v1: import("./types").A<string>;
        v2: string;
    } & Required<{
        chars: string | import("./types").A<string>;
        rxp: RegExp;
        findMatches: (text: string) => import("./types").A<string>;
        replaceMatches: (text: string) => string;
    }>) | null;
    dictionaryCreate: (inputs: import("./types").A<any>) => (({
        v1: import("./types").A<string>;
        v2: string;
    } & Required<{
        chars: string | import("./types").A<string>;
        rxp: RegExp;
        findMatches: (text: string) => import("./types").A<string>;
        replaceMatches: (text: string) => string;
    }>) | null)[];
    dictionaryReplace: (text: string, dict: import("./types").A<any>) => string;
    toRomanNumeral: (input: string) => string;
    RANDOM_ARRAY_SIZE: 10;
    RANDOM_MIN: 0;
    RANDOM_MAX: 1000000;
    RANDOM_CONSTANTS_SOURCES: {
        desc: string;
        value: number;
    }[];
    RANDOM_NUM: number;
    RANDOM_BOOL: boolean;
    RANDOM_INT: number;
    RANDOM_STR: string;
    RANDOM_SRC: {
        desc: string;
        value: number;
    };
    RANDOM_ARR: (string | number | boolean | {
        desc: string;
        value: number;
    })[];
    RANDOM_OBJ: {
        NUM: number;
        BOOL: boolean;
        INT: number;
        STR: string;
        ARR: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
        SRC: {
            desc: string;
            value: number;
        };
    };
    RANDOM_TEXT: string;
    RANDOM_VALUES_SOURCES: ({
        desc: string;
        value: number;
    } | {
        desc: string;
        value: boolean;
    } | {
        desc: string;
        value: string;
    } | {
        desc: string;
        value: {
            desc: string;
            value: number;
        };
    } | {
        desc: string;
        value: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
    } | {
        desc: string;
        value: {
            NUM: number;
            BOOL: boolean;
            INT: number;
            STR: string;
            ARR: (string | number | boolean | {
                desc: string;
                value: number;
            })[];
            SRC: {
                desc: string;
                value: number;
            };
        };
    })[];
    random: () => number;
    randomBool: (chance?: number) => boolean;
    randomNum: (max?: number, min?: number) => number;
    randomInt: (max?: number, min?: number) => number;
    randomCoin: (value1?: any, value2?: any) => any;
    randomStr: (input?: number) => string;
    randomArr: (size?: number, value?: any) => any[];
    randomMany: (size?: number, value?: any) => any[];
    randomIndex: (input?: string | import("./types").A<any>) => number;
    randomElement: (input?: string | import("./types").A<any>) => any;
    randomSort: (input?: import("./types").A<any>) => import("./types").A<any>;
    randomShuffle: (input?: import("./types").A<any>) => any[];
    randomSource: (input?: any) => {
        value: string;
        input: any;
        desc: string;
    };
    randomObject: (size?: number, input?: any) => {
        [k: string]: string;
    };
    randomKey: (value?: any) => any;
    randomValue: (value?: any) => any;
    randomEntry: (value?: any) => any;
    RANDOM_EXAMPLES_SOURCES: ({
        desc: string;
        value: boolean;
        func: (chance?: number) => boolean;
    } | {
        desc: string;
        value: number;
        func: (max?: number, min?: number) => number;
    } | {
        desc: string;
        value: any;
        func: (value1?: any, value2?: any) => any;
    } | {
        desc: string;
        value: string;
        func: (input?: number) => string;
    } | {
        desc: string;
        value: any[];
        func: (size?: number, value?: any) => any[];
    } | {
        desc: string;
        value: any;
        func: (input?: string | import("./types").A<any>) => any;
    } | {
        desc: string;
        value: import("./types").A<any>;
        func: (input?: import("./types").A<any>) => import("./types").A<any>;
    } | {
        desc: string;
        value: {
            [k: string]: string;
        };
        func: (size?: number, input?: any) => {
            [k: string]: string;
        };
    })[];
    genArr: (n: number, v?: any) => any[];
    genNums: (n: number) => any[];
    genSources: (n: number) => {
        desc: string;
        value: number;
        index: number;
    }[];
    randomTypeOf: () => any;
    randomSourceByType: (type?: string | undefined) => {
        desc: string;
        value: string | number | boolean | symbol | {
            [k: string]: string;
        } | (() => number) | undefined;
        type: string | undefined;
    };
    randomMusicNoteChar: () => any;
    randomMusicNoteBemole: () => any;
    randomMusicNoteSharp: () => any;
    randomMusicScale: () => any;
    randomMusicDurationChar: () => any;
    randomMusicIntervalChar: () => any;
    randomMusicOctave: () => number;
    randomMusicMidiIndex: () => number;
    randomMusicValues: () => {
        noteChar: any;
        noteBemole: any;
        noteSharp: any;
        scale: any;
        durationChar: any;
        intervalChar: any;
        octave: number;
        midiIndex: number;
    };
    randomColorClassname: () => any;
    randomColorName: () => any;
    randomColorCode: () => any;
    randomColorValues: () => {
        className: any;
        name: any;
        code: any;
    };
    float: (min: number | undefined, max: number | undefined, fixedSize: number) => number;
    number: (min?: number, max?: number) => number;
    powerOfTwo: (min?: number, max?: number) => number;
    numbersDeep: (len?: number, maxDeep?: number) => import("./types").DeepA<number>;
    values: (arr: import("./types").A<any>) => import("./types").A<any>;
    boolean: (chance?: number) => boolean;
    array: (size?: number, cb?: any) => any[];
    numbers: (size?: number, min?: number, max?: number) => number[];
    arrays: (size?: number, maxDeep?: number) => import("./types").DeepA<number>;
    arrayGrow: (arr: import("./types").A<any>, growSize?: number) => import("./types").A<any>;
    arraySequence: (start?: number, end?: number) => import("./types").A<any>;
    arrayChange: (size: number | undefined, arr: import("./types").A<any>) => import("./types").A<any>;
    arrayMerge: (...arr: import("./types").A<any>) => import("./types").A<any>;
    arrayDouble: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayRepeats: (arr: import("./types").A<any>, repeats?: number) => import("./types").A<any>;
    arrayIndex: (arr: import("./types").A<any>) => number;
    arrayElement: (arr: import("./types").A<any>) => any;
    arrayElements: (arr: import("./types").A<any>, size?: number) => import("./types").A<any>;
    arrayUnicals: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayShuffle: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayPart: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayDeepSomeValues: (arr: import("./types").A<any>, chance?: number | undefined) => import("./types").DeepA<import("./types").A<any>>;
    joinedStrings: (parts: string[], size?: number | undefined) => string;
    objectKey: (obj?: any) => string;
    objectValue: (obj?: any) => import("./types").Value;
    objectEntry: (obj?: any) => import("./types").Entry;
    STR: "Some string value";
    RND: 0.311;
    BLN: false;
    NUM: 237563390;
    ARR: (string | number)[];
    OBJ: {
        STR: string;
        NUM: number;
    };
    ERR: Error;
    BIG: number;
    FUNC: (v: any) => number;
    TYPEOF: string[];
    MUSIC_NOTES_CHARS: ("A" | "B" | "C" | "D" | "F" | "E" | "G")[];
    MUSIC_NOTES_BEMOLE: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "Bb" | "Db" | "Fb" | "Gb" | "Ab")[];
    MUSIC_NOTES_SHARP: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "A#" | "C#" | "D#" | "E#" | "G#")[];
    MUSIC_DURATION_CHARS: ("n" | "t" | "m")[];
    MUSIC_INTERVAL_CHARS: ("P1" | "M2" | "M3" | "P4" | "P5" | "M6" | "M7")[];
    MUSIC_SCALES: ("major" | "minor" | "ionian" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian" | "majorpentatonic" | "minorpentatonic" | "chromatic" | "harmonicchromatic" | "blues" | "doubleharmonic" | "flamenco" | "harmonicminor" | "melodicminor" | "wholetone")[];
    COLOR_CLASS: ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "body" | "white" | "transparent")[];
    COLOR_NAMES: ("blue" | "indigo" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan")[];
    COLOR_CODES: ("#ff0000" | "#ff4e00" | "#db7b00" | "#ffcc00" | "#e4ed00" | "#81d700" | "#00ffb4" | "#00ffea" | "#00baff" | "#3c00ff" | "#a800ff" | "#ff00fd")[];
    errBasic: (msg?: string) => Error;
    errType: (msg?: string) => TypeError;
    errEval: (msg?: string) => EvalError;
    errRange: (msg?: string) => RangeError;
    errSyntax: (msg?: string) => SyntaxError;
    errReference: (msg?: string) => ReferenceError;
    ERROR_BASIC: Error;
    ERROR_TYPE: TypeError;
    ERROR_EVAL: EvalError;
    ERROR_RANGE: RangeError;
    ERROR_SYNTAX: SyntaxError;
    ERROR_REFERENCE: ReferenceError;
    ERROR_TYPE_NOT_STRING: TypeError;
    ERROR_TYPE_NOT_ARRAY: TypeError;
    ERROR_VALUE: TypeError;
    ERROR_VALUE_NOT_DEFINED: TypeError;
    ERROR_VALUE_NOT_TRUTHY: TypeError;
    ERROR_LENGTH: TypeError;
    ERROR_LENGTH_SHORT: TypeError;
    ERROR_LENGTH_LARGE: TypeError;
};
export declare const JsUseful: {
    All: {
        is: (v: any) => boolean;
        isF: (v: any) => boolean;
        isO: (v: any) => boolean;
        isN: (v: any, l?: number) => boolean;
        isS: (v: any, l?: number) => boolean;
        isA: (v: any, l?: number) => boolean;
        isB: (v: any) => boolean;
        isE: (v: any) => boolean;
        isNull: (v: any) => v is null;
        isUndefined: (v: any) => v is undefined;
        isRegExp: (v: any) => v is RegExp;
        isError: (v: any) => v is import("./types").E;
        isDate: (v: any) => v is Date;
        isSymbol: (v: any) => v is Symbol;
        isLen: (v: any, l?: number) => boolean;
        isTruthy: (v: any) => boolean;
        isOdd: (v?: number, n?: number, r1?: any, r2?: any) => any;
        isPalindrome: (v?: string) => boolean;
        toS: (v: any) => string;
        toA: (v: any) => any;
        toO: (v: any) => any;
        toL: (v: any) => any;
        toJson: (v: any) => string;
        toTypeOf: (v: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        toCallback: (v?: any) => any;
        arrLastIndex: (arr: import("./types").A<any>) => number | false;
        arrLast: (arr: import("./types").A<any>, step?: number) => any;
        arrFlat: (...values: any) => any;
        arrUnical: (arr: import("./types").A<any>) => import("./types").A<any>;
        arrUnicals: (input: import("./types").A<any>) => any[];
        arrMax: (input: import("./types").A<any>) => number;
        arrMin: (input: import("./types").A<any>) => number;
        arrayQuickSort: (input: import("./types").A<any>) => import("./types").A<any>;
        arrShuffle: ([...arr]: Iterable<any>) => any[];
        arrQuickSort: (arr: import("./types").A<any>) => import("./types").A<any>;
        objAssign: (v1: any, v2: any) => any;
        objKeys: (v: any) => string[];
        objValues: (v: any) => unknown[];
        objEntries: (v: any) => [string, unknown][];
        objFrom: (v: any) => {
            [k: string]: any;
        };
        objCreate: (input: import("./types").A<string>) => any;
        getTimePerformance: (v?: number | undefined) => number;
        timeStamp: () => string;
        timeISO: () => string;
        timeUTC: () => string;
        getSourceValues: (input: any) => {
            desc: string;
            value: any;
            index: number;
            type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
        }[] | {
            desc: string;
            value: any;
            error: Error;
        }[];
        validate: (value: any, min?: number, max?: number) => TypeError[];
        toInfo: (value: any) => string;
        toTextBlock: (value: any, desc?: string) => string;
        matchChars: (input: string) => RegExpMatchArray;
        isConstantStyle: (prop: string) => boolean | 0;
        isStringLength: (input: string, min?: number, max?: number) => boolean;
        strToArray: (input: string) => string[];
        toTextValues: (input: string) => {
            value: string;
            wordsStats: {
                word: string;
                index: number;
                length: number;
                code: number[];
                popularity: number;
            }[];
            charsStats: {
                char: string;
                index: number;
                code: number;
                popularity: number;
            }[];
            lengthStats: {
                length: number;
                findedWords: number;
                findedWordsUnical: number;
                findedChars: number;
                findedCharsUnical: number;
            };
        };
        toTitleCase: (input: string) => string;
        toValidChars: (input: string) => string;
        matchWords: (input: string) => string[];
        replaceInvalidChars: (input: string) => string;
        isUpperCase: (input: string) => boolean;
        rxpFromChars: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
        rxpFromChars2: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
        dictionaryMapper: (src: any) => ({
            v1: import("./types").A<string>;
            v2: string;
        } & Required<{
            chars: string | import("./types").A<string>;
            rxp: RegExp;
            findMatches: (text: string) => import("./types").A<string>;
            replaceMatches: (text: string) => string;
        }>) | null;
        dictionaryCreate: (inputs: import("./types").A<any>) => (({
            v1: import("./types").A<string>;
            v2: string;
        } & Required<{
            chars: string | import("./types").A<string>;
            rxp: RegExp;
            findMatches: (text: string) => import("./types").A<string>;
            replaceMatches: (text: string) => string;
        }>) | null)[];
        dictionaryReplace: (text: string, dict: import("./types").A<any>) => string;
        toRomanNumeral: (input: string) => string;
        RANDOM_ARRAY_SIZE: 10;
        RANDOM_MIN: 0;
        RANDOM_MAX: 1000000;
        RANDOM_CONSTANTS_SOURCES: {
            desc: string;
            value: number;
        }[];
        RANDOM_NUM: number;
        RANDOM_BOOL: boolean;
        RANDOM_INT: number;
        RANDOM_STR: string;
        RANDOM_SRC: {
            desc: string;
            value: number;
        };
        RANDOM_ARR: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
        RANDOM_OBJ: {
            NUM: number;
            BOOL: boolean;
            INT: number;
            STR: string;
            ARR: (string | number | boolean | {
                desc: string;
                value: number;
            })[];
            SRC: {
                desc: string;
                value: number;
            };
        };
        RANDOM_TEXT: string;
        RANDOM_VALUES_SOURCES: ({
            desc: string;
            value: number;
        } | {
            desc: string;
            value: boolean;
        } | {
            desc: string;
            value: string;
        } | {
            desc: string;
            value: {
                desc: string;
                value: number;
            };
        } | {
            desc: string;
            value: (string | number | boolean | {
                desc: string;
                value: number;
            })[];
        } | {
            desc: string;
            value: {
                NUM: number;
                BOOL: boolean;
                INT: number;
                STR: string;
                ARR: (string | number | boolean | {
                    desc: string;
                    value: number;
                })[];
                SRC: {
                    desc: string;
                    value: number;
                };
            };
        })[];
        random: () => number;
        randomBool: (chance?: number) => boolean;
        randomNum: (max?: number, min?: number) => number;
        randomInt: (max?: number, min?: number) => number;
        randomCoin: (value1?: any, value2?: any) => any;
        randomStr: (input?: number) => string;
        randomArr: (size?: number, value?: any) => any[];
        randomMany: (size?: number, value?: any) => any[];
        randomIndex: (input?: string | import("./types").A<any>) => number;
        randomElement: (input?: string | import("./types").A<any>) => any;
        randomSort: (input?: import("./types").A<any>) => import("./types").A<any>;
        randomShuffle: (input?: import("./types").A<any>) => any[];
        randomSource: (input?: any) => {
            value: string;
            input: any;
            desc: string;
        };
        randomObject: (size?: number, input?: any) => {
            [k: string]: string;
        };
        randomKey: (value?: any) => any;
        randomValue: (value?: any) => any;
        randomEntry: (value?: any) => any;
        RANDOM_EXAMPLES_SOURCES: ({
            desc: string;
            value: boolean;
            func: (chance?: number) => boolean;
        } | {
            desc: string;
            value: number;
            func: (max?: number, min?: number) => number;
        } | {
            desc: string;
            value: any;
            func: (value1?: any, value2?: any) => any;
        } | {
            desc: string;
            value: string;
            func: (input?: number) => string;
        } | {
            desc: string;
            value: any[];
            func: (size?: number, value?: any) => any[];
        } | {
            desc: string;
            value: any;
            func: (input?: string | import("./types").A<any>) => any;
        } | {
            desc: string;
            value: import("./types").A<any>;
            func: (input?: import("./types").A<any>) => import("./types").A<any>;
        } | {
            desc: string;
            value: {
                [k: string]: string;
            };
            func: (size?: number, input?: any) => {
                [k: string]: string;
            };
        })[];
        genArr: (n: number, v?: any) => any[];
        genNums: (n: number) => any[];
        genSources: (n: number) => {
            desc: string;
            value: number;
            index: number;
        }[];
        randomTypeOf: () => any;
        randomSourceByType: (type?: string | undefined) => {
            desc: string;
            value: string | number | boolean | symbol | {
                [k: string]: string;
            } | (() => number) | undefined;
            type: string | undefined;
        };
        randomMusicNoteChar: () => any;
        randomMusicNoteBemole: () => any;
        randomMusicNoteSharp: () => any;
        randomMusicScale: () => any;
        randomMusicDurationChar: () => any;
        randomMusicIntervalChar: () => any;
        randomMusicOctave: () => number;
        randomMusicMidiIndex: () => number;
        randomMusicValues: () => {
            noteChar: any;
            noteBemole: any;
            noteSharp: any;
            scale: any;
            durationChar: any;
            intervalChar: any;
            octave: number;
            midiIndex: number;
        };
        randomColorClassname: () => any;
        randomColorName: () => any;
        randomColorCode: () => any;
        randomColorValues: () => {
            className: any;
            name: any;
            code: any;
        };
        float: (min: number | undefined, max: number | undefined, fixedSize: number) => number;
        number: (min?: number, max?: number) => number;
        powerOfTwo: (min?: number, max?: number) => number;
        numbersDeep: (len?: number, maxDeep?: number) => import("./types").DeepA<number>;
        values: (arr: import("./types").A<any>) => import("./types").A<any>;
        boolean: (chance?: number) => boolean;
        array: (size?: number, cb?: any) => any[];
        numbers: (size?: number, min?: number, max?: number) => number[];
        arrays: (size?: number, maxDeep?: number) => import("./types").DeepA<number>;
        arrayGrow: (arr: import("./types").A<any>, growSize?: number) => import("./types").A<any>;
        arraySequence: (start?: number, end?: number) => import("./types").A<any>;
        arrayChange: (size: number | undefined, arr: import("./types").A<any>) => import("./types").A<any>;
        arrayMerge: (...arr: import("./types").A<any>) => import("./types").A<any>;
        arrayDouble: (arr: import("./types").A<any>) => import("./types").A<any>;
        arrayRepeats: (arr: import("./types").A<any>, repeats?: number) => import("./types").A<any>;
        arrayIndex: (arr: import("./types").A<any>) => number;
        arrayElement: (arr: import("./types").A<any>) => any;
        arrayElements: (arr: import("./types").A<any>, size?: number) => import("./types").A<any>;
        arrayUnicals: (arr: import("./types").A<any>) => import("./types").A<any>;
        arrayShuffle: (arr: import("./types").A<any>) => import("./types").A<any>;
        arrayPart: (arr: import("./types").A<any>) => import("./types").A<any>;
        arrayDeepSomeValues: (arr: import("./types").A<any>, chance?: number | undefined) => import("./types").DeepA<import("./types").A<any>>;
        joinedStrings: (parts: string[], size?: number | undefined) => string;
        objectKey: (obj?: any) => string;
        objectValue: (obj?: any) => import("./types").Value;
        objectEntry: (obj?: any) => import("./types").Entry;
        STR: "Some string value";
        RND: 0.311;
        BLN: false;
        NUM: 237563390;
        ARR: (string | number)[];
        OBJ: {
            STR: string;
            NUM: number;
        };
        ERR: Error;
        BIG: number;
        FUNC: (v: any) => number;
        TYPEOF: string[];
        MUSIC_NOTES_CHARS: ("A" | "B" | "C" | "D" | "F" | "E" | "G")[];
        MUSIC_NOTES_BEMOLE: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "Bb" | "Db" | "Fb" | "Gb" | "Ab")[];
        MUSIC_NOTES_SHARP: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "A#" | "C#" | "D#" | "E#" | "G#")[];
        MUSIC_DURATION_CHARS: ("n" | "t" | "m")[];
        MUSIC_INTERVAL_CHARS: ("P1" | "M2" | "M3" | "P4" | "P5" | "M6" | "M7")[];
        MUSIC_SCALES: ("major" | "minor" | "ionian" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian" | "majorpentatonic" | "minorpentatonic" | "chromatic" | "harmonicchromatic" | "blues" | "doubleharmonic" | "flamenco" | "harmonicminor" | "melodicminor" | "wholetone")[];
        COLOR_CLASS: ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "body" | "white" | "transparent")[];
        COLOR_NAMES: ("blue" | "indigo" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan")[];
        COLOR_CODES: ("#ff0000" | "#ff4e00" | "#db7b00" | "#ffcc00" | "#e4ed00" | "#81d700" | "#00ffb4" | "#00ffea" | "#00baff" | "#3c00ff" | "#a800ff" | "#ff00fd")[];
        errBasic: (msg?: string) => Error;
        errType: (msg?: string) => TypeError;
        errEval: (msg?: string) => EvalError;
        errRange: (msg?: string) => RangeError;
        errSyntax: (msg?: string) => SyntaxError;
        errReference: (msg?: string) => ReferenceError;
        ERROR_BASIC: Error;
        ERROR_TYPE: TypeError;
        ERROR_EVAL: EvalError;
        ERROR_RANGE: RangeError;
        ERROR_SYNTAX: SyntaxError;
        ERROR_REFERENCE: ReferenceError;
        ERROR_TYPE_NOT_STRING: TypeError;
        ERROR_TYPE_NOT_ARRAY: TypeError;
        ERROR_VALUE: TypeError;
        ERROR_VALUE_NOT_DEFINED: TypeError;
        ERROR_VALUE_NOT_TRUTHY: TypeError;
        ERROR_LENGTH: TypeError;
        ERROR_LENGTH_SHORT: TypeError;
        ERROR_LENGTH_LARGE: TypeError;
    };
    Errors: typeof ERRORS;
    Constants: typeof CONSTANTS;
    Randoms: typeof RANDOMS;
    Messages: typeof MESSAGES;
    Useful: typeof USEFULS;
    Validators: typeof Validators;
    Converters: typeof Converters;
    Arrays: typeof Arrays;
    Objects: typeof Objects;
    Dates: typeof Dates;
    Sources: typeof Sources;
    is: (v: any) => boolean;
    isF: (v: any) => boolean;
    isO: (v: any) => boolean;
    isN: (v: any, l?: number) => boolean;
    isS: (v: any, l?: number) => boolean;
    isA: (v: any, l?: number) => boolean;
    isB: (v: any) => boolean;
    isE: (v: any) => boolean;
    isNull: (v: any) => v is null;
    isUndefined: (v: any) => v is undefined;
    isRegExp: (v: any) => v is RegExp;
    isError: (v: any) => v is import("./types").E;
    isDate: (v: any) => v is Date;
    isSymbol: (v: any) => v is Symbol;
    isLen: (v: any, l?: number) => boolean;
    isTruthy: (v: any) => boolean;
    isOdd: (v?: number, n?: number, r1?: any, r2?: any) => any;
    isPalindrome: (v?: string) => boolean;
    toS: (v: any) => string;
    toA: (v: any) => any;
    toO: (v: any) => any;
    toL: (v: any) => any;
    toJson: (v: any) => string;
    toTypeOf: (v: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    toCallback: (v?: any) => any;
    arrLastIndex: (arr: import("./types").A<any>) => number | false;
    arrLast: (arr: import("./types").A<any>, step?: number) => any;
    arrFlat: (...values: any) => any;
    arrUnical: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrUnicals: (input: import("./types").A<any>) => any[];
    arrMax: (input: import("./types").A<any>) => number;
    arrMin: (input: import("./types").A<any>) => number;
    arrayQuickSort: (input: import("./types").A<any>) => import("./types").A<any>;
    arrShuffle: ([...arr]: Iterable<any>) => any[];
    arrQuickSort: (arr: import("./types").A<any>) => import("./types").A<any>;
    objAssign: (v1: any, v2: any) => any;
    objKeys: (v: any) => string[];
    objValues: (v: any) => unknown[];
    objEntries: (v: any) => [string, unknown][];
    objFrom: (v: any) => {
        [k: string]: any;
    };
    objCreate: (input: import("./types").A<string>) => any;
    getTimePerformance: (v?: number | undefined) => number;
    timeStamp: () => string;
    timeISO: () => string;
    timeUTC: () => string;
    getSourceValues: (input: any) => {
        desc: string;
        value: any;
        index: number;
        type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    }[] | {
        desc: string;
        value: any;
        error: Error;
    }[];
    validate: (value: any, min?: number, max?: number) => TypeError[];
    toInfo: (value: any) => string;
    toTextBlock: (value: any, desc?: string) => string;
    matchChars: (input: string) => RegExpMatchArray;
    isConstantStyle: (prop: string) => boolean | 0;
    isStringLength: (input: string, min?: number, max?: number) => boolean;
    strToArray: (input: string) => string[];
    toTextValues: (input: string) => {
        value: string;
        wordsStats: {
            word: string;
            index: number;
            length: number;
            code: number[];
            popularity: number;
        }[];
        charsStats: {
            char: string;
            index: number;
            code: number;
            popularity: number;
        }[];
        lengthStats: {
            length: number;
            findedWords: number;
            findedWordsUnical: number;
            findedChars: number;
            findedCharsUnical: number;
        };
    };
    toTitleCase: (input: string) => string;
    toValidChars: (input: string) => string;
    matchWords: (input: string) => string[];
    replaceInvalidChars: (input: string) => string;
    isUpperCase: (input: string) => boolean;
    rxpFromChars: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
    rxpFromChars2: (chars: string | import("./types").A<string>, flags?: string) => RegExp;
    dictionaryMapper: (src: any) => ({
        v1: import("./types").A<string>;
        v2: string;
    } & Required<{
        chars: string | import("./types").A<string>;
        rxp: RegExp;
        findMatches: (text: string) => import("./types").A<string>;
        replaceMatches: (text: string) => string;
    }>) | null;
    dictionaryCreate: (inputs: import("./types").A<any>) => (({
        v1: import("./types").A<string>;
        v2: string;
    } & Required<{
        chars: string | import("./types").A<string>;
        rxp: RegExp;
        findMatches: (text: string) => import("./types").A<string>;
        replaceMatches: (text: string) => string;
    }>) | null)[];
    dictionaryReplace: (text: string, dict: import("./types").A<any>) => string;
    toRomanNumeral: (input: string) => string;
    RANDOM_ARRAY_SIZE: 10;
    RANDOM_MIN: 0;
    RANDOM_MAX: 1000000;
    RANDOM_CONSTANTS_SOURCES: {
        desc: string;
        value: number;
    }[];
    RANDOM_NUM: number;
    RANDOM_BOOL: boolean;
    RANDOM_INT: number;
    RANDOM_STR: string;
    RANDOM_SRC: {
        desc: string;
        value: number;
    };
    RANDOM_ARR: (string | number | boolean | {
        desc: string;
        value: number;
    })[];
    RANDOM_OBJ: {
        NUM: number;
        BOOL: boolean;
        INT: number;
        STR: string;
        ARR: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
        SRC: {
            desc: string;
            value: number;
        };
    };
    RANDOM_TEXT: string;
    RANDOM_VALUES_SOURCES: ({
        desc: string;
        value: number;
    } | {
        desc: string;
        value: boolean;
    } | {
        desc: string;
        value: string;
    } | {
        desc: string;
        value: {
            desc: string;
            value: number;
        };
    } | {
        desc: string;
        value: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
    } | {
        desc: string;
        value: {
            NUM: number;
            BOOL: boolean;
            INT: number;
            STR: string;
            ARR: (string | number | boolean | {
                desc: string;
                value: number;
            })[];
            SRC: {
                desc: string;
                value: number;
            };
        };
    })[];
    random: () => number;
    randomBool: (chance?: number) => boolean;
    randomNum: (max?: number, min?: number) => number;
    randomInt: (max?: number, min?: number) => number;
    randomCoin: (value1?: any, value2?: any) => any;
    randomStr: (input?: number) => string;
    randomArr: (size?: number, value?: any) => any[];
    randomMany: (size?: number, value?: any) => any[];
    randomIndex: (input?: string | import("./types").A<any>) => number;
    randomElement: (input?: string | import("./types").A<any>) => any;
    randomSort: (input?: import("./types").A<any>) => import("./types").A<any>;
    randomShuffle: (input?: import("./types").A<any>) => any[];
    randomSource: (input?: any) => {
        value: string;
        input: any;
        desc: string;
    };
    randomObject: (size?: number, input?: any) => {
        [k: string]: string;
    };
    randomKey: (value?: any) => any;
    randomValue: (value?: any) => any;
    randomEntry: (value?: any) => any;
    RANDOM_EXAMPLES_SOURCES: ({
        desc: string;
        value: boolean;
        func: (chance?: number) => boolean;
    } | {
        desc: string;
        value: number;
        func: (max?: number, min?: number) => number;
    } | {
        desc: string;
        value: any;
        func: (value1?: any, value2?: any) => any;
    } | {
        desc: string;
        value: string;
        func: (input?: number) => string;
    } | {
        desc: string;
        value: any[];
        func: (size?: number, value?: any) => any[];
    } | {
        desc: string;
        value: any;
        func: (input?: string | import("./types").A<any>) => any;
    } | {
        desc: string;
        value: import("./types").A<any>;
        func: (input?: import("./types").A<any>) => import("./types").A<any>;
    } | {
        desc: string;
        value: {
            [k: string]: string;
        };
        func: (size?: number, input?: any) => {
            [k: string]: string;
        };
    })[];
    genArr: (n: number, v?: any) => any[];
    genNums: (n: number) => any[];
    genSources: (n: number) => {
        desc: string;
        value: number;
        index: number;
    }[];
    randomTypeOf: () => any;
    randomSourceByType: (type?: string | undefined) => {
        desc: string;
        value: string | number | boolean | symbol | {
            [k: string]: string;
        } | (() => number) | undefined;
        type: string | undefined;
    };
    randomMusicNoteChar: () => any;
    randomMusicNoteBemole: () => any;
    randomMusicNoteSharp: () => any;
    randomMusicScale: () => any;
    randomMusicDurationChar: () => any;
    randomMusicIntervalChar: () => any;
    randomMusicOctave: () => number;
    randomMusicMidiIndex: () => number;
    randomMusicValues: () => {
        noteChar: any;
        noteBemole: any;
        noteSharp: any;
        scale: any;
        durationChar: any;
        intervalChar: any;
        octave: number;
        midiIndex: number;
    };
    randomColorClassname: () => any;
    randomColorName: () => any;
    randomColorCode: () => any;
    randomColorValues: () => {
        className: any;
        name: any;
        code: any;
    };
    float: (min: number | undefined, max: number | undefined, fixedSize: number) => number;
    number: (min?: number, max?: number) => number;
    powerOfTwo: (min?: number, max?: number) => number;
    numbersDeep: (len?: number, maxDeep?: number) => import("./types").DeepA<number>;
    values: (arr: import("./types").A<any>) => import("./types").A<any>;
    boolean: (chance?: number) => boolean;
    array: (size?: number, cb?: any) => any[];
    numbers: (size?: number, min?: number, max?: number) => number[];
    arrays: (size?: number, maxDeep?: number) => import("./types").DeepA<number>;
    arrayGrow: (arr: import("./types").A<any>, growSize?: number) => import("./types").A<any>;
    arraySequence: (start?: number, end?: number) => import("./types").A<any>;
    arrayChange: (size: number | undefined, arr: import("./types").A<any>) => import("./types").A<any>;
    arrayMerge: (...arr: import("./types").A<any>) => import("./types").A<any>;
    arrayDouble: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayRepeats: (arr: import("./types").A<any>, repeats?: number) => import("./types").A<any>;
    arrayIndex: (arr: import("./types").A<any>) => number;
    arrayElement: (arr: import("./types").A<any>) => any;
    arrayElements: (arr: import("./types").A<any>, size?: number) => import("./types").A<any>;
    arrayUnicals: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayShuffle: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayPart: (arr: import("./types").A<any>) => import("./types").A<any>;
    arrayDeepSomeValues: (arr: import("./types").A<any>, chance?: number | undefined) => import("./types").DeepA<import("./types").A<any>>;
    joinedStrings: (parts: string[], size?: number | undefined) => string;
    objectKey: (obj?: any) => string;
    objectValue: (obj?: any) => import("./types").Value;
    objectEntry: (obj?: any) => import("./types").Entry;
    STR: "Some string value";
    RND: 0.311;
    BLN: false;
    NUM: 237563390;
    ARR: (string | number)[];
    OBJ: {
        STR: string;
        NUM: number;
    };
    ERR: Error;
    BIG: number;
    FUNC: (v: any) => number;
    TYPEOF: string[];
    MUSIC_NOTES_CHARS: ("A" | "B" | "C" | "D" | "F" | "E" | "G")[];
    MUSIC_NOTES_BEMOLE: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "Bb" | "Db" | "Fb" | "Gb" | "Ab")[];
    MUSIC_NOTES_SHARP: ("A" | "B" | "C" | "D" | "F" | "E" | "G" | "A#" | "C#" | "D#" | "E#" | "G#")[];
    MUSIC_DURATION_CHARS: ("n" | "t" | "m")[];
    MUSIC_INTERVAL_CHARS: ("P1" | "M2" | "M3" | "P4" | "P5" | "M6" | "M7")[];
    MUSIC_SCALES: ("major" | "minor" | "ionian" | "dorian" | "phrygian" | "lydian" | "mixolydian" | "aeolian" | "locrian" | "majorpentatonic" | "minorpentatonic" | "chromatic" | "harmonicchromatic" | "blues" | "doubleharmonic" | "flamenco" | "harmonicminor" | "melodicminor" | "wholetone")[];
    COLOR_CLASS: ("primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "body" | "white" | "transparent")[];
    COLOR_NAMES: ("blue" | "indigo" | "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "teal" | "cyan")[];
    COLOR_CODES: ("#ff0000" | "#ff4e00" | "#db7b00" | "#ffcc00" | "#e4ed00" | "#81d700" | "#00ffb4" | "#00ffea" | "#00baff" | "#3c00ff" | "#a800ff" | "#ff00fd")[];
    errBasic: (msg?: string) => Error;
    errType: (msg?: string) => TypeError;
    errEval: (msg?: string) => EvalError;
    errRange: (msg?: string) => RangeError;
    errSyntax: (msg?: string) => SyntaxError;
    errReference: (msg?: string) => ReferenceError;
    ERROR_BASIC: Error;
    ERROR_TYPE: TypeError;
    ERROR_EVAL: EvalError;
    ERROR_RANGE: RangeError;
    ERROR_SYNTAX: SyntaxError;
    ERROR_REFERENCE: ReferenceError;
    ERROR_TYPE_NOT_STRING: TypeError;
    ERROR_TYPE_NOT_ARRAY: TypeError;
    ERROR_VALUE: TypeError;
    ERROR_VALUE_NOT_DEFINED: TypeError;
    ERROR_VALUE_NOT_TRUTHY: TypeError;
    ERROR_LENGTH: TypeError;
    ERROR_LENGTH_SHORT: TypeError;
    ERROR_LENGTH_LARGE: TypeError;
};
export default JsUseful;
