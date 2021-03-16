"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.Random = void 0;
var Message_1 = require("./Message");
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.range = function (opt) {
        try {
            var _a = __assign({ min: 0.01, max: 0.99, size: 2 }, opt), min = _a.min, max = _a.max, size = _a.size;
            if (!min || typeof min !== 'number' || min < 0 || min >= 1) {
                throw new Error("Invalid min argument: " + min);
            }
            else if (!max || typeof max !== 'number' || max > 1 || max <= min) {
                throw new Error("Invalid argument: " + max);
            }
            else if (!size || typeof size !== 'number') {
                throw new Error("Invalid argument: " + size);
            }
            var result = Number((Math.random() * (max - min) + min).toFixed(size));
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.range');
            throw error;
        }
    };
    Random.number = function (opt) {
        try {
            var _a = __assign({ min: 1, max: 100 }, opt), min = _a.min, max = _a.max;
            if (!min || typeof min !== 'number' || min < 0 || min > max) {
                throw new Error("Invalid number min argument: " + min);
            }
            else if (!max || typeof max !== 'number') {
                throw new Error("Invalid number max argument: " + max);
            }
            var result = Math.floor(this.range() * (max - min) + min);
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.number');
            throw error;
        }
    };
    Random.powerOfTwo = function (opt) {
        try {
            var _a = __assign({ min: 1, max: 10 }, opt), min = _a.min, max = _a.max;
            if (!min || typeof min !== 'number' || min < 0 || min > max) {
                throw new Error("Invalid number min argument: " + min);
            }
            else if (!max || typeof max !== 'number') {
                throw new Error("Invalid number max argument: " + max);
            }
            var result = Math.pow(2, this.number({ min: min, max: max }));
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.powerOfTwo');
            throw error;
        }
    };
    Random.boolean = function (opt) {
        try {
            var chance = __assign({ chance: 50 }, opt).chance;
            if (!chance || typeof chance !== 'number' || chance < 0 || chance > 100) {
                throw new Error("Invalid chance argument " + chance);
            }
            var result = !!(this.number() > chance);
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.boolean');
            throw error;
        }
    };
    Random.array = function (opt) {
        var _this = this;
        try {
            var _a = __assign({ size: 10, value: function () { return _this.number(); } }, opt), size = _a.size, value = _a.value;
            if (!size || typeof size !== 'number' || size < 1 || size > 1000) {
                throw new Error("Invalid size argument " + size);
            }
            else if (!value) {
                throw new Error("Invalid value argument " + value);
            }
            var array = Array(size)
                .fill(value)
                .map(function (v) { return (v instanceof Function ? v() : v); });
            return array;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.array');
            throw error;
        }
    };
    Random.numbers = function (opt) {
        var _this = this;
        try {
            var _a = __assign({ min: 1, max: 100, size: 10 }, opt), min_1 = _a.min, max_1 = _a.max, size = _a.size;
            if (!min_1 || typeof min_1 !== 'number' || min_1 < 0 || min_1 >= max_1) {
                throw new Error("Invalid min argument: " + min_1);
            }
            else if (!max_1 || typeof max_1 !== 'number' || max_1 <= min_1) {
                throw new Error("Invalid argument: " + max_1);
            }
            else if (!size || typeof size !== 'number') {
                throw new Error("Invalid argument: " + size);
            }
            var result = this.array({ size: size, value: function () { return _this.number({ min: min_1, max: max_1 }); } });
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.numbers');
            throw error;
        }
    };
    Random.arrayElement = function (array) {
        try {
            if (!array || !array.length) {
                throw new Error("Invalid array argument: " + array);
            }
            var result = array[this.number({ min: 0, max: array.length })];
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.arrayElement');
            throw error;
        }
    };
    Random.arrayValues = function (array, opt) {
        var _this = this;
        try {
            if (!array || !array.length) {
                throw new Error("Invalid array argument: " + array);
            }
            var size = __assign(__assign({}, opt), { size: 10 }).size;
            var result = this.array({ size: size, value: function () { return _this.arrayElement(array); } });
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.arrayValues');
            throw error;
        }
    };
    Random.arrayUnicals = function (array) {
        try {
            if (!array || !array.length) {
                throw new Error("Invalid array argument: " + array);
            }
            var result = Array.from(new Set(__spreadArray([], array)));
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.arrayUnicals');
            throw error;
        }
    };
    Random.arrayShuffle = function (array) {
        try {
            if (!array || !array.length) {
                throw new Error("Invalid array argument: " + array);
            }
            var result = array.sort(function () { return Math.random() - 0.5; });
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.arrayShuffle');
            throw error;
        }
    };
    Random.arrayIndex = function (array) {
        try {
            if (!array || !array.length) {
                throw new Error("Invalid array argument: " + array);
            }
            var result = this.number({ min: 0, max: array.length });
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.arrayIndex');
            throw error;
        }
    };
    Random.objectKey = function (obj) {
        try {
            if (!obj) {
                throw new Error("Invalid object argument: " + JSON.stringify(obj));
            }
            var data = Object.keys(obj);
            var result = this.arrayElement(data);
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.objectKey');
            throw error;
        }
    };
    Random.objectValue = function (obj) {
        try {
            if (!obj) {
                throw new Error("Invalid object argument: " + JSON.stringify(obj));
            }
            var data = Object.values(obj);
            var result = this.arrayElement(data);
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.objectValue');
            throw error;
        }
    };
    Random.objectEntry = function (obj) {
        try {
            if (!obj) {
                throw new Error("Invalid object argument: " + JSON.stringify(obj));
            }
            var data = Object.entries(obj);
            var result = this.arrayElement(data);
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Random.objectEntry');
            throw error;
        }
    };
    return Random;
}());
exports.Random = Random;
