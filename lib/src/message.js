"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRomanNumeral = exports.dictionaryReplace = exports.dictionaryCreate = exports.dictionaryMapper = exports.rxpFromChars2 = exports.rxpFromChars = exports.isUpperCase = exports.replaceInvalidChars = exports.matchWords = exports.toValidChars = exports.toTitleCase = exports.toTextValues = exports.strToArray = exports.isStringLength = exports.isConstantStyle = exports.matchChars = exports.toTextBlock = exports.toJson = exports.toInfo = exports.validate = void 0;
const uniq = (arr) => [...new Set([...arr])];
//? <----- Validate string and collect errors ----->
const validate = (value, min = 1, max = 10000) => {
    const errors = [];
    if (!value) {
        errors.push(new TypeError('No value, or it falsy!'));
    }
    else if (typeof value !== 'string') {
        errors.push(new TypeError(`Value type "${typeof value}", Required: "string"`));
    }
    else if (value.length < min) {
        errors.push(new TypeError(`Value length "${value.length}", Required min: "${min}"`));
    }
    else if (value.length > max) {
        errors.push(new TypeError(`Value length "${value.length}", Required max: "${max}"`));
    }
    return errors;
};
exports.validate = validate;
//? <----- Convert string to info about length and validation errors ----->
const toInfo = (value) => {
    const type = typeof value;
    const length = value?.length;
    const errors = (0, exports.validate)(value);
    return `Info
	Value Type: ${type}
	Value Length: ${length}
	Validate Errors finded: ${~~errors?.length}
	${errors.join('\n')}`;
};
exports.toInfo = toInfo;
//? <----- Convert string to JSON stringified info ----->
const toJson = (value, desc = (0, exports.toInfo)(value)) => typeof value === 'object'
    ? JSON.stringify({ value, desc }, null, 2)
    : `
Description: ${desc} 
Value: ${value}`;
exports.toJson = toJson;
//? <----- Convert value to text block ----->
const toTextBlock = (value, desc = (0, exports.toInfo)(value)) => {
    const json = (0, exports.toJson)(value, desc);
    return `
	<----- Message Start --->
	${json}
	<----- Message End ----->
	`;
};
exports.toTextBlock = toTextBlock;
const matchChars = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    const match = trimmed.match(/[a-zа-яё]/gi);
    return match ? match : [];
};
exports.matchChars = matchChars;
const isConstantStyle = (prop) => {
    const trimmed = (0, exports.validate)(prop) && prop.trim();
    const replaced = trimmed.replace(/[A-Z0-9_]/g, '');
    const upper = trimmed.toUpperCase();
    return trimmed.length && trimmed === replaced && trimmed === upper;
};
exports.isConstantStyle = isConstantStyle;
const isStringLength = (input, min = 1, max = 2000) => typeof input === 'string' && input.length > min && input.length < max;
exports.isStringLength = isStringLength;
const strToArray = (input) => input.split('');
exports.strToArray = strToArray;
//? <----- Convert string to Title case ----->
const toTextValues = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim().toLowerCase();
    const words = (0, exports.matchWords)(trimmed).filter(String);
    const wordsUnical = uniq(words);
    const wordsStats = wordsUnical.map((word, index) => {
        const code = word.split('').map(c => c.charCodeAt(0));
        const popularity = words.filter(w => w === word).length;
        const length = word.length;
        return { word, index, length, code, popularity };
    });
    const chars = (0, exports.matchChars)(trimmed).filter(String);
    const charsUnical = uniq(chars);
    const charsStats = charsUnical.map((char, index) => {
        const code = char.charCodeAt(0);
        const popularity = chars.filter(ch => ch === char).length;
        return { char, index, code, popularity };
    });
    const lengthStats = {
        length: trimmed.length,
        findedWords: words.length,
        findedWordsUnical: wordsUnical.length,
        findedChars: chars.length,
        findedCharsUnical: charsUnical.length,
    };
    return { value: trimmed, wordsStats, charsStats, lengthStats };
};
exports.toTextValues = toTextValues;
const toTitleCase = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim().toLowerCase();
    const start = trimmed.slice(0, 1).toUpperCase();
    const rest = trimmed.slice(1);
    return start + rest;
};
exports.toTitleCase = toTitleCase;
const toValidChars = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    return trimmed.replace(/[^a-zA-Z0-9]/g, '');
};
exports.toValidChars = toValidChars;
const matchRomanNumerals = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    const match = trimmed.match(/^[IVXLCDM]+$/);
    return match && match[0];
};
const matchQuey = (input, query) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    const match = trimmed.match(query);
    return match && match[0];
};
const matchWords = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    const matches = trimmed.match(/\w+/g);
    return matches !== null ? matches.map(w => (0, exports.toValidChars)(w.trim())).filter(String) : [];
};
exports.matchWords = matchWords;
const replaceInvalidChars = (input) => {
    const trimmed = (0, exports.validate)(input) && input.trim();
    return trimmed.replace(/[^a-zA-Z0-9\s\n\t]/gim, '');
};
exports.replaceInvalidChars = replaceInvalidChars;
const isUpperCase = (input) => (0, exports.validate)(input) && input === input.toUpperCase();
exports.isUpperCase = isUpperCase;
//? <----- Convert string to regular expression ----->
const rxpFromChars = (chars, flags = 'gim') => {
    const str = [...chars].join('|');
    return new RegExp(`\b${str}*\b`, flags);
};
exports.rxpFromChars = rxpFromChars;
const rxpFromChars2 = (chars, flags = 'gim') => {
    const str = [...chars].join('');
    return new RegExp(`\b[${str}]*\b`, flags);
};
exports.rxpFromChars2 = rxpFromChars2;
//? <----- Dictionary for replace roman numerals to arabic. Also used for create types ----->
const DICT_ROMAN_NUMERALS = [
    { v1: ['I'], v2: '1' },
    { v1: ['V'], v2: '5' },
    { v1: ['X'], v2: '10' },
    { v1: ['L'], v2: '50' },
    { v1: ['C'], v2: '100' },
    { v1: ['D'], v2: '500' },
    { v1: ['M'], v2: '1000' },
];
//? <----- Map dictionary sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] with replace and match methods ----->
const dictionaryMapper = (src) => {
    const [v1, v2] = Array.isArray(src) ? src : [src?.v1, src?.v2];
    if (!v1 || !v2)
        return null;
    const chars = [v1].flat(2).filter(String);
    const rxp = (0, exports.rxpFromChars)(chars);
    const findMatches = (text) => text.match(rxp);
    const replaceMatches = (text) => text.replace(rxp, v2);
    const results = { v1, v2, chars, rxp, findMatches, replaceMatches };
    return results;
};
exports.dictionaryMapper = dictionaryMapper;
//? <----- Create dictionary  methods from array with dict sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] ----->
const dictionaryCreate = (inputs) => inputs
    .filter(Array.isArray)
    .map(el => {
    const [v1, v2 = ''] = el;
    return v1 ? { v1: Array.isArray(v1) ? v1 : [v1], v2 } : false;
})
    .filter(Boolean).map(exports.dictionaryMapper);
exports.dictionaryCreate = dictionaryCreate;
//? <----- Replace all matches from dict in text, with dict replacers ----->
const dictionaryReplace = (text, dict) => {
    const sources = dict.filter(Boolean).map(exports.dictionaryMapper);
    return sources.reduce((acc, src) => src.replaceMatches(acc), text);
};
exports.dictionaryReplace = dictionaryReplace;
//? <----- Convert roman numeral notation to arabic ----->
const toRomanNumeral = (input) => {
    const dict = DICT_ROMAN_NUMERALS.map(exports.dictionaryMapper);
    return dict.reduce((acc, src) => src.replaceMatches(acc), input);
};
exports.toRomanNumeral = toRomanNumeral;
