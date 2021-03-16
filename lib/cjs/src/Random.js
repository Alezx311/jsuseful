"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const Check_1 = require("./Check");
class Random {
    //* Returns random range
    static range(min = 0.01, max = 0.99, size = 2) {
        return Check_1.Check.number(min, max, size) && Number((Math.random() * (max - min) + min).toFixed(size));
    }
    //* Returns random number
    static number(min = 1, max = 100) {
        return Check_1.Check.number(min, max) && Math.floor(min + Math.random() * (max + 1 - min));
    }
    //* Returns random powerOfTwo
    static powerOfTwo(min = 1, max = 10) {
        return Check_1.Check.number(min, max) && Math.pow(2, ~~this.number(min, max));
    }
    //* Returns random boolean
    static boolean(chance = 50) {
        return Check_1.Check.number(chance) && this.number(1, 100) > chance;
    }
    //* Returns random array
    static array(size = 10, value = () => this.number()) {
        return (Check_1.Check.truthy(size, value) &&
            Array(size)
                .fill(value)
                .map(v => (v instanceof Function ? v() : v)));
    }
    //* Returns random numbers
    static numbers(min = 1, max = 100, size = 10) {
        return Check_1.Check.number(min, max, size) && this.array(size, () => this.number(min, max));
    }
    //* Returns random arrayIndex
    static arrayIndex(array) {
        return Check_1.Check.array(array) && this.number(0, array.length - 1);
    }
    //* Returns random arrayElement
    static arrayElement(array) {
        return Check_1.Check.array(array) && array[this.arrayIndex(array)];
    }
    //* Returns random arrayValues
    static arrayValues(array, size = 10) {
        return Check_1.Check.array(array) && Check_1.Check.number(size) && this.array(size, () => this.arrayElement(array));
    }
    //* Returns random arrayUnicals
    static arrayUnicals(array) {
        return Check_1.Check.array(array) && Array.from(new Set([...array]));
    }
    //* Returns random arrayShuffle
    static arrayShuffle(array) {
        return Check_1.Check.array(array) && array.sort(() => Math.random() - 0.5);
    }
    //* Returns random objectKey
    static objectKey(obj) {
        return Check_1.Check.object(obj) && this.arrayElement(Object.keys(obj));
    }
    //* Returns random objectValue
    static objectValue(obj) {
        return Check_1.Check.object(obj) && this.arrayElement(Object.values(obj));
    }
    //* Returns random objectEntry
    static objectEntry(obj) {
        return Check_1.Check.object(obj) && this.arrayElement(Object.entries(obj));
    }
}
exports.Random = Random;
