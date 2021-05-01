# Download on [NPM](https://www.npmjs.com/package/jsuseful)

### _Package dont have any dependency, old functions (FileSystem, Music, ...etc) wil be returned soon_

---

Not great, not perfect, but better than nothing.

I removed some functions (FileSystem, Music, ...etc) for more compatibility with environments. I will return it soon.

---

# Usage

    const JsUseful = require('jsuseful')

    console.log(JsUseful.Random.number(2, 6))
    // -> 5

or

    const { Random, Values } = require('jsuseful')

    console.log(Random.number())
    // -> 87

---

# Tests

```
--------------|---------|----------|---------|---------|------------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|------------------------
All files     |   93.43 |    93.02 |   87.88 |   93.43 |
 Check.js     |     100 |      100 |     100 |     100 |
 Constants.js |     100 |      100 |     100 |     100 |
 Random.js    |     100 |      100 |     100 |     100 |
 Values.js    |     100 |      100 |     100 |     100 |
 index.js     |   56.67 |    57.14 |      50 |   56.67 | 3-4,6-8,10,12-13,16-20
--------------|---------|----------|---------|---------|------------------------

```

# Modules

## _JsUseful.Random_

Simple randomized values for dev process.

        const { Random } = require('jsuseful')

`Random.range(min?: number = 0.01, max?: number = 0.99, size?: number = 2): number | boolean`

```javascript
const data = Random.range()
const data = Random.range(0.7)
const data = Random.range(0.4, 0.78)
const data = Random.range(0.4, 0.78, 4)
```

`Random.number(min: number = 1, max: number = 100): number | boolean`

```javascript
const data = Random.number(234, 456786)
const data = Random.number(0, 2)
const data = Random.number(0, 10)
```

`Random.powerOfTwo(min: number = 1, max: number = 10): number | boolean`

```javascript
const data = Random.powerOfTwo(2, 10)
const data = Random.powerOfTwo(10, 20)
const data = Random.powerOfTwo(1, 50)
```

`Random.boolean(chance: number = 50): boolean`

```javascript
const data = Random.boolean()
const data = Random.boolean(50)
const data = Random.boolean(5)
```

`Random.array(size: number = 10, value = () => this.number()): any[] | boolean`

```javascript
const data = Random.array()
const data = Random.array(20, 'some string')
const data = Random.array(100, () => Random.range())
const data = Random.array(100, (v, i) => Random.number(i + 1, i + 10))
```

`Random.numbers(min: number = 1, max: number = 100, size: number = 10): number[] | boolean`

```javascript
const data = Random.numbers(1, 5, 100)
const data = Random.numbers(234, 6823, 35)
```

`Random.arrayIndex(array: any[]): any`

```javascript
const data = Random.arrayIndex([1, 2, 3, 4])
```

`Random.arrayElement(array: any[]): any | boolean`

```javascript
const data = Random.arrayElement([1, 2, 3, 4])
```

`Random.arrayValues(array: any[], size: number = 10): any[] | boolean`

```javascript
const data = Random.arrayValues([1, 2, 3, 54], 7)
```

`Random.arrayUnicals(array: any[]): any[] | boolean`

```javascript
const data = Random.arrayUnicals([1, 2, 2, 2, 3])
```

`Random.arrayShuffle(array: any[]): any[] | boolean`

```javascript
const data = Random.arrayShuffle([1, 2, 3, 4, 5])
```

`Random.objectKey(obj: object): string | boolean`

```javascript
const data = Random.objectKey({ some: 'object' })
```

`Random.objectValue(obj: object): any | boolean`

```javascript
const data = Random.objectValue({ some: 'object' })
```

`Random.objectEntry(obj: object): [string, any] | boolean`

```javascript
const data = Random.objectEntry({ some: 'object' })
```

---

## _JsUseful.Values_

        const { Values } = require('jsuseful')

`Values.timeValue()`

```javascript
const data = Values.timeValue()
// -> 1615894517800
```

`Values.timeStamp()`

```javascript
const data = Values.timeStamp()
// -> 1:35:17 PM
```

`Values.dateStamp()`

```javascript
const data = Values.dateStamp()
// -> 2021-03-16T11:35:17.851Z
```

`Values.timeDifference(time: number): number| boolean`

```javascript
const data = Values.timeDifference(Date.now() - 2000)
// -> 2000
```

`Values.calcExp(exp: string): number| boolean`

```javascript
const data = Values.calcExp('2+2*2')
// -> 6
```

---

## _JsUseful.Constants_

        const { Constants } = require('jsuseful')
        const {
            NOTES,
            NOTES_ALTERNATE,
            SCALES,
            COLOR_CLASSNAMES,
            COLOR_NAMES,
            COLOR_CODES,
            DURATION_CHARS,
            INTERVAL_CHARS,
        } = Constants

        console.log(NOTES)
        // -> 'A', 'Bb'...

        console.log(NOTES_ALTERNATE)
        // ->'A', 'A#', 'B', 'C', 'C#...

        console.log(SCALES)
        // -> 'major','minor','ionian','dorian','phrygian'...

        console.log(COLOR_CLASSNAMES)
        // ->'primary','secondary','success','danger','warning','info'..

        console.log(COLOR_NAMES)
        // -> 'blue', 'indigo', 'purple', 'pink', 'red'...

        console.log(COLOR_CODES)
        // -> '#ff0000','#ff4e00','#db7b00','#ffcc00','#e4ed00'...

        console.log(DURATION_CHARS)
        // -> ['n', 't', 'm', 'n']

        console.log(INTERVAL_CHARS)
        // -> ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

---
