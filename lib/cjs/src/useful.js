"use strict";
//? Lot of small functions, but needs refactoring first
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourceValues = exports.timeUTC = exports.timeISO = exports.timeStamp = exports.getTimePerformance = exports.objCreate = exports.objFrom = exports.objEntries = exports.objValues = exports.objKeys = exports.objAssign = exports.arrQuickSort = exports.arrShuffle = exports.arrayQuickSort = exports.arrMin = exports.arrMax = exports.arrUnicals = exports.arrUnical = exports.arrFlat = exports.arrLast = exports.arrLastIndex = exports.toCallback = exports.toTypeOf = exports.toJson = exports.toL = exports.toO = exports.toA = exports.toS = exports.isPalindrome = exports.isOdd = exports.isTruthy = exports.isLen = exports.isSymbol = exports.isDate = exports.isError = exports.isRegExp = exports.isUndefined = exports.isNull = exports.isE = exports.isB = exports.isA = exports.isS = exports.isN = exports.isO = exports.isF = exports.is = void 0;
//! <----- Validation Functions ----->
//? Return true if value is defined and exists.
const is = (v) => v !== null && v !== undefined;
exports.is = is;
//? Return true if value is object.
const isF = (v) => typeof v === 'function' || v instanceof Function;
exports.isF = isF;
//? Return true if value is object.
const isO = (v) => typeof v === 'object' && (0, exports.is)(v) && !Array.isArray(v);
exports.isO = isO;
//? Return true if value is number and greater than given l.
const isN = (v, l = 1) => typeof v === 'number' && isFinite(v) && v >= l;
exports.isN = isN;
//? Return true if value is string and value length are greater than given l.
const isS = (v, l = 1) => (typeof v === 'string' || v instanceof String) && v.length >= l;
exports.isS = isS;
//? Return true if value is array and value length are greater than given l.
const isA = (v, l = 1) => Array.isArray(v) && v.length >= l;
exports.isA = isA;
//? Return true if value is true or false
const isB = (v) => typeof v === 'boolean';
exports.isB = isB;
//? Return true if value is Error
const isE = (v) => v instanceof Error;
exports.isE = isE;
//? Returns if a value is null
const isNull = (v) => v === null;
exports.isNull = isNull;
//? Returns if a value is undefined
const isUndefined = (v) => typeof v === 'undefined';
exports.isUndefined = isUndefined;
//? Returns if a value is Regular Expression
const isRegExp = (v) => v && typeof v === 'object' && v.constructor === RegExp;
exports.isRegExp = isRegExp;
//? Returns if a value is Error
const isError = (v) => v instanceof Error && typeof v.message !== 'undefined';
exports.isError = isError;
//? Returns if a value is Date
const isDate = (v) => v instanceof Date;
exports.isDate = isDate;
//? Returns if a value is Symbol
const isSymbol = (v) => typeof v === 'symbol';
exports.isSymbol = isSymbol;
//? Returns true if value.length is defined and greater than given l l.
const isLen = (v, l = 1) => (0, exports.is)(v?.length) && v.length >= ~~l;
exports.isLen = isLen;
//? Return true if value is truthy.
const isTruthy = (v) => !!v;
exports.isTruthy = isTruthy;
//? Check is given v is odd to n. On True, return r1, else r2
const isOdd = (v = 0, n = 2, r1 = true, r2 = false) => (v % n === 0 ? r1 : r2);
exports.isOdd = isOdd;
//? Return true if given string is palindrome
const isPalindrome = (v = 'Some string') => {
    if (!(0, exports.isS)(v, 1))
        return false;
    const reversed = v.split('').reverse().join('').trim();
    return reversed === v;
};
exports.isPalindrome = isPalindrome;
//! <----- Transform Functions ----->
//? Small Converters
const toS = (v) => ((0, exports.isO)(v) ? JSON.stringify(v) : v + '');
exports.toS = toS;
const toA = (v) => ((0, exports.isA)(v) ? v : [v]);
exports.toA = toA;
const toO = (v) => ((0, exports.isO)(v) ? v : { value: v });
exports.toO = toO;
const toL = (v) => ((0, exports.isS)(v) || (0, exports.isA)(v) ? v.length : false);
exports.toL = toL;
//? Return stringified value
const toJson = (v) => ((0, exports.is)(v) ? JSON.stringify(v, null, 2) : v + '');
exports.toJson = toJson;
const toTypeOf = (v) => typeof v;
exports.toTypeOf = toTypeOf;
//? If give a function, return itself, on value will return callback with value as result
const toCallback = (v) => {
    if (!(0, exports.isF)(v))
        return () => v;
    return v;
};
exports.toCallback = toCallback;
//! <----- Array Methods ----->
//? Return last index of given array or null
const arrLastIndex = (arr) => (0, exports.isA)(arr, 1) && ~~(arr.length - 1);
exports.arrLastIndex = arrLastIndex;
//? Return previous element of given array or null
const arrLast = (arr, step = 1) => {
    if (!(0, exports.isA)(arr, step))
        return null;
    return arr?.[arr.length - step];
};
exports.arrLast = arrLast;
//? Return flatty values
const arrFlat = (...values) => values.flat(Infinity);
exports.arrFlat = arrFlat;
//? Return only unical elements from given array
const arrUnical = (arr) => {
    if (!(0, exports.isA)(arr, 1))
        return [];
    return [...new Set([...arr])];
};
exports.arrUnical = arrUnical;
const arrUnicals = (input) => [...new Set([...input])];
exports.arrUnicals = arrUnicals;
const arrMax = (input) => Math.max(...input.filter(Number));
exports.arrMax = arrMax;
const arrMin = (input) => Math.min(...input.filter(Number));
exports.arrMin = arrMin;
const arrayQuickSort = (input) => input.sort();
exports.arrayQuickSort = arrayQuickSort;
const arrShuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
exports.arrShuffle = arrShuffle;
const arrQuickSort = (arr) => {
    const a = [...arr];
    if (a.length < 2)
        return a;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = a[pivotIndex];
    const [lo, hi] = a.reduce((acc, val, i) => {
        if (val < pivot || (val === pivot && i != pivotIndex)) {
            acc[0].push(val);
        }
        else if (val > pivot) {
            acc[1].push(val);
        }
        return acc;
    }, [[], []]);
    return [...(0, exports.arrQuickSort)(lo), pivot, ...(0, exports.arrQuickSort)(hi)];
};
exports.arrQuickSort = arrQuickSort;
//! <----- Object Methods ----->
//? Object useful functions
const objAssign = (v1, v2) => Object.assign({}, v1, v2);
exports.objAssign = objAssign;
const objKeys = (v) => ((0, exports.isO)(v) ? Object.keys(v) : []);
exports.objKeys = objKeys;
const objValues = (v) => ((0, exports.isO)(v) ? Object.values(v) : []);
exports.objValues = objValues;
const objEntries = (v) => ((0, exports.isO)(v) ? Object.entries(v) : []);
exports.objEntries = objEntries;
const objFrom = (v) => ((0, exports.isA)(v) ? Object.fromEntries(v) : { value: v, desc: 'Object from value' });
exports.objFrom = objFrom;
//? Create new object from given strings
const objCreate = (input) => {
    if (!(0, exports.isA)(input))
        return { desc: 'Created Object', value: input };
    const entries = (0, exports.arrUnical)(input.filter(String)).map(k => [k, k]);
    return Object.fromEntries(entries);
};
exports.objCreate = objCreate;
//! <----- Date Methods ----->
const getTimePerformance = (v) => {
    const current = performance.now();
    return v && v > 0 ? current - v : current;
};
exports.getTimePerformance = getTimePerformance;
//? Generate simple timestamps
const timeStamp = () => new Date().toLocaleString();
exports.timeStamp = timeStamp;
const timeISO = () => new Date().toISOString();
exports.timeISO = timeISO;
const timeUTC = () => new Date().toUTCString();
exports.timeUTC = timeUTC;
//! <----- Source Methods ----->
const getSourceValues = (input) => {
    if (!input || typeof input !== 'object') {
        const err = new Error('Invalid value to search source values');
        return [{ desc: 'Error', value: input, error: err }];
    }
    const keys = [...Object.getOwnPropertyNames(input)].filter(String);
    const accum = [{ desc: 'Object', value: input, index: 0, type: typeof input }];
    if (!keys.length) {
        return accum;
    }
    return keys.reduce((acc, k, index) => {
        const desc = k;
        const value = input?.[k];
        const type = typeof value;
        return [...acc, { desc, index, value, type }];
    }, accum);
};
exports.getSourceValues = getSourceValues;
