const { Values } = require("../src");

const ARR = [1, 2, 3, 1];
const OBJ = { words: "some words", arr: ARR };

describe("Test Values.color()", () => {
  it("Should return color", () => {
    const result = Values.color();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.colorName()", () => {
  it("Should return colorName", () => {
    const result = Values.colorName();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.time()", () => {
  it("Should return time", () => {
    const result = Values.time();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.timeString()", () => {
  it("Should return timeString", () => {
    const result = Values.timeString();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.timeDifference()", () => {
  it("Should return timeDifference", () => {
    const time = Date.now() - 1000;
    const result = Values.timeDifference(time);

    expect(result).toBeTruthy();
  });
});
describe("Test Values.timestamp()", () => {
  it("Should return timestamp", () => {
    const result = Values.timestamp();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.datestamp()", () => {
  it("Should return datestamp", () => {
    const result = Values.datestamp();

    expect(result).toBeTruthy();
  });
});
describe("Test Values.objClone()", () => {
  it("Should return objClone", () => {
    const result = Values.objClone(OBJ);

    expect(result).toBeTruthy();
  });
});
describe("Test Values.objKeys()", () => {
  it("Should return objKeys", () => {
    const result = Values.objKeys(OBJ);

    expect(result).toBeTruthy();
  });
});
describe("Test Values.objValues()", () => {
  it("Should return objValues", () => {
    const result = Values.objValues(OBJ);

    expect(result).toBeTruthy();
  });
});
describe("Test Values.objEntries()", () => {
  it("Should return objEntries", () => {
    const result = Values.objEntries(OBJ);

    expect(result).toBeTruthy();
  });
});
