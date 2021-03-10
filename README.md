# Download

[NPM](https://www.npmjs.com/package/jsuseful)

# Usage

    const Helpers = require('jsuseful')

    console.log(Helpers.Random.number(2, 6))
    // -> 5

or

    const { Random, Values } = require('jsuseful')

    console.log(Random.number())
    // -> 87

## Helpers.Random

    const { Random } = require('jsuseful')

### range

    console.log(Random.range())
    // -> 0.87

### number

    console.log(Random.number())
    // -> 87

### powerOfTwo

    console.log(Random.powerOfTwo())
    // -> 8

### boolean

    console.log(Random.boolean())
    // -> true

### array

    console.log(Random.array())
    // -> [1,4,6,2]

### numbers

    console.log(Random.numbers())
    // -> [1,4,6,12]

### arrayValues

    console.log(Random.arrayValues([1,2,3], 2))
    // -> [1,2]

### arraySequence

    console.log(Random.arraySequence(5))
    // -> [1,2,3,4,5]

### arrayUnicals

    console.log(Random.arrayUnicals([1,1,1,2]))
    // -> [1,2]

### arrayShuffle

    console.log(Random.arrayShuffle([1,2,3]))
    // -> [2,3,1]

### arrayIndex

    console.log(Random.arrayIndex([1,2,3]))
    // -> 2

### arrayElement

    console.log(Random.arrayElement([1,2,3]))
    // -> 2

### objectKey

    console.log(Random.objectKey({ 'words':   'words', arr: [1,2,3]}))
    // -> 'words'

### objectValue

    console.log(Random.objectValue({ 'words':   'words', arr: [1,2,3]}))
    // -> [1,2,3]

### objectEntry

    console.log(Random.objectEntry({ 'words':   'words', arr: [1,2,3]}))
    // -> ['words': 'words']

## Helpers.Console

    const { Console } = require('jsuseful')

- transform
- show
- showRandom
- showCute
- showError

## Helpers.FileSystem

    const { FileSystem } = require('jsuseful')

- resolvedPath
- async readFile
- async readDir
- async write
- async append

## Helpers.Music

    const { Music } = require('jsuseful')

- noteChar
- octave
- note
- notes
- scale
- durationChar
- duration
- interval
- velocity
- noteValues

## Helpers.Values

    const { Values } = require('jsuseful')

- color
- colorName
- time
- timeString
- timeDifference
- timestamp
- datestamp
- objClone
- objKeys
- objValues
- objEntries
- mathExp
- calculate

## Helpers.Constants

    const { Constants } = require('jsuseful')

- NOTES
- NOTES_ALTERNATE
- SCALES
- COLOR_CLASSNAMES
- COLOR_NAMES
- COLOR_CODES
- DURATION_CHARS
- INTERVAL_CHARS
