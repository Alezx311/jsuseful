class Random {
  static range = () => Math.random();
  static number = (min = 1, max = 10) =>
    Math.floor(Math.random() * (max - min) + this.range()) + min;
  static powerOfTwo = (max = 10) => 2 ** this.number(1, max);
  static boolean = (chance = 50) => this.number(1, 100) > chance;
  static array = (size = 10, cb = () => this.number()) =>
    Array(size).fill(1).map(cb);
  static numbers = (size = 10, min = 1, max = 100) =>
    this.array(size, (min, max) => this.number(min.max));
  static arrayValues = (arr, size = 10) =>
    this.array(size, () => this.arrayElement(arr));
  static arraySequence = (start = 1, size = 10) =>
    this.array(size, (v, i) => start + i);
  static arrayUnicals = (arr) => [...new Set([...arr])];
  static arrayShuffle = (arr) => arr.sort(() => this.range() - 0.5);
  static arrayIndex = (arr) => this.number(0, arr.length - 1);
  static arrayElement = (arr) => arr[this.arrayIndex(arr)];
  static objectKey = (obj) => this.arrayElement(Object.keys(obj));
  static objectValue = (obj) => this.arrayElement(Object.values(obj));
  static objectEntry = (obj) => this.arrayElement(Object.entries(obj));
}

class Check {
  static isLength(value, ...rest) {
    try {
      const results = [value, ...rest].every((v) => v.length > 0);

      return results;
    } catch (err) {
      console.error(
        `Error on Check.isLength, with given values ${[value, ...rest]}`
      );
      throw err;
    }
  }
  static isLengthEqual(value, ...rest) {
    try {
      const results = [value, ...rest].every(
        (v) => this.isLength(v) && value.length
      );

      return results;
    } catch (err) {
      console.error(
        `Error on Check.isLengthEqual, with given values ${[value, ...rest]}`
      );
      throw err;
    }
  }
  static isTrue(value, ...rest) {
    try {
      const results = [value, ...rest].filter(Boolean);
      const result = this.isLengthEqual(values, results);

      return result;
    } catch (err) {
      console.error(
        `Error on Check.isTrue, with given values ${[value, ...rest]}`
      );
      throw err;
    }
  }
  static isValidNumber(value, ...rest) {
    try {
      const results = [value, ...rest].filter((v) => v >= 0 && v.isFinite());

      return results;
    } catch (err) {
      console.error(`Error, ${err?.message ?? err}`);
      throw err;
    }
  }
}

class Random {
  static range() {
    try {
      const result = Number(Math.random().toFixed(2));

      return result;
    } catch (err) {
      console.error(`Error on Random.number: ${err?.message}`, err);
    }
  }
  static number(min = 1, max = 100) {
    try {
      Check.isTrue(min >= 0, min.isFinite(), min < max, max.isFinite);

      let result = this.range() * (max + 1) - min;

      if (min >= 1) result = Math.floor(result);

      return result;
    } catch (err) {
      console.error(`Error on Random.number ${err?.message ?? err}`);
    }
  }
  static powerOfTwo(maxPower = 10) {
    try {
      Check.isTrue(maxPower > 0, maxPower.isFinite());
      const multiplier = this.number(2, maxPower);
      const result = 2 ** multiplier;

      return result;
    } catch (err) {
      console.error(`Error on Random.powerOfTwo ${err?.message}`, err);
    }
  }
  static boolean(chance = 50) {
    try {
      const result = this.number(0, 100) > chance;

      return result;
    } catch (err) {
      console.error(`Error on Random.boolean: ${err?.message}`, err);
    }
  }
  static array(size = 10, value) {
    try {
      const array = Array(size).fill(value);

      if (typeof value === "function") {
        return array.map((v) => v());
      }

      return array;
    } catch (err) {
      console.error(`Error on Random.array: ${err?.message}`, err);
    }
  }
  static numbers(min, max, size = 10) {
    try {
      const results = this.array(size, () => this.number(min, max));

      return results;
    } catch (err) {
      console.error(`Error on Random.numbers: ${err?.message}`, err);
    }
  }
  static arrayElement(array, size = 1) {
    try {
      Check.isTrue(array, array.length > 1, size > 0);

      if (size === 1) {
        const result = array[this.number(0, array.length - 1)];
        return result;
      }

      const results = Array(size)
        .fill(1)
        .map((v) => this.arrayElement(array));

      return results;
    } catch (err) {
      console.error(`Error on Random.arrayElement: ${err?.message}`, err);
    }
  }
  static arrayUnicals(array) {
    try {
      Check.isTrue(...array);

      const result = [...new Set([...array])];

      return result;
    } catch (err) {
      console.error(`Error on Random.arrayUnicals: ${err?.message}`, err);
    }
  }
  static arrayShuffle(array) {
    try {
      Check.isTrue(array, array.length > 1);

      if (array.length === 2) {
        const [val1, val2] = array;
        return [val2, val1];
      } else {
        const result = array.sort(() => this.range() - 0.5);

        return result;
      }
    } catch (err) {
      console.error(`Error on Random.arrayShuffle: ${err?.message}`, err);
    }
  }
  static arrayIndex(array) {
    try {
      Check.isTrue(array, array.length > 1);

      const result = this.number(0, array.length - 1);

      return result;
    } catch (err) {
      console.error(`Error on Random.arrayIndex: ${err?.message}`, err);
    }
  }
  static objectKey(obj) {
    try {
      Check.isTrue(obj, Object.keys(obj));

      const data = Object.keys(obj);
      const result = this.arrayElement(data);

      return result;
    } catch (err) {
      console.error(`Error on Random.objectKey: ${err?.message}`, err);
    }
  }
  static objectValue(obj) {
    try {
      Check.isTrue(obj, Object.keys(obj));

      const data = Object.values(obj);
      const result = this.arrayElement(data);

      return result;
    } catch (err) {
      console.error(`Error on Random.objectValue: ${err?.message}`, err);
    }
  }
  static objectEntry(obj) {
    try {
      Check.isTrue(obj, Object.keys(obj));

      const data = Object.entries(obj);
      const result = this.arrayElement(data);

      return result;
    } catch (err) {
      console.error(`Error on Random.objectEntry: ${err?.message}`, err);
    }
  }
}

module.exports = Random;
