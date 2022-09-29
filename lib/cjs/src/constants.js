"use strict";
//! Constant Values for tests, examples, etc...
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_CODES = exports.COLOR_NAMES = exports.COLOR_CLASS = exports.MUSIC_SCALES = exports.MUSIC_INTERVAL_CHARS = exports.MUSIC_DURATION_CHARS = exports.MUSIC_NOTES_SHARP = exports.MUSIC_NOTES_BEMOLE = exports.MUSIC_NOTES_CHARS = exports.TYPEOF = exports.FUNC = exports.BIG = exports.ERR = exports.OBJ = exports.ARR = exports.NUM = exports.BLN = exports.RND = exports.STR = void 0;
//?	<----- Primitive Values ----->
exports.STR = 'Some string value';
exports.RND = 0.311;
exports.BLN = false;
exports.NUM = 237563390;
exports.ARR = [exports.STR, exports.NUM];
exports.OBJ = { STR: exports.STR, NUM: exports.NUM };
exports.ERR = new Error('Example Error');
exports.BIG = Number.MAX_SAFE_INTEGER;
const FUNC = (v) => Math.random();
exports.FUNC = FUNC;
//?	<----- Values for using in Music Useful Functions ----->
const PRIVATE_MUSIC_NOTES_CHARS = ['A', 'B', 'C', 'D', 'F', 'E', 'G'];
const PRIVATE_MUSIC_NOTES_BEMOLE = [...PRIVATE_MUSIC_NOTES_CHARS, 'Bb', 'Db', 'Fb', 'Gb', 'Ab'];
const PRIVATE_MUSIC_NOTES_SHARP = [...PRIVATE_MUSIC_NOTES_CHARS, 'A#', 'C#', 'D#', 'E#', 'G#'];
const PRIVATE_MUSIC_DURATION_CHARS = ['n', 't', 'm', 'n'];
const PRIVATE_MUSIC_INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'];
const PRIVATE_MUSIC_SCALES = [
    'major',
    'minor',
    'ionian',
    'dorian',
    'phrygian',
    'lydian',
    'mixolydian',
    'aeolian',
    'locrian',
    'majorpentatonic',
    'minorpentatonic',
    'chromatic',
    'harmonicchromatic',
    'blues',
    'doubleharmonic',
    'flamenco',
    'harmonicminor',
    'melodicminor',
    'wholetone',
];
//?	<----- Values for generate colors -----> as const
const PRIVATE_COLOR_CLASS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
];
const PRIVATE_COLOR_NAMES = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
];
const PRIVATE_COLOR_CODES = [
    '#ff0000',
    '#ff4e00',
    '#db7b00',
    '#ffcc00',
    '#e4ed00',
    '#81d700',
    '#00ffb4',
    '#00ffea',
    '#00baff',
    '#3c00ff',
    '#a800ff',
    '#ff00fd',
];
const PRIVATE_TYPEOF = ['string', 'number', 'function', 'object', 'boolean', 'bigint', 'symbol', 'undefined'];
//?	<----- Duplicate for create element types from readonly original arrays  ----->
exports.TYPEOF = [...PRIVATE_TYPEOF];
exports.MUSIC_NOTES_CHARS = [...PRIVATE_MUSIC_NOTES_CHARS];
exports.MUSIC_NOTES_BEMOLE = [...PRIVATE_MUSIC_NOTES_BEMOLE];
exports.MUSIC_NOTES_SHARP = [...PRIVATE_MUSIC_NOTES_SHARP];
exports.MUSIC_DURATION_CHARS = [...PRIVATE_MUSIC_DURATION_CHARS];
exports.MUSIC_INTERVAL_CHARS = [...PRIVATE_MUSIC_INTERVAL_CHARS];
exports.MUSIC_SCALES = [...PRIVATE_MUSIC_SCALES];
exports.COLOR_CLASS = [...PRIVATE_COLOR_CLASS];
exports.COLOR_NAMES = [...PRIVATE_COLOR_NAMES];
exports.COLOR_CODES = [...PRIVATE_COLOR_CODES];
