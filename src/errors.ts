//! Errors for throwing or returning in functions

//?	<----- Create errors ----->
export const errBasic = (msg: string = 'basic error') => new Error(msg)
export const errType = (msg: string = 'type error') => new TypeError(msg)
export const errEval = (msg: string = 'eval error') => new EvalError(msg)
export const errRange = (msg: string = 'range error') => new RangeError(msg)
export const errSyntax = (msg: string = 'syntax error') => new SyntaxError(msg)
export const errReference = (msg: string = 'reference error') => new ReferenceError(msg)

//?	<----- Basic errors ----->
export const ERROR_BASIC = new Error('Basic Error')
export const ERROR_TYPE = new TypeError('Basic Type Error')
export const ERROR_EVAL = new EvalError('Basic Eval Error')
export const ERROR_RANGE = new RangeError('Basic Range Error')
export const ERROR_SYNTAX = new SyntaxError('Basic Syntax Error')
export const ERROR_REFERENCE = new ReferenceError('Basic Reference Error')

//?	<----- Basic type errors with definitions ----->
export const ERROR_TYPE_NOT_STRING = new TypeError('ERROR TYPE_NOT_STRING')
export const ERROR_TYPE_NOT_ARRAY = new TypeError('ERROR TYPE_NOT_ARRAY')

//?	<----- Basic value errors with definitions ----->
export const ERROR_VALUE = new TypeError('ERROR VALUE')
export const ERROR_VALUE_NOT_DEFINED = new TypeError('ERROR VALUE_NOT_DEFINED')
export const ERROR_VALUE_NOT_TRUTHY = new TypeError('ERROR VALUE_NOT_TRUTHY')

//?	<----- Basic value length errors with definitions ----->
export const ERROR_LENGTH = new TypeError('ERROR LENGTH')
export const ERROR_LENGTH_SHORT = new TypeError('ERROR LENGTH_SHORT')
export const ERROR_LENGTH_LARGE = new TypeError('ERROR LENGTH_LARGE')


//aasdasdasd