import { A, N, R, S } from './types';
export declare const validate: (value: any, min?: N, max?: N) => TypeError[];
export declare const toInfo: (value: any) => string;
export declare const toJson: (value: any, desc?: S) => string;
export declare const toTextBlock: (value: any, desc?: S) => string;
export declare const matchChars: (input: S) => RegExpMatchArray;
export declare const isConstantStyle: (prop: S) => boolean | 0;
export declare const isStringLength: (input: S, min?: N, max?: N) => boolean;
export declare const strToArray: (input: S) => string[];
export declare const toTextValues: (input: S) => {
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
export declare const toTitleCase: (input: S) => string;
export declare const toValidChars: (input: S) => string;
export declare const matchWords: (input: S) => string[];
export declare const replaceInvalidChars: (input: S) => string;
export declare const isUpperCase: (input: S) => boolean;
export declare const rxpFromChars: (chars: A<S> | S, flags?: S) => RegExp;
export declare const rxpFromChars2: (chars: A<S> | S, flags?: S) => RegExp;
declare type tDictionarySource = {
    v1: A<S>;
    v2: S;
};
declare type tDictionarySourceMapped = tDictionarySource & Required<{
    chars: A<S> | S;
    rxp: R;
    findMatches: (text: S) => A<S>;
    replaceMatches: (text: S) => S;
}>;
export declare const dictionaryMapper: (src: tDictionarySource & any) => tDictionarySourceMapped | null;
export declare const dictionaryCreate: (inputs: A<any>) => (tDictionarySourceMapped | null)[];
export declare const dictionaryReplace: (text: S, dict: A<any>) => string;
export declare const toRomanNumeral: (input: S) => string;
export {};
