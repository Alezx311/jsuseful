"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Values = void 0;
class Values {
    static DateNow() {
        return Date.now();
    }
    static DateValue() {
        return new Date(this.DateNow());
    }
    //* Time in UNIX seconds
    static DateStamp() {
        const date = this.DateValue().toISOString();
        return `${date}`;
    }
    //* Time in string
    static TimeStamp() {
        const date = this.DateValue().toLocaleTimeString();
        return `${date}`;
    }
    //* Useful when need fast check performance
    static TimeDifference(time) {
        return this.DateNow() - ~~time;
    }
    //* Just simple math expression Date
    static CalcExp(exp) {
        const calc = new Function('', `return ${exp}`);
        return calc();
    }
}
exports.Values = Values;
exports.default = {
    DateNow: Values.DateNow,
    DateValue: Values.DateValue,
    DateStamp: Values.DateStamp,
    TimeStamp: Values.TimeStamp,
    TimeDifference: Values.TimeDifference,
    CalcExp: Values.CalcExp,
};
