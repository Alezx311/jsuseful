const { Music } = require('../src')

describe('Test Music.noteChar()', () => {
  it('Should return noteChar', () => {
    expect(Music.noteChar()).toBeTruthy()
  })
})
describe('Test Music.note()', () => {
  it('Should return note', () => {
    expect(Music.note()).toBeTruthy()
  })
})
describe('Test Music.notes()', () => {
  it('Should return notes', () => {
    expect(Music.notes()).toBeTruthy()
  })
})
describe('Test Music.scale()', () => {
  it('Should return scale', () => {
    expect(Music.scale()).toBeTruthy()
  })
})
describe('Test Music.octave()', () => {
  it('Should return octave', () => {
    expect(Music.octave()).toBeTruthy()
  })
})
describe('Test Music.interval()', () => {
  it('Should return interval', () => {
    expect(Music.interval()).toBeTruthy()
  })
})
describe('Test Music.durationChar()', () => {
  it('Should return durationChar', () => {
    expect(Music.durationChar()).toBeTruthy()
  })
})
describe('Test Music.duration()', () => {
  it('Should return duration', () => {
    expect(Music.duration()).toBeTruthy()
  })
})
describe('Test Music.velocity()', () => {
  it('Should return velocity', () => {
    expect(Music.velocity()).toBeTruthy()
  })
})
describe('Test Music.noteValues()', () => {
  it('Should return noteValues', () => {
    expect(Music.noteValues()).toBeTruthy()
  })
})
describe('Test Music.noteParse()', () => {
  it('Should return noteParse', () => {
    expect(Music.noteParse('C2')).toEqual({ note: 'C2', char: 'C', octave: '2' })
  })
})
describe('Test Music.noteIndex()', () => {
  it('Should return noteIndex', () => {
    expect(Music.noteIndex('C2')).toEqual(3)
  })
})
describe('Test Music.noteStep()', () => {
  it('Should return noteStep', () => {
    expect(Music.noteStep('C2', 34)).toEqual('Bb5')
  })
})
describe('Test Music.noteSteps()', () => {
  it('Should return noteSteps', () => {
    expect(Music.noteSteps('C2', 5)).toEqual(['C2', 'Db2', 'D2', 'Fb2', 'F2'])
  })
})
