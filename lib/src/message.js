"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRomanNumeral = exports.dictionaryReplace = exports.dictionaryCreate = exports.dictionaryMapper = exports.rxpFromChars2 = exports.rxpFromChars = exports.isUpperCase = exports.replaceInvalidChars = exports.matchWords = exports.toValidChars = exports.toTitleCase = exports.toTextValues = exports.strToArray = exports.isStringLength = exports.isConstantStyle = exports.matchChars = exports.toTextBlock = exports.toJson = exports.toInfo = exports.validate = void 0;
const uniq = (arr) => [...new Set([...arr])];
//? Validate string and collect errors
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
//? Convert string to info about length and validation errors
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
//? Convert string to JSON stringified info
const toJson = (value, desc = (0, exports.toInfo)(value)) => typeof value === 'object'
    ? JSON.stringify({ value, desc }, null, 2)
    : `
Description: ${desc} 
Value: ${value}`;
exports.toJson = toJson;
//? Convert value to text block
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
//? Convert string to Title case
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
//? Convert string to regular expression
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
//? Dictionary for replace roman numerals to arabic. Also used for create types
const DICT_ROMAN_NUMERALS = [
    { v1: ['I'], v2: '1' },
    { v1: ['V'], v2: '5' },
    { v1: ['X'], v2: '10' },
    { v1: ['L'], v2: '50' },
    { v1: ['C'], v2: '100' },
    { v1: ['D'], v2: '500' },
    { v1: ['M'], v2: '1000' },
];
//? Map dictionary sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }] with replace and match methods
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
//? Create dictionary  methods from array with dict sources, like [["hello", "Bye"]] or [{ v1: ["hello"], v2: "Bye" }]
const dictionaryCreate = (inputs) => inputs
    .filter(Array.isArray)
    .map(el => {
    const [v1, v2 = ''] = el;
    return v1 ? { v1: Array.isArray(v1) ? v1 : [v1], v2 } : false;
})
    .filter(Boolean).map(exports.dictionaryMapper);
