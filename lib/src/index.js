"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsUseful = exports.Functions = exports.Text = exports.Values = exports.Random = exports.Constants = void 0;
var Constants_1 = require("./Constants");
Object.defineProperty(exports, "Constants", { enumerable: true, get: function () { return Constants_1.Constants; } });
var Random_1 = require("./Random");
Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return Random_1.Random; } });
var Values_1 = require("./Values");
Object.defineProperty(exports, "Values", { enumerable: true, get: function () { return Values_1.Values; } });
var Text_1 = require("./Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return Text_1.Text; } });
var Functions_1 = require("./Functions");
Object.defineProperty(exports, "Functions", { enumerable: true, get: function () { return Functions_1.Functions; } });
const Constants_2 = require("./Constants");
const Random_2 = require("./Random");
const Values_2 = require("./Values");
const Text_2 = require("./Text");
const Functions_2 = require("./Functions");
class JsUseful {
    constructor() {
        this.Constants = Constants_2.Constants;
        this.Random = Random_2.Random;
        this.Values = Values_2.Values;
        this.Text = Text_2.Text;
        this.Functions = Functions_2.Functions;
    }
}
exports.JsUseful = JsUseful;
exports.default = JsUseful;
