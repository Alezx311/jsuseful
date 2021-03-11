const { Music, Random } = require("../src");

describe("Test Music.noteChar()", () => {
  it("Should return noteChar", () => {
    const results = Random.array(100, () => Music.noteChar());

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result).toMatch(/^[a-g]+$/i);
    });
  });
});

describe("Test Music.note()", () => {
  it("Should return note", () => {
    const results = Random.array(100, () => Music.noteChar());

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result).toMatch(/^[a-g]+$/i);
    });
  });
});

describe("Test Music.notes()", () => {
  it("Should return notes", () => {
    const results = Music.notes(100);

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result).toMatch(/^[a-g]+\d$/i);
    });
  });
});

describe("Test Music.scale()", () => {
  it("Should return scale", () => {
    const results = Random.array(100, () => Music.scale());

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result.length).toBeGreaterThan(4);
    });
  });
});

describe("Test Music.octave()", () => {
  it("Should return octave", () => {
    const results = Random.array(100, () => Music.octave());

    results.forEach((result) => {
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThanOrEqual(8);
    });
  });
});

describe("Test Music.interval()", () => {
  it("Should return interval", () => {
    expect(Music.interval()).toBeTruthy();
  });
});

describe("Test Music.durationChar()", () => {
  it("Should return durationChar", () => {
    expect(Music.durationChar()).toBeTruthy();
  });
});

describe("Test Music.duration()", () => {
  it("Should return duration", () => {
    const results = Random.array(100, () => Music.duration());

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result).toMatch(/^[ntsm]\d{1,2}$/);
    });
  });
});

describe("Test Music.velocity()", () => {
  it("Should return velocity", () => {
    const results = Random.array(100, () => Music.velocity());

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThanOrEqual(1);
    });
  });
});

describe("Test Music.noteValues()", () => {
  it("Should return noteValues", () => {
    const results = Random.array(100, () => Music.noteValues("C2"));

    results.forEach((result) => {
      expect(result).toBeTruthy();
      expect(result.duration).toBeTruthy();
      expect(result.velocity).toBeTruthy();
      expect(result.note).toBeTruthy();
    });
  });
});

describe("Test Music.noteParse()", () => {
  it("Should return noteParse", () => {
    const results = Random.array(100, () => Music.note()).map(Music.noteParse);

    results.forEach((result) => {
      expect(result.note).toBeTruthy();
      expect(result.char).toBeTruthy();
      expect(result.octave).toBeTruthy();
    });
  });
});

describe("Test Music.noteIndex()", () => {
  it("Should return noteIndex", () => {
    const results = Random.array(100, () => Music.note()).map(Music.noteIndex);

    results.forEach((result) => {
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(11);
    });
  });
});

describe("Test Music.noteStep()", () => {
  it("Should return noteStep", () => {
    const results = Random.array(100, () => Music.note()).map((note) => {
      return {
        note: note,
        step: Music.noteStep(note),
      };
    });

    results.forEach((result) => {
      expect(result.note).toBeTruthy();
      expect(result.step).toBeTruthy();
      expect(result.step).not.toEqual(result.note);
      expect(result.step).toMatch(/^[a-g]+\d$/i);
    });
  });
});

describe("Test Music.noteSteps()", () => {
  it("Should return noteSteps", () => {
    expect(Music.noteSteps("C2", 5)).toEqual(["C2", "Db2", "D2", "Fb2", "F2"]);
  });

  it("Should return noteSteps", () => {
    const note = Music.note();
    const results = Music.noteSteps(note, 50);

    results.forEach((result) => {
      expect(result).toMatch(/^[a-g]{1,2}\d$/i);
    });

    expect([...new Set([...results])]).toEqual(results);
  });
});
