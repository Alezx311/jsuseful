"use strict";
//! Errors for throwing or returning in functions
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_LENGTH_LARGE = exports.ERROR_LENGTH_SHORT = exports.ERROR_LENGTH = exports.ERROR_VALUE_NOT_TRUTHY = exports.ERROR_VALUE_NOT_DEFINED = exports.ERROR_VALUE = exports.ERROR_TYPE_NOT_ARRAY = exports.ERROR_TYPE_NOT_STRING = exports.ERROR_REFERENCE = exports.ERROR_SYNTAX = exports.ERROR_RANGE = exports.ERROR_EVAL = exports.ERROR_TYPE = exports.ERROR_BASIC = exports.errReference = exports.errSyntax = exports.errRange = exports.errEval = exports.errType = exports.errBasic = void 0;
//?	<----- Create errors ----->
const errBasic = (msg = 'basic error') => new Error(msg);
exports.errBasic = errBasic;
const errType = (msg = 'type error') => new TypeError(msg);
exports.errType = errType;
const errEval = (msg = 'eval error') => new EvalError(msg);
exports.errEval = errEval;
const errRange = (msg = 'range error') => new RangeError(msg);
exports.errRange = errRange;
const errSyntax = (msg = 'syntax error') => new SyntaxError(msg);
exports.errSyntax = errSyntax;
const errReference = (msg = 'reference error') => new ReferenceError(msg);
exports.errReference = errReference;
//?	<----- Basic errors ----->
exports.ERROR_BASIC = new Error('Basic Error');
exports.ERROR_TYPE = new TypeError('Basic Type Error');
exports.ERROR_EVAL = new EvalError('Basic Eval Error');
exports.ERROR_RANGE = new RangeError('Basic Range Error');
exports.ERROR_SYNTAX = new SyntaxError('Basic Syntax Error');
exports.ERROR_REFERENCE = new ReferenceError('Basic Reference Error');
//?	<----- Basic type errors with definitions ----->
exports.ERROR_TYPE_NOT_STRING = new TypeError('ERROR TYPE_NOT_STRING');
exports.ERROR_TYPE_NOT_ARRAY = new TypeError('ERROR TYPE_NOT_ARRAY');
//?	<----- Basic value errors with definitions ----->
exports.ERROR_VALUE = new TypeError('ERROR VALUE');
exports.ERROR_VALUE_NOT_DEFINED = new TypeError('ERROR VALUE_NOT_DEFINED');
exports.ERROR_VALUE_NOT_TRUTHY = new TypeError('ERROR VALUE_NOT_TRUTHY');
//?	<----- Basic value length errors with definitions ----->
exports.ERROR_LENGTH = new TypeError('ERROR LENGTH');
exports.ERROR_LENGTH_SHORT = new TypeError('ERROR LENGTH_SHORT');
exports.ERROR_LENGTH_LARGE = new TypeError('ERROR LENGTH_LARGE');
