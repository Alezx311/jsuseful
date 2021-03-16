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
exports.Values = void 0;
var Message_1 = require("./Message");
var Random = require('./Random').Random;
var _a = require('./Constants'), COLOR_NAMES = _a.COLOR_NAMES, COLOR_CODES = _a.COLOR_CODES;
var Values = /** @class */ (function () {
    function Values() {
    }
    Values.color = function () {
        try {
            var color = Random.arrayElement(COLOR_CODES);
            return color;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.color');
        }
    };
    Values.colorName = function () {
        try {
            var colorName = Random.arrayElement(COLOR_NAMES);
            return colorName;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.colorName');
        }
    };
    Values.time = function () {
        try {
            var time = Date.now();
            return time;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.time');
        }
    };
    Values.timeStamp = function () {
        try {
            var timeStamp = new Date(Date.now()).toLocaleTimeString();
            return timeStamp;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.timeString');
        }
    };
    Values.dateStamp = function () {
        try {
            var dateStamp = new Date(Date.now()).toISOString();
            return dateStamp;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.timeString');
        }
    };
    Values.timeDifference = function (time) {
        try {
            var diff = Date.now() - time;
            return diff;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.timeDifference');
        }
    };
    Values.objClone = function (obj) {
        try {
            var cloned = __assign({}, obj);
            return obj;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.objClone');
        }
    };
    Values.objKeys = function (obj) {
        try {
            var keys = Object.keys(obj);
            return keys;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.objKeys');
        }
    };
    Values.objValues = function (obj) {
        try {
            var values = Object.values(obj);
            return values;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.objValues');
        }
    };
    Values.objEntries = function (obj) {
        try {
            var entries = Object.entries(obj);
            return entries;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.objEntries');
        }
    };
    Values.objMerge = function (obj1, obj2) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var merged = Object.assign.apply(Object, __spreadArray([{}, obj1, obj2], rest));
        return merged;
    };
    Values.mathExp = function (exp) {
        try {
            var expression = new Function('', "return " + exp);
            var result = expression();
            return result;
        }
        catch (error) {
            Message_1.Message.error(error, 'Values.mathExp');
        }
    };
    return Values;
}());
exports.Values = Values;
