const { Random } = require("../src");

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1];
const EXAMPLE_OBJECT = { someKey: "someValue", numbers: EXAMPLE_ARRAY };

const createArr = (size = 100) => Array(size).fill(1);

describe("range", () => {
  it("Should return random range", () => {
    const result = Random.range();

    expect(result).toBeDefined();
    expect(result).toBeGreaterThan(0);
    expect(result).toBeLessThan(1);
  });

  it("Should return random ranges", () => {
    const results = Random.array(100, () => Random.range());

    results.forEach((result) => {
      expect(result).toBeDefined();
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(1);
    });
  });
});

describe("number", () => {
  it("Should return random number", () => {
    const result = Random.number();

    expect(result).toBeDefined();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
  });

  it("Should return random numbers", () => {
    const results = Random.array(100, () => Random.number());

    results.forEach((result) => {
      expect(result).toBeDefined();
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(100);
    });
  });

  it("Should return random numbers in given range", () => {
    const results = Random.array(100, () => Random.number(125, 8893));

    results.forEach((result) => {
      expect(result).toBeDefined();
      expect(result).toBeGreaterThanOrEqual(125);
      expect(result).toBeLessThanOrEqual(8893);
    });
  });
});

describe("powerOfTwo", () => {
  it("Should return random powerOfTwo", () => {
    expect(Random.powerOfTwo()).toBeDefined();
  });

  it("Should return random array, with powerOfTwo values", () => {
    const results = Random.array(100, () => Random.powerOfTwo(10));

    results.forEach((result) => {
      expect(result).toBeDefined();
      expect(result % 2).toEqual(0);
      expect(result).toBeGreaterThanOrEqual(2);
    });
  });
});

describe("boolean", () => {
  it("Should return random boolean", () => {
    expect(Random.boolean()).toBeDefined();
  });

  it("Should return random array, with boolean values", () => {
    const results = Random.array(100, () => Random.boolean(100));

    results.forEach((result) => {
      expect(result).toBeDefined();
    });
  });
});

describe("array", () => {
  it("Should return random array", () => {
    expect(Random.array()).toBeDefined();
  });

  it("Should return random array, with given value", () => {
    const results = Random.array(100, "some value");

    expect(results).toHaveLength(100);
    results.forEach((result) => {
      expect(result).toEqual("some value");
    });
  });

  it("Should return random array, with given callback result", () => {
    const results = Random.array(100, () => "some value");

    expect(results).toHaveLength(100);
    results.forEach((result) => {
      expect(result).toEqual("some value");
    });
  });
});

describe("numbers", () => {
  it("Should return random numbers", () => {
    expect(Random.numbers()).toBeDefined();
  });

  it("Should return random numbers in given range", () => {
    const results = Random.numbers(100, 35, 5472);

    results.forEach((result) => {
      expect(result).toBeGreaterThanOrEqual(35);
      expect(result).toBeLessThanOrEqual(5472);
    });
  });

  it("Should return random numbers in given range, and with given size", () => {
    const results = Random.numbers(234, 35, 5472);

    expect(results).toHaveLength(234);
    results.forEach((result) => {
      expect(result).toBeGreaterThanOrEqual(35);
      expect(result).toBeLessThanOrEqual(5472);
    });
  });
});

describe("arrayValues", () => {
  it("Should return random arrayValues", () => {
    expect(Random.arrayValues(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should return random values from given array", () => {
    Random.arrayValues(EXAMPLE_ARRAY).forEach((v) => {
      expect(EXAMPLE_ARRAY.includes(v)).toBe(true);
    });
  });
});

describe("arraySequence", () => {
  it("Should return random arraySequence", () => {
    expect(Random.arraySequence(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should return sequence of numbers, with given size", () => {
    const result = Random.arraySequence(1, 5);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("arrayUnicals", () => {
  it("Should return random arrayUnicals", () => {
    expect(Random.arrayUnicals(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should return unical values of given array", () => {
    const result = Random.arrayUnicals(EXAMPLE_ARRAY);

    expect(result).toEqual([...new Set([...EXAMPLE_ARRAY])]);
  });
});

describe("arrayShuffle", () => {
  it("Should return random arrayShuffle", () => {
    expect(Random.arrayShuffle(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should shuffle given array", () => {
    const result = Random.arrayShuffle(EXAMPLE_ARRAY);

    expect(result.sort()).toBe(EXAMPLE_ARRAY);
  });
});

describe("arrayIndex", () => {
  it("Should return random arrayIndex", () => {
    expect(Random.arrayIndex(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should return random index of given array", () => {
    const result = Random.arrayIndex(EXAMPLE_ARRAY);

    expect(EXAMPLE_ARRAY[result]).toBeTruthy();
  });
});

describe("arrayElement", () => {
  it("Should return random arrayElement", () => {
    expect(Random.arrayElement(EXAMPLE_ARRAY)).toBeDefined();
  });

  it("Should return random element of given array", () => {
    const result = Random.arrayElement(EXAMPLE_ARRAY);

    expect(EXAMPLE_ARRAY.includes(result)).toBe(true);
  });
});

describe("objectKey", () => {
  it("Should return random objectKey", () => {
    expect(Random.objectKey(EXAMPLE_OBJECT)).toBeDefined();
  });

  it("Should return  random key of given object", () => {
    const result = Random.objectKey(EXAMPLE_OBJECT);

    expect(EXAMPLE_OBJECT).toHaveProperty(result);
  });
});

describe("objectValue", () => {
  it("Should return random objectValue", () => {
    expect(Random.objectValue(EXAMPLE_OBJECT)).toBeDefined();
  });

  it("Should return  random value of given object", () => {
    const result = Random.objectValue(EXAMPLE_OBJECT);

    expect(Object.values(EXAMPLE_OBJECT).includes(result)).toBe(true);
  });
});

describe("objectEntry", () => {
  it("Should return random objectEntry", () => {
    expect(Random.objectEntry(EXAMPLE_OBJECT)).toBeDefined();
  });

  it("Should return  random entry of given object", () => {
    const [key, value] = Random.objectEntry(EXAMPLE_OBJECT);

    expect(EXAMPLE_OBJECT[key]).toBe(value);
  });
});