exports.dictionaryCreate = dictionaryCreate;
//? Replace all matches from dict in text, with dict replacers
const dictionaryReplace = (text, dict) => {
    const sources = dict.filter(Boolean).map(exports.dictionaryMapper);
    return sources.reduce((acc, src) => src.replaceMatches(acc), text);
};
exports.dictionaryReplace = dictionaryReplace;
//? Convert roman numeral notation to arabic
const toRomanNumeral = (input) => {
    const dict = DICT_ROMAN_NUMERALS.map(exports.dictionaryMapper);
    return dict.reduce((acc, src) => src.replaceMatches(acc), input);
};
exports.toRomanNumeral = toRomanNumeral;
// 1.charAt(x)
// This function will return the character at the x position within the string.
// 1
// 2
// 3
// 4
// //charAt(x)
// var myString = 'jQuery FTW!!!';
// console.log(myString.charAt(7));
// //output: F
// Moving on with this article on Javascript String functions, Let’s have a look at the next one.
// 2.charCodeAt(x)
// This function will return the unicode value of the character at position ‘x’ within the string.
// 1
// 2
// 3
// 4
// //charAt(position)
// var message="jquery4u"
// //alerts "q"
// alert(message.charAt(1)
// 3.concat(v1,v2..)
// This function combines one or more strings(argv1,v2 etc) into existing one.
// 1
// 2
// 3
// 4
// 5
// //concat(v1, v2,..)
// var message="Sam"
// var final=message.concat(" is a"," hopeless romantic.")
// //alerts "Sam is a hopeless romantic."
// alert(final)
// 4.fromCharcode(c1,c2)
// Function will return a string created by using specified sequence of unicode values(argc1,c2).
// 1
// 2
// 3
// 4
// 5
// //fromCharCode(c1, c2,...)
// console.log(String.fromCharCode(97,98,99,120,121,122))
// //output: abcxyz
// console.log(String.fromCharCode(72,69,76,76,79))
// //output: HELLO
// 5.indexOf(substr, [start])
// Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is 0.
// 1
// 2
// 3
// 4
// //indexOf(char/substring)
// var sentence="Hi, my name is Sam!"
// if (sentence.indexOf("Sam")!=-1)
// alert("Sam is in there!")
// Moving on with this article on Javascript String functions
// 6.lastIndexOf(substr, [start])
// Searches and (if found) returns the index number of the searched character or substring within the string. Searches the string from end to the beginning. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is string.length-1.
// 1
// 2
// 3
// 4
// //lastIndexOf(substr, [start])
// var myString = 'javascript rox';
// console.log(myString.lastIndexOf('r'));
// //output: 11
// 7.match(regexp)
// Executes a search for a match within a string based on a regular expression. It returns an array of information or null if no match is found.
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// //match(regexp) //select integers only
// var intRegex = /[0-9 -()+]+$/;
// var myNumber = '999';
// var myInt = myNumber.match(intRegex);
// console.log(isInt);
// //output: 999
// var myString = '999 JS Coders';
// var myInt = myString.match(intRegex);
// console.log(isInt);
// //output: null
// Moving on with this article on Javascript String functions, let’s understand replace function.
// 8.replace(regexp/substr, replacetext)
// Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead.
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// //replace(substr, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(/JavaScript/i, "jQuery"));
// //output: 999 jQuery Coders
// //replace(regexp, replacetext)
// var myString = '999 JavaScript Coders';
// console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
// //output: The JavaScript Coders
// 9.search(regexp)
// Tests for a match in a string. It returns the index of the match, or -1 if not found.
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// //search(regexp)
// var intRegex = /[0-9 -()+]+$/;
// var myNumber = '999';
// var isInt = myNumber.search(intRegex);
// console.log(isInt);
// //output: 0
// 10.slice(start, [end])
// This function returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of the string.
// 1
// 2
// 3
// 4
// //slice(start, end)
// var text="excellent"
// text.slice(0,4) //returns "exce"
// text.slice(2,4) //returns "ce"
// Moving on with this article on Javascript String functions
// 11.split(delimiter, [limit])
// This will split a string into many according to the specified delimiter, and returns an array containing each element. The optional “limit” is an integer that lets you specify the maximum number of elements to return.
// 1
// 2
// 3
// 4
// 5
// //split(delimiter)
// var message="Welcome to jQuery4u"
// //word[0] contains "We"
// //word[1] contains "lcome to jQuery4u"
// var word=message.split("l")
// 12.substr(start, [length])
// This function returns the characters in a string beginning at “start” and through the specified number of characters, “length”. “Length” is optional, and if omitted, up to the end of the string is assumed.
// 1
// 2
// 3
// 4
// //substring(from, to)
// var text="excellent"
// text.substring(0,4) //returns "exce"
// text.substring(2,4) //returns "ce"
// 13.substring(from, [to])
// It returns the characters in a string between “from” and “to” indexes, NOT including “to” itself. “To” is optional, and if omitted, up to the end of the string is assumed.
// 1
// 2
// 3
// 4
// 5
// //substring(from, [to])
// var myString = 'javascript rox';
// myString = myString.substring(0,10);
// console.log(myString)
// //output: javascript
// 14.toLowerCase()
// This will return the string with all of its characters converted to lowercase.
// 1
// 2
// 3
// 4
// 5
// //toLowerCase()
// var myString = 'JAVASCRIPT ROX';
// myString = myString.toLowerCase();
// console.log(myString)
// //output: javascript rox
// 15.toUpperCase()
// This will return the string with all of its characters converted to uppercase.
// 1
// 2
// 3
// 4
// 5
// //toUpperCase()
// var myString = 'javascript rox';
// myString = myString.toUpperCase();
// console.log(myString)
// //output: JAVASCRIPT ROX
// 16. includes()
// It is used to check whether a string contains the specified string or characters.
// 1
// 2
// 3
// 4
// //includes()
// var mystring = "Hello, welcome to edureka";
// var n = mystring.includes("edureka");
// //output: True
// 17. endsWith()
// This function checks whether a string ends with specified string or characters.
// 1
// 2
// 3
// 4
// //endsWith()
// var mystr = "List of javascript functions";
// var n = mystr.endsWith("functions");
// //output: True
// 18. repeat()
// This returns a new string with a specified number of copies of an existing string.
// 1
// 2
// 3
// 4
// //repeat()
// var string = "Welcome to Edureka";
// string.repeat(2);
// //output: Welcome to Edureka Welcome to Edureka
// 19. valueOf()
// It is used to return the primitive value of a String object.
// 1
// 2
// 3
// 4
// //valueOf()
// var mystr = "Hello World!";
// var res = mystr.valueOf();
// //output: Hello World!
// 20. trim()
// This function removes whitespace from both ends of a string.
// 1
// 2
// 3
// //trim()
// var str = "     Hello Edureka!     ";
// alert(str.trim());