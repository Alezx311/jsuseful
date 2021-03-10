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
