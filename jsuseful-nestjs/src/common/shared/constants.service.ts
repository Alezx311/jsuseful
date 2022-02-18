import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstantsService {
  NAME = 'ConstantsService';

  STR = 'Example of string';
  OBJ = { desc: 'Example of object' };
  ARR = ['Example of array'];
  VALUES = {
    STR: this.STR,
    OBJ: this.OBJ,
    ARR: this.ARR,
  };

  MUSIC_NOTE_CHARS_BASIC = ['A', 'B', 'C', 'D', 'F', 'E', 'G'];
  MUSIC_NOTE_CHARS_BEMOLE = [
    ...this.MUSIC_NOTE_CHARS_BASIC,
    'Bb',
    'Db',
    'Fb',
    'Gb',
    'Ab',
  ];
  MUSIC_NOTE_CHARS_SHARP = [
    ...this.MUSIC_NOTE_CHARS_BASIC,
    'A#',
    'C#',
    'D#',
    'E#',
    'G#',
  ];
  MUSIC_SCALE_NAMES = [
    'major',
    'minor',
    'ionian',
    'dorian',
    'phrygian',
    'lydian',
    'mixolydian',
    'aeolian',
    'locrian',
    'majorpentatonic',
    'minorpentatonic',
    'chromatic',
    'harmonicchromatic',
    'blues',
    'doubleharmonic',
    'flamenco',
    'harmonicminor',
    'melodicminor',
    'wholetone',
  ];
  MUSIC_DURATION_CHARS = ['n', 't', 'm', 'n'];
  MUSIC_INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'];
  MUSIC = {
    NOTE_CHARS_BASIC: this.MUSIC_NOTE_CHARS_BASIC,
    NOTE_CHARS_BEMOLE: this.MUSIC_NOTE_CHARS_BEMOLE,
    NOTE_CHARS_SHARP: this.MUSIC_NOTE_CHARS_SHARP,
    SCALE_NAMES: this.MUSIC_SCALE_NAMES,
    DURATION_CHARS: this.MUSIC_DURATION_CHARS,
    INTERVAL_CHARS: this.MUSIC_INTERVAL_CHARS,
  };

  COLOR_CLASSNAMES = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'white',
    'transparent',
  ];
  COLOR_NAMES = [
    'blue',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'cyan',
  ];
  COLOR_HEX = [
    '#ff0000',
    '#ff4e00',
    '#db7b00',
    '#ffcc00',
    '#e4ed00',
    '#81d700',
    '#00ffb4',
    '#00ffea',
    '#00baff',
    '#3c00ff',
    '#a800ff',
    '#ff00fd',
  ];
  COLOR = {
    CLASSNAMES: this.COLOR_CLASSNAMES,
    HEX: this.COLOR_HEX,
    NAMES: this.COLOR_NAMES,
  };

  test = {
    ConstantsService: {
      VALUES: this.VALUES,
      MUSIC: this.MUSIC,
      COLOR: this.COLOR,
    },
  };
}
