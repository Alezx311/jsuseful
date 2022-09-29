"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsUseful = exports.JSUSEFUL_REDUCED = exports.Sources = exports.Dates = exports.Objects = exports.Arrays = exports.Converters = exports.Validators = exports.JSUSEFUL = void 0;
const ERRORS = __importStar(require("./errors"));
const CONSTANTS = __importStar(require("./constants"));
const RANDOMS = __importStar(require("./random"));
const MESSAGES = __importStar(require("./message"));
const USEFULS = __importStar(require("./useful"));
class JSUSEFUL {
}
exports.JSUSEFUL = JSUSEFUL;
JSUSEFUL.Error = ERRORS;
JSUSEFUL.Constant = CONSTANTS;
JSUSEFUL.Random = RANDOMS;
JSUSEFUL.Message = MESSAGES;
JSUSEFUL.Useful = USEFULS;
class Validators {
}
exports.Validators = Validators;
Validators.is = USEFULS.is;
Validators.isF = USEFULS.isF;
Validators.isO = USEFULS.isO;
Validators.isN = USEFULS.isN;
Validators.isS = USEFULS.isS;
Validators.isA = USEFULS.isA;
Validators.isB = USEFULS.isB;
Validators.isE = USEFULS.isE;
Validators.isNull = USEFULS.isNull;
Validators.isUndefined = USEFULS.isUndefined;
Validators.isRegExp = USEFULS.isRegExp;
Validators.isError = USEFULS.isError;
Validators.isDate = USEFULS.isDate;
Validators.isSymbol = USEFULS.isSymbol;
Validators.isLen = USEFULS.isLen;
Validators.isTruthy = USEFULS.isTruthy;
Validators.isOdd = USEFULS.isOdd;
Validators.isPalindrome = USEFULS.isPalindrome;
class Converters {
}
exports.Converters = Converters;
Converters.toS = USEFULS.toS;
Converters.toA = USEFULS.toA;
Converters.toO = USEFULS.toO;
Converters.toL = USEFULS.toL;
Converters.toJson = USEFULS.toJson;
Converters.toTypeOf = USEFULS.toTypeOf;
Converters.toCallback = USEFULS.toCallback;
class Arrays {
}
exports.Arrays = Arrays;
Arrays.arrLastIndex = USEFULS.arrLastIndex;
Arrays.arrLast = USEFULS.arrLast;
Arrays.arrFlat = USEFULS.arrFlat;
Arrays.arrUnical = USEFULS.arrUnical;
Arrays.arrUnicals = USEFULS.arrUnicals;
Arrays.arrMax = USEFULS.arrMax;
Arrays.arrMin = USEFULS.arrMin;
Arrays.arrayQuickSort = USEFULS.arrayQuickSort;
Arrays.arrShuffle = USEFULS.arrShuffle;
Arrays.arrQuickSort = USEFULS.arrQuickSort;
class Objects {
}
exports.Objects = Objects;
Objects.objAssign = USEFULS.objAssign;
Objects.objKeys = USEFULS.objKeys;
Objects.objValues = USEFULS.objValues;
Objects.objEntries = USEFULS.objEntries;
Objects.objFrom = USEFULS.objFrom;
Objects.objCreate = USEFULS.objCreate;
class Dates {
}
exports.Dates = Dates;
Dates.getTimePerformance = USEFULS.getTimePerformance;
Dates.timeStamp = USEFULS.timeStamp;
Dates.timeISO = USEFULS.timeISO;
Dates.timeUTC = USEFULS.timeUTC;
class Sources {
    static getEntries(v) {
        return [...Object.entries(v)].filter(String);
    }
    static getSourceValues(obj) {
        return this.getEntries(obj)
            .map(([k, v]) => ({ isFunc: typeof v !== 'function', desc: k, value: v, type: typeof v }))
            .reduce((acc, el) => [...acc, el], []);
    }
    static getConstantSourceValues(obj) {
        return this.getEntries(obj)
            .filter(([k, v]) => typeof v !== 'function')
            .map(([k, v]) => ({ desc: k, value: v, type: typeof v }))
            .reduce((acc, el) => [...acc, el], []);
    }
    static getExampleSourceValues(obj) {
        const values = this.getConstantSourceValues(obj);
        const Message = JSON.stringify(values, null, 2);
        console.log(`Examples from ${obj?.name}:\n${Message}`);
        return values;
    }
    static getFunctionSourceValues(obj) {
        return this.getEntries(obj)
            .filter(([k, v]) => v instanceof Function || typeof v === 'function')
            .map(([k, v]) => ({ desc: k, value: v, type: typeof v }))
            .reduce((acc, el) => [...acc, el], []);
    }
}
exports.Sources = Sources;
_a = Sources;
Sources.ErrorMethods = Sources.getSourceValues(ERRORS);
Sources.Constants = Sources.getSourceValues(CONSTANTS);
Sources.Random = Sources.getSourceValues(RANDOMS);
Sources.Message = Sources.getSourceValues(MESSAGES);
Sources.Useful = Sources.getSourceValues(USEFULS);
Sources.Values = [..._a.ErrorMethods, ..._a.Constants, ..._a.Random, ..._a.Message, ..._a.Useful];
// export class JsUseful extends JSUSEFUL {
exports.JSUSEFUL_REDUCED = {
    ...ERRORS,
    ...CONSTANTS,
    ...RANDOMS,
    ...MESSAGES,
    ...USEFULS,
};
exports.JsUseful = {
    ...exports.JSUSEFUL_REDUCED,
    All: exports.JSUSEFUL_REDUCED,
    Errors: ERRORS,
    Constants: CONSTANTS,
    Randoms: RANDOMS,
    Messages: MESSAGES,
    Useful: USEFULS,
    Validators,
    Converters,
    Arrays,
    Objects,
    Dates,
    Sources,
};
exports.default = exports.JsUseful;
