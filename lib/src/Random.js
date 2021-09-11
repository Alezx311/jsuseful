"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    //* Returns random range
    static range(min = 0.01, max = 0.99, size = 2) {
        return Number((Math.random() * (max - min) + min).toFixed(size));
    }
    //* Random integer
    static number(min = 1, max = 100) {
        return ~~(min + Math.random() * (max + 1 - min));
    }
    //* Returns random power of two
    static powerOfTwo(min = 1, max = 10) {
        return 2 ** ~~this.number(min, max);
    }
    //* Boolean with given chance
    static boolean(chance = 50) {
        return this.number(1, 100) > chance;
    }
    //* Returns random arr, can create element from given callback
    static array(size = 10, cb = () => this.number()) {
        return Array(size)
            .fill(cb)
            .map(v => (v instanceof Function ? v() : v));
    }
    //* Returns random numbers arr
    static numbers(size, min, max) {
        return this.array(size, () => this.number(min, max));
    }
    //* Random index from given arr
    static arrayIndex(arr) {
        const endIndex = ~~arr?.length - 1;
        return endIndex > 0 ? this.number(0, endIndex) : 0;
    }
    //* Random Element from given arr
    static arrayElement(arr) {
        return arr?.[this.arrayIndex(arr)] ?? null;
    }
    //* Array of random elements from given arr... GENIUS BLYAT
    static arrayValues(arr, size = 2) {
        return this.array(size, () => this.arrayElement(arr));
    }
    //* Only unical values
    static arrayUnicals(arr) {
        return [...new Set(arr)];
    }
    //* Shuffle elements
    static arrayShuffle(arr) {
        if (!arr?.length) {
            return [];
        }
        return arr.sort(() => Math.random() - 0.5);
    }
    //* Random part of arr
    static arrayPart(arr) {
        if (!arr?.length)
            return [];
        if (~~arr?.length < 3)
            return [arr[0]];
        const startIndex = this.number(0, arr?.length - 2);
        const endIndex = this.number(startIndex, arr?.length - 1);
        return arr.slice(startIndex, endIndex);
    }
    //* Transform random values of arr to another arr
    static arrayDeepSomeValues(arr, chance) {
        return arr.reduce((acc, v) => {
            if (this.boolean(chance)) {
                return [...acc, [v, v]];
            }
            else {
                return [...acc, v];
            }
        }, []);
    }
    //* Return random string, created from given strings arr
    static joinedStrings(parts, size) {
        const filtered = parts.map(str => str.trim().match(/[a-z]/gi)?.join(''));
        return this.arrayValues(filtered, size).join('');
    }
    //* Return random lines from given text
    static textLines(text, size) {
        return this.arrayValues(text.split('\n'), size);
    }
    //* Returns random objectKey
    static objectKey(obj = {}) {
        const arr = Object.keys(obj);
        return arr?.length ? this.arrayElement(arr) : null;
    }
    //* Returns random objectValue
    static objectValue(obj = {}) {
        const arr = Object.values(obj);
        return arr?.length ? this.arrayElement(arr) : null;
    }
    //* Returns random objectEntry
    static objectEntry(obj = {}) {
        const arr = Object.entries(obj);
        return arr?.length ? this.arrayElement(arr) : null;
    }
}
exports.Random = Random;
_a = Random;
//* Returns random numbers arr
Random.numbersDeep = (len = 10, max = 4) => _a.numbers(len, max).map(v => (v > 1 ? _a.numbers(v, max) : v));
//* Returns random values
Random.values = (arr) => _a.array(10).map(v => _a.arrayElement(arr));
//* Return Random arrays
Random.arrays = (size = 10, maxDeep = 5) => _a.array(size).map(v => _a.array(_a.number(2, maxDeep)));
//* Return Random arrayGrow
Random.arrayGrow = (arr, growSize = 2) => {
    return Array(growSize)
        .fill(arr)
        .reduce((acc, v) => [...acc, v], []);
};
//* Return Random example
Random.example = (size = 10) => _a.numbers(size);
//* Return Random arrayExamples
Random.arrayExamples = (size = 10) => _a.array(size).map(v => _a.example(size));
//* Return Random arraySequence
Random.arraySequence = (start = 1, end = 100) => _a.array(end).map((v, i) => start + i);
//* Return Random arrayChange
Random.arrayChange = (size = 10, arr) => _a.arrayElement(_a.array(size).map(v => _a.arrayShuffle(arr)));
//* Return Random arrayMerge
Random.arrayMerge = (...arrays) => [
    ...new Set(arrays.reduce((acc, arr) => [...acc, ...arr], [])),
];
//* Return Random arrayDouble
Random.arrayDouble = (arr) => [arr, arr];
//* Return Random arrayRepeats
Random.arrayRepeats = (arr, repeats = 2) => Array(repeats).fill(arr).flat(Infinity);
//* Return Random arrayShuffles
Random.arrayShuffles = (arr, repeats = 2) => _a.arrayShuffle(_a.arrayRepeats(arr, repeats));
//* Return Random arrayShuffleUnicals
Random.arrayShuffleUnicals = (arr) => _a.arrayUnicals(_a.arrayShuffle(arr));
//* Return Random arrayDoubleSome
Random.arrayDoubleSome = (arr, chance = 50) => _a.arrayShuffles(arr).map(v => (_a.boolean(chance) ? [v, v] : v));
exports.default = Random;
