class Random {
  static range() {
    return Math.random();
  }

  static number(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min) + this.range()) + min;
  }

  static powerOfTwo(max = 10) {
    return 2 ** this.number(1, max);
  }

  static boolean(chance = 50) {
    return this.number(1, 100) > chance;
  }

  static array(size = 10, cb = () => this.number()) {
    return Array(size)
      .fill(1)
      .map((v) => {
        if (typeof cb === "function") {
          return cb();
        } else {
          return cb;
        }
      });
  }

  static numbers(size = 10, min = 1, max = 100) {
    return this.array(size, () => this.number(min, max));
  }

  static arrayValues(arr, size = 10) {
    return this.array(size, () => this.arrayElement(arr));
  }

  static arraySequence(start = 1, size = 10) {
    return this.array(size, start).map((v, i) => v + i);
  }

  static arrayUnicals(arr) {
    return [...new Set([...arr])];
  }

  static arrayShuffle(arr) {
    return arr.sort(() => this.range() - 0.5);
  }

  static arrayIndex(arr) {
    return this.number(0, arr.length - 1);
  }

  static arrayElement(arr) {
    return arr[this.arrayIndex(arr)];
  }

  static objectKey(obj) {
    return this.arrayElement(Object.keys(obj));
  }

  static objectValue(obj) {
    return this.arrayElement(Object.values(obj));
  }

  static objectEntry(obj) {
    return this.arrayElement(Object.entries(obj));
  }
}

module.exports = Random;
