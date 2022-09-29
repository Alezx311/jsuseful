import { A, E, N, S } from './types';
export declare const is: (v: any) => boolean;
export declare const isF: (v: any) => boolean;
export declare const isO: (v: any) => boolean;
export declare const isN: (v: any, l?: N) => boolean;
export declare const isS: (v: any, l?: N) => boolean;
export declare const isA: (v: any, l?: N) => boolean;
export declare const isB: (v: any) => boolean;
export declare const isE: (v: any) => boolean;
export declare const isNull: (v: any) => v is null;
export declare const isUndefined: (v: any) => v is undefined;
export declare const isRegExp: (v: any) => v is RegExp;
export declare const isError: (v: any) => v is E;
export declare const isDate: (v: any) => v is Date;
export declare const isSymbol: (v: any) => v is Symbol;
export declare const isLen: (v: any, l?: N) => boolean;
export declare const isTruthy: (v: any) => boolean;
export declare const isOdd: (v?: N, n?: N, r1?: any, r2?: any) => any;
export declare const isPalindrome: (v?: S) => boolean;
export declare const toS: (v: any) => string;
export declare const toA: (v: any) => any;
export declare const toO: (v: any) => any;
export declare const toL: (v: any) => any;
export declare const toJson: (v: any) => string;
export declare const toTypeOf: (v: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
export declare const toCallback: (v?: any) => any;
export declare const arrLastIndex: (arr: A<any>) => number | false;
export declare const arrLast: (arr: A<any>, step?: N) => any;
export declare const arrFlat: (...values: any) => any;
export declare const arrUnical: (arr: A<any>) => A<any>;
export declare const arrUnicals: (input: A<any>) => any[];
export declare const arrMax: (input: A<any>) => number;
export declare const arrMin: (input: A<any>) => number;
export declare const arrayQuickSort: (input: A<any>) => A<any>;
export declare const arrShuffle: ([...arr]: Iterable<any>) => any[];
export declare const arrQuickSort: (arr: A<any>) => A<any>;
export declare const objAssign: (v1: any, v2: any) => any;
export declare const objKeys: (v: any) => string[];
export declare const objValues: (v: any) => unknown[];
export declare const objEntries: (v: any) => [string, unknown][];
export declare const objFrom: (v: any) => {
    [k: string]: any;
};
export declare const objCreate: (input: A<S>) => any;
export declare const getTimePerformance: (v?: N) => number;
export declare const timeStamp: () => string;
export declare const timeISO: () => string;
export declare const timeUTC: () => string;
export declare const getSourceValues: (input: any) => {
    desc: string;
    value: any;
    index: number;
    type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
}[] | {
    desc: string;
    value: any;
    error: Error;
}[];
