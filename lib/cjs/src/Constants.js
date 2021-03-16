"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERVAL_CHARS = exports.DURATION_CHARS = exports.COLOR_CODES = exports.COLOR_NAMES = exports.COLOR_CLASSNAMES = exports.SCALES = exports.NOTES_ALTERNATE = exports.NOTES = void 0;
//! Constant Values for using in generate values, validate, etc...
exports.NOTES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Fb', 'F', 'E', 'Gb', 'G', 'Ab'];
exports.NOTES_ALTERNATE = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#'];
exports.SCALES = [
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
    'wholetone'
];
exports.COLOR_CLASSNAMES = [
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
    'transparent'
];
exports.COLOR_NAMES = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'];
exports.COLOR_CODES = [
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
    '#ff00fd'
];
exports.DURATION_CHARS = ['n', 't', 'm', 'n'];
exports.INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'];
