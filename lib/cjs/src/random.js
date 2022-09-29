"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float = exports.randomColorValues = exports.randomColorCode = exports.randomColorName = exports.randomColorClassname = exports.randomMusicValues = exports.randomMusicMidiIndex = exports.randomMusicOctave = exports.randomMusicIntervalChar = exports.randomMusicDurationChar = exports.randomMusicScale = exports.randomMusicNoteSharp = exports.randomMusicNoteBemole = exports.randomMusicNoteChar = exports.randomSourceByType = exports.randomTypeOf = exports.genSources = exports.genNums = exports.genArr = exports.RANDOM_EXAMPLES_SOURCES = exports.randomEntry = exports.randomValue = exports.randomKey = exports.randomObject = exports.randomSource = exports.randomShuffle = exports.randomSort = exports.randomElement = exports.randomIndex = exports.randomMany = exports.randomArr = exports.randomStr = exports.randomCoin = exports.randomInt = exports.randomNum = exports.randomBool = exports.random = exports.RANDOM_VALUES_SOURCES = exports.RANDOM_TEXT = exports.RANDOM_OBJ = exports.RANDOM_ARR = exports.RANDOM_SRC = exports.RANDOM_STR = exports.RANDOM_INT = exports.RANDOM_BOOL = exports.RANDOM_NUM = exports.RANDOM_CONSTANTS_SOURCES = exports.RANDOM_MAX = exports.RANDOM_MIN = exports.RANDOM_ARRAY_SIZE = void 0;
exports.objectEntry = exports.objectValue = exports.objectKey = exports.joinedStrings = exports.arrayDeepSomeValues = exports.arrayPart = exports.arrayShuffle = exports.arrayUnicals = exports.arrayElements = exports.arrayElement = exports.arrayIndex = exports.arrayRepeats = exports.arrayDouble = exports.arrayMerge = exports.arrayChange = exports.arraySequence = exports.arrayGrow = exports.arrays = exports.numbers = exports.array = exports.boolean = exports.values = exports.numbersDeep = exports.powerOfTwo = exports.number = void 0;
const constants_1 = require("./constants");
const useful_1 = require("./useful");
//! <----- Constants for use as default arguments ----->
exports.RANDOM_ARRAY_SIZE = 10;
exports.RANDOM_MIN = 0;
exports.RANDOM_MAX = 1000000;
exports.RANDOM_CONSTANTS_SOURCES = [
    { desc: 'SIZE', value: exports.RANDOM_ARRAY_SIZE },
    { desc: 'MIN', value: exports.RANDOM_MIN },
    { desc: 'MAX', value: exports.RANDOM_MAX },
];
//! <----- Random values for simple randomize results on each run ----->
exports.RANDOM_NUM = Math.random();
exports.RANDOM_BOOL = exports.RANDOM_NUM > 0.5;
exports.RANDOM_INT = ~~(exports.RANDOM_NUM * (exports.RANDOM_MAX + exports.RANDOM_MIN)) - exports.RANDOM_MIN;
exports.RANDOM_STR = exports.RANDOM_NUM.toString(36).substring(3);
exports.RANDOM_SRC = { desc: 'Random Source', value: exports.RANDOM_NUM };
exports.RANDOM_ARR = [exports.RANDOM_NUM, exports.RANDOM_BOOL, exports.RANDOM_INT, exports.RANDOM_STR, exports.RANDOM_SRC];
exports.RANDOM_OBJ = {
    NUM: exports.RANDOM_NUM,
    BOOL: exports.RANDOM_BOOL,
    INT: exports.RANDOM_INT,
    STR: exports.RANDOM_STR,
    ARR: exports.RANDOM_ARR,
    SRC: exports.RANDOM_SRC,
};
exports.RANDOM_TEXT = JSON.stringify(exports.RANDOM_OBJ);
exports.RANDOM_VALUES_SOURCES = [
    { desc: 'NUM', value: exports.RANDOM_NUM },
    { desc: 'BOOL', value: exports.RANDOM_BOOL },
    { desc: 'INT', value: exports.RANDOM_INT },
    { desc: 'STR', value: exports.RANDOM_STR },
    { desc: 'SRC', value: exports.RANDOM_SRC },
    { desc: 'ARR', value: exports.RANDOM_ARR },
    { desc: 'OBJ', value: exports.RANDOM_OBJ },
    { desc: 'TEXT', value: exports.RANDOM_TEXT },
];
//! <----- Simple methods to generate random values, can be used without arguments ----->
exports.random = Math.random;
const randomBool = (chance = 0.5) => (0, exports.random)() > chance;
exports.randomBool = randomBool;
const randomNum = (max = exports.RANDOM_MAX, min = exports.RANDOM_MIN) => (0, exports.random)() * (max - min) + min;
exports.randomNum = randomNum;
const randomInt = (max = exports.RANDOM_MAX, min = exports.RANDOM_MIN) => ~~((0, exports.random)() * max - min) + min;
exports.randomInt = randomInt;
const randomCoin = (value1 = true, value2 = false) => ((0, exports.randomBool)() ? value1 : value2);
exports.randomCoin = randomCoin;
const randomStr = (input = exports.RANDOM_NUM) => (input.toString(36) + (0, exports.randomNum)().toString(36)).substring(3);
exports.randomStr = randomStr;
const randomArr = (size = exports.RANDOM_ARRAY_SIZE, value = exports.RANDOM_NUM) => Array(size).fill(value);
exports.randomArr = randomArr;
const randomMany = (size = exports.RANDOM_ARRAY_SIZE, value = exports.RANDOM_NUM) => typeof value === 'function' ? (0, exports.randomArr)(size).map(value) : (0, exports.randomArr)(size, value);
exports.randomMany = randomMany;
const randomIndex = (input = exports.RANDOM_ARR) => input?.length > 1 ? (0, exports.randomInt)(input.length - 1) : input?.length;
exports.randomIndex = randomIndex;
const randomElement = (input = exports.RANDOM_ARR) => (input?.length > 0 ? input : [...`${input}`])?.[(0, exports.randomIndex)(input)];
exports.randomElement = randomElement;
const randomSort = (input = exports.RANDOM_ARR) => (input?.length > 0 ? input : [...`${input}`]).sort(() => ((0, exports.randomBool)() ? 1 : -1));
exports.randomSort = randomSort;
const randomShuffle = (input = exports.RANDOM_ARR) => (input?.length > 0 ? input : [...`${input}`]).map(v => ((0, exports.randomBool)() ? v : (0, exports.randomElement)(input)));
exports.randomShuffle = randomShuffle;
const randomSource = (input = exports.RANDOM_NUM) => ({ ...exports.RANDOM_SRC, value: (0, exports.randomStr)(), input });
exports.randomSource = randomSource;
const randomObject = (size = exports.RANDOM_ARRAY_SIZE, input = exports.RANDOM_ARR) => Object.fromEntries((0, exports.randomArr)(size).map(() => [(0, exports.randomStr)(), (0, exports.randomStr)(input)]));
exports.randomObject = randomObject;
const randomKey = (value = exports.RANDOM_OBJ) => (0, exports.randomElement)(Object.getOwnPropertyNames(value));
exports.randomKey = randomKey;
const randomValue = (value = exports.RANDOM_OBJ) => (0, exports.randomElement)(Object.values(value));
exports.randomValue = randomValue;
const randomEntry = (value = exports.RANDOM_OBJ) => (0, exports.randomElement)(Object.entries(value));
exports.randomEntry = randomEntry;
exports.RANDOM_EXAMPLES_SOURCES = [
    { desc: 'rnd', value: (0, exports.random)(), func: exports.random },
    { desc: 'bool', value: (0, exports.randomBool)(), func: exports.randomBool },
    { desc: 'num', value: (0, exports.randomNum)(), func: exports.randomNum },
    { desc: 'int', value: (0, exports.randomInt)(), func: exports.randomInt },
    { desc: 'coin', value: (0, exports.randomCoin)(), func: exports.randomCoin },
    { desc: 'str', value: (0, exports.randomStr)(), func: exports.randomStr },
    { desc: 'arr', value: (0, exports.randomArr)(), func: exports.randomArr },
    { desc: 'many', value: (0, exports.randomMany)(), func: exports.randomMany },
    { desc: 'ind', value: (0, exports.randomIndex)(), func: exports.randomIndex },
    { desc: 'el', value: (0, exports.randomElement)(), func: exports.randomElement },
    { desc: 'sort', value: (0, exports.randomSort)(), func: exports.randomSort },
    { desc: 'shuffle', value: (0, exports.randomShuffle)(), func: exports.randomShuffle },
    { desc: 'src', value: (0, exports.randomSource)(), func: exports.randomSource },
    { desc: 'obj', value: (0, exports.randomObject)(), func: exports.randomObject },
    { desc: 'key', value: (0, exports.randomKey)(), func: exports.randomKey },
    { desc: 'value', value: (0, exports.randomValue)(), func: exports.randomValue },
    { desc: 'entry', value: (0, exports.randomEntry)(), func: exports.randomEntry },
];
//? Generate array
const genArr = (n, v = 1) => Array(n).fill(v);
exports.genArr = genArr;
//? Generate array with numbers from 1 to n
const genNums = (n) => (0, exports.genArr)(n).map((v, i) => v + i);
exports.genNums = genNums;
const genSources = (n) => (0, exports.genArr)(n).map((v, i) => ({ desc: 'genSources result', value: n, index: i }));
exports.genSources = genSources;
//? Generate random typeof result
const randomTypeOf = () => (0, exports.randomElement)(constants_1.TYPEOF);
exports.randomTypeOf = randomTypeOf;
//? Generate random source object with desc, type and value
const randomSourceByType = (type) => {
    if (!type)
        type = (0, exports.randomTypeOf)();
    let value = undefined;
    if (type === 'string')
        value = (0, exports.randomStr)();
    if (type === 'object')
        value = (0, exports.randomObject)();
    if (type === 'boolean')
        value = (0, exports.randomBool)();
    if (type === 'bigint')
        value = (0, exports.randomNum)(Number.MAX_SAFE_INTEGER);
    if (type === 'symbol')
        value = Symbol((0, exports.randomStr)());
    if (type === 'function')
        value = () => (0, exports.randomNum)();
    if (type === 'number')
        value = (0, exports.randomNum)();
    return { desc: `Random value with type "${type}"`, value, type };
};
exports.randomSourceByType = randomSourceByType;
//! <----- Music values ----->
const randomMusicNoteChar = () => (0, exports.randomElement)(constants_1.MUSIC_NOTES_CHARS);
exports.randomMusicNoteChar = randomMusicNoteChar;
const randomMusicNoteBemole = () => (0, exports.randomElement)(constants_1.MUSIC_NOTES_BEMOLE);
exports.randomMusicNoteBemole = randomMusicNoteBemole;
const randomMusicNoteSharp = () => (0, exports.randomElement)(constants_1.MUSIC_NOTES_SHARP);
exports.randomMusicNoteSharp = randomMusicNoteSharp;
const randomMusicScale = () => (0, exports.randomElement)(constants_1.MUSIC_SCALES);
exports.randomMusicScale = randomMusicScale;
const randomMusicDurationChar = () => (0, exports.randomElement)(constants_1.MUSIC_DURATION_CHARS);
exports.randomMusicDurationChar = randomMusicDurationChar;
const randomMusicIntervalChar = () => (0, exports.randomElement)(constants_1.MUSIC_INTERVAL_CHARS);
exports.randomMusicIntervalChar = randomMusicIntervalChar;
const randomMusicOctave = () => (0, exports.randomInt)(8);
exports.randomMusicOctave = randomMusicOctave;
const randomMusicMidiIndex = () => (0, exports.randomInt)(127);
exports.randomMusicMidiIndex = randomMusicMidiIndex;
const randomMusicValues = () => ({
    noteChar: (0, exports.randomMusicNoteChar)(),
    noteBemole: (0, exports.randomMusicNoteBemole)(),
    noteSharp: (0, exports.randomMusicNoteSharp)(),
    scale: (0, exports.randomMusicScale)(),
    durationChar: (0, exports.randomMusicDurationChar)(),
    intervalChar: (0, exports.randomMusicIntervalChar)(),
    octave: (0, exports.randomMusicOctave)(),
    midiIndex: (0, exports.randomMusicMidiIndex)(),
});
exports.randomMusicValues = randomMusicValues;
const randomColorClassname = () => (0, exports.randomElement)(constants_1.COLOR_CLASS);
exports.randomColorClassname = randomColorClassname;
const randomColorName = () => (0, exports.randomElement)(constants_1.COLOR_NAMES);
exports.randomColorName = randomColorName;
const randomColorCode = () => (0, exports.randomElement)(constants_1.COLOR_CODES);
exports.randomColorCode = randomColorCode;
const randomColorValues = () => ({
    className: (0, exports.randomColorClassname)(),
    name: (0, exports.randomColorName)(),
    code: (0, exports.randomColorCode)(),
});
exports.randomColorValues = randomColorValues;
//! <----- Other random and generate data methods ----->
//* Returns random range
const float = (min = 0, max = 1, fixedSize) => {
    const num = (0, exports.random)() * (max - min) + min;
    return Number(num.toFixed(fixedSize));
};
exports.float = float;
//* Random integer
const number = (min = exports.RANDOM_MIN, max = exports.RANDOM_MAX) => {
    return Math.floor((0, exports.random)() * (max - min) + min);
};
exports.number = number;
//* Returns random power of two
const powerOfTwo = (min = exports.RANDOM_MIN, max = 10) => {
    return 2 ** (0, exports.number)(min, max);
};
exports.powerOfTwo = powerOfTwo;
//* Returns random numbers arr
const numbersDeep = (len = 10, maxDeep = 4) => {
    return (0, exports.numbers)(len, maxDeep).map(v => {
        return v > 1 ? (0, exports.numbers)(v, maxDeep) : v;
    });
};
exports.numbersDeep = numbersDeep;
//* Returns random values
const values = (arr) => (0, exports.array)(10).map(v => (0, exports.arrayElement)(arr));
exports.values = values;
//* Boolean with given chance
const boolean = (chance = 50) => {
    return (0, exports.number)(1, 100) > chance;
};
exports.boolean = boolean;
//* Returns random arr, can create element from given callback
const array = (size = exports.RANDOM_ARRAY_SIZE, cb = () => (0, exports.number)()) => {
    const arr = Array(size).fill(1);
    return cb ? (typeof cb === 'function' ? arr.map(cb) : arr.map(() => cb)) : arr;
};
exports.array = array;
//* Returns random numbers arr
const numbers = (size = exports.RANDOM_ARRAY_SIZE, min = exports.RANDOM_MIN, max = exports.RANDOM_MAX) => {
    const arr = Array(size).fill(1);
    return arr.map(() => (0, exports.number)(min, max));
};
exports.numbers = numbers;
//* Return Random arrays
const arrays = (size = 10, maxDeep = 5) => {
    const arr = (0, exports.array)(size).map(() => (0, exports.array)((0, exports.number)(2, maxDeep)));
    return arr;
};
exports.arrays = arrays;
//* Return Random arrayGrow
const arrayGrow = (arr, growSize = 2) => {
    const result = Array(growSize)
        .fill(1)
        .reduce(acc => [...acc, ...arr], []);
    return result;
};
exports.arrayGrow = arrayGrow;
//* Return Random arraySequence
const arraySequence = (start = 1, end = 100) => {
    const arr = (0, exports.array)(end).map((v, i) => start + i);
    return arr;
};
exports.arraySequence = arraySequence;
//* Return Random arrayChange
const arrayChange = (size = 10, arr) => {
    const result = (0, exports.array)(size).map(v => (0, exports.arrayShuffle)(arr));
    return (0, exports.arrayElement)(result);
};
exports.arrayChange = arrayChange;
//* Return Random arrayMerge
const arrayMerge = (...arr) => {
    const total = arr.reduce((acc, el) => [...acc, ...el], []);
    return [...new Set(total)];
};
exports.arrayMerge = arrayMerge;
//* Return Random arrayDouble
const arrayDouble = (arr) => [...arr, ...arr];
exports.arrayDouble = arrayDouble;
//* Return Random arrayRepeats
const arrayRepeats = (arr, repeats = 2) => Array(repeats)
    .fill(arr)
    .reduce((acc, el) => [...acc, ...el], []);
