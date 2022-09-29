"use strict";
// getTimeISO
// getTimeStamp
// CalculateFromString
// getFizzBuzz
// timeStamp
// timeISO
// timeUTC
// factorial
// fibonacci
// caesarCipher
// partitionBy
// powerset
// countSubstrings
// distance
// indexOfAll
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOfAll = exports.distance = exports.countSubstrings = exports.powerset = exports.partitionBy = exports.caesarCipher = exports.fibonacci = exports.factorial = exports.getFizzBuzz = exports.CalculateFromString = exports.getTimeStamp = exports.getTimeISO = void 0;
//? Time in UNIX seconds
function getTimeISO() {
    const result = new Date().toISOString();
    return result;
}
exports.getTimeISO = getTimeISO;
//? Time in string
function getTimeStamp() {
    const result = new Date().toLocaleString();
    return result;
}
exports.getTimeStamp = getTimeStamp;
//? Just simple math expression Date
function CalculateFromString(str) {
    const calc = new Function('', `return ${str}`);
    return calc();
}
exports.CalculateFromString = CalculateFromString;
//? If v odd to 3, return Fizz, if odd to 5, return Buzz, if is odd to 3 and 5, return FizzBuzz
const getFizzBuzz = (v) => isOdd(v, 3, 'Fizz', '') + isOdd(v, 5, 'Buzz', '') || v;
exports.getFizzBuzz = getFizzBuzz;
//! <----- Other useful functions ----->
//? Return factorial for given number
const factorial = (v) => (v > 0 ? (0, exports.factorial)(v - 1) * v : 1);
exports.factorial = factorial;
//? Return array with fibonacci sequence for given max value
const fibonacci = (max = 10, nums = [1, 2]) => {
    if (!isA(nums))
        return (0, exports.fibonacci)(max, [1, 2]);
    const prev1 = arrLast(nums, 1) || 1;
    const prev2 = arrLast(nums, 2) || 1;
    const next = prev1 + prev2;
    if (next < max)
        return (0, exports.fibonacci)(~~max, [...nums, next]);
    return arrUnical(nums.filter(Number));
};
exports.fibonacci = fibonacci;
//? Return string crypted by Caesar Cipher with provided step
const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
        .map((l, i) => {
        const c = str.charCodeAt(i);
        if (c >= 65 && c <= 90)
            return String.fromCharCode(((c - 65 + n) % 26) + 65);
        if (c >= 97 && c <= 122)
            return String.fromCharCode(((c - 97 + n) % 26) + 97);
        return l;
    })
        .join('');
};
exports.caesarCipher = caesarCipher;
//? caesarCipher('Hello World!', -3) //? 'Ebiil Tloia!'
//? caesarCipher('Ebiil Tloia!', 23, true) //? 'Hello World!'
const partitionBy = (arr, fn) => arr.reduce(({ res, last }, v, i, a) => {
    const next = fn(v, i, a);
    if (next !== last)
        res.push([v]);
    else
        res[res.length - 1].push(v);
    return { res, last: next };
}, { res: [] }).res;
exports.partitionBy = partitionBy;
//? const numbers = [1, 1, 3, 3, 4, 5, 5, 5]
//? partitionBy(numbers, n => n % 2 === 0); //? [[1, 1, 3, 3], [4], [5, 5, 5]]
//? partitionBy(numbers, n => n); //? [[1, 1], [3, 3], [4], [5, 5, 5]]
const powerset = (arr) => arr.reduce((a, v) => a.concat(a.map((r) => r.concat(v))), [[]]);
exports.powerset = powerset;
const countSubstrings = (str, searchValue) => {
    let count = 0, i = 0;
    while (true) {
        const r = str.indexOf(searchValue, i);
        if (r !== -1)
            [count, i] = [count + 1, r + 1];
        else
            return count;
    }
};
exports.countSubstrings = countSubstrings;
//? Calculates the distance between two points.
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
exports.distance = distance;
//? Find all indexes of given element in provided array
const indexOfAll = (input, element) => {
    if (!isA(input))
        return [];
    return input.reduce((acc, v, i) => [...acc, v === element ? i : null], []).filter(Boolean);
};
exports.indexOfAll = indexOfAll;
//? TODO isISOString
//? TODO bucketSort
//? TODO compare
//? TODO countBy
//? TODO groupBy
//? TODO mostFrequent
//? TODO arrayFrequencies
//? TODO differenceBy
//? TODO deepFlatten
//? TODO powerset
//? TODO filterNonUnique
//? TODO filterNonUniqueBy
//? TODO cartesianProduct
//? TODO bubbleSort
//? TODO objClone
//? TODO objFreeze
//? TODO compactObject
//? TODO flattenObject
//? TODO sleep
//? TODO delay
//? TODO primes
//? TODO arithmeticProgression
//? TODO geometricProgression
//? TODO toSafeInteger
//? TODO isDateValid
//? TODO size
//? export class Functions {
//? 	static eval(exp: string): number {
//? 		try {
//? 			const f = new Function('', `return ${exp}`)
//? 			return f()
//? 		} catch (e) {
//? 			throw e
//? 		}
//? 	}
//? }
