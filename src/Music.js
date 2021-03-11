const Random = require("./Random");
const {
  NOTES,
  NOTES_ALTERNATE,
  SCALES,
  DURATION_CHARS,
  INTERVAL_CHARS,
} = require("./Constants");

class Music {
  static noteChar = (alt = false) =>
    Random.arrayElement(alt ? NOTES_ALTERNATE : NOTES);

  static octave = (min = 2, max = 4) => Random.number(min, max);

  static note = (octave = this.octave()) => `${this.noteChar()}${octave}`;

  static notes = (size = 10, octave) =>
    Random.array(size, (v) => this.note(octave));

  static scale = () => Random.arrayElement(SCALES);

  static durationChar = () => Random.arrayElement(DURATION_CHARS);

  static duration = () => `${this.durationChar()}${Random.powerOfTwo(4)}`;

  static interval = () => Random.arrayElement(INTERVAL_CHARS);

  static velocity = () => 1 - Random.range() / 3;

  static noteValues = (note) => ({
    note,
    duration: this.duration(),
    velocity: this.velocity(),
  });

  static noteParse = (str) => {
    let [note, char, octave] = str.trim().match(/^([a-g#]+)(\d)$/i);

    if (!char) {
      throw new Error(
        `Invalid char on parsing note: ${str} ${[note, char, octave]}`
      );
    }
    if (!octave) {
      console.error(
        `Invalid octave on parsing note: ${str} ${[note, char, octave]}`
      );
      octave = 1;
    }

    return { note, char, octave };
  };

  static noteIndex = (note) =>
    NOTES.indexOf(note.trim().match(/^([a-g#]+)/i)?.[1]);

  static noteStep = (noteChar, step = 1) => {
    let { note, char, octave } = this.noteParse(noteChar);
    let noteIndex = this.noteIndex(char);
    let newIndex = noteIndex + step;

    if (newIndex === NOTES.length) {
      octave = Number(octave) + 1;
      newIndex = 0;
    } else if (newIndex > NOTES.length) {
      octave = Number(octave) + Math.floor(newIndex / NOTES.length);
      newIndex = newIndex % NOTES.length;
    }

    return `${NOTES[newIndex]}${octave}`;
  };

  static noteSteps = (note, size = 24) => {
    return Array(size)
      .fill(note)
      .map((v, i) => this.noteStep(v, i));
  };
}

module.exports = Music;