exports.arrayRepeats = arrayRepeats;
//* Random index from given arr
const arrayIndex = (arr) => {
    const endIndex = ~~arr?.length - 1;
    return endIndex > 0 ? (0, exports.number)(0, endIndex) : 0;
};
exports.arrayIndex = arrayIndex;
//* Random Element from given arr
const arrayElement = (arr) => {
    return arr?.[(0, exports.arrayIndex)(arr)] ?? null;
};
exports.arrayElement = arrayElement;
//* Array of random elements from given arr... GENIUS BLYAT
const arrayElements = (arr, size = 3) => {
    return (0, exports.array)(size, () => (0, exports.arrayElement)(arr));
};
exports.arrayElements = arrayElements;
//* Only unical values
const arrayUnicals = (arr) => {
    return [...new Set([...arr])];
};
exports.arrayUnicals = arrayUnicals;
//* Shuffle elements
const arrayShuffle = (arr) => {
    if (!arr?.length) {
        return [];
    }
    return arr.sort(() => (0, exports.random)() - 0.5);
};
exports.arrayShuffle = arrayShuffle;
//* Random part of arr
const arrayPart = (arr) => {
    if (!arr?.length)
        return [];
    if (~~arr?.length < 3)
        return [arr[0]];
    const startIndex = (0, exports.number)(0, arr?.length - 2);
    const endIndex = (0, exports.number)(startIndex, arr?.length - 1);
    return arr.slice(startIndex, endIndex);
};
exports.arrayPart = arrayPart;
//* Transform random values of arr to another arr
const arrayDeepSomeValues = (arr, chance) => {
    return arr.reduce((acc, v) => {
        if ((0, exports.boolean)(chance)) {
            return [...acc, [v, v]];
        }
        else {
            return [...acc, v];
        }
    }, []);
};
exports.arrayDeepSomeValues = arrayDeepSomeValues;
//* Return random string, created from given strings arr
const joinedStrings = (parts, size) => {
    const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''));
    return (0, exports.arrayElements)(filtered, size).join('');
};
exports.joinedStrings = joinedStrings;
//* Returns random objectKey
const objectKey = (obj = {}) => {
    const arr = Object.keys(obj);
    return (0, useful_1.isA)(arr) && (0, exports.arrayElement)(arr);
};
exports.objectKey = objectKey;
//* Returns random objectValue
const objectValue = (obj = {}) => {
    const arr = Object.values(obj);
    return (0, useful_1.isA)(arr) && (0, exports.arrayElement)(arr);
};
exports.objectValue = objectValue;
//* Returns random objectEntry
const objectEntry = (obj = {}) => {
    const arr = Object.entries(obj);
    return (0, useful_1.isA)(arr) && (0, exports.arrayElement)(arr);
};
exports.objectEntry = objectEntry;
