# Usage

    const Helpers = require('js-useful')

    const someRandomNumber = Helpers.Random.number(2, 6)
    // -> 5

or

    const { Random } = require('js-useful')
    const someNumber = Random.number()
    // -> 87

# Helpers.Random

- ## boolean(chance?: number) - true or false, with given chance. Default: (50)

- ## range() - range from 0 to 1

- ## number: (min?: number, max?: number) - Number, from min to max Default: (min: 1, max: 100)

- ## numbers(size?: number, min?: number, max?: number) - Array of random numbers, with given array size, and numbers min and max. Default: (size: 10, min: 1, max: 100)

- ## array(size?: number) - Array with given size, with Random.range() values. Default: (size: 10)

- ## values(arr?: number, size?: number) - Random values from given array. Default: (size: 10)

- ## arraySequence(start?: number, size?: number) - Numbers sequence with given size. Default: (start: 1, size: 10)

- ## arrayUnicals(arr?: Array) - Unical values from given array

- ## arrayShuffle(arr?: Array) - Shuffling given array

- ## arrayIndex(arr?: Array) - Random index from given array

- ## arrayElement(arr?: Array) Random element from given array

- ## objectKey(obj?: Object) - Random key from given object

- ## objectValue(obj?: Object) - Random value from given object

- ## objectEntry(obj?: Object) - Random entry from given object
