"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Values = void 0;
const Check_1 = require("./Check");
class Values {
    static timeValue() {
        return Date.now();
    }
    static timeStamp() {
        return new Date(Date.now()).toLocaleTimeString();
    }
    static dateStamp() {
        return new Date(Date.now()).toISOString();
    }
    static timeDifference(time_stamp) {
        return Check_1.Check.number(time_stamp) && Date.now() - time_stamp;
    }
    static calcExp(exp) {
        const calc = new Function('', `return ${exp}`);
        const result = calc();
        return Check_1.Check.number(result) && result;
    }
}
exports.Values = Values;
