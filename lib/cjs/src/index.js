"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsUseful = exports.Functions = exports.Text = exports.Values = exports.Random = exports.Constants = void 0;
const Constants_1 = __importDefault(require("./Constants"));
exports.Constants = Constants_1.default;
const Random_1 = __importDefault(require("./Random"));
exports.Random = Random_1.default;
const Values_1 = __importDefault(require("./Values"));
exports.Values = Values_1.default;
const Text_1 = __importDefault(require("./Text"));
exports.Text = Text_1.default;
const Functions_1 = __importDefault(require("./Functions"));
exports.Functions = Functions_1.default;
exports.JsUseful = { Constants: Constants_1.default, Random: Random_1.default, Values: Values_1.default, Text: Text_1.default, Functions: Functions_1.default };
exports.default = exports.JsUseful;
