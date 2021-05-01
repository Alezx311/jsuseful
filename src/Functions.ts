// ! Not ready yet, for future updates
//* Lot of small functions, but needs refactoring first

//* List:

//^ arrayIterator
//^ arrayCycleGenerator
//^ walkThrough
//^ findSubstrings
//^ caesarCipher
//^ countSubstrings
//^ replaceByDictionary
//^ toRomanNumeral
//^ toTitleCase
//^ isAnagram
//^ palindrome
//^ indexOfAll
//^ isISOString
//^ bucketSort
//^ compare
//^ arrayQuickSort
//^ arrayMax
//^ arrayMin
//^ arrayUnicals
//^ countBy
//^ groupBy
//^ mostFrequent
//^ arrayFrequencies
//^ differenceBy
//^ deepFlatten
//^ powerset
//^ filterNonUnique
//^ filterNonUniqueBy
//^ averageBy
//^ sumBy
//^ cartesianProduct
//^ bubbleSort
//^ objClone
//^ objKeys
//^ objValues
//^ objEntries
//^ objFreeze
//^ compactObject
//^ flattenObject
//^ sleep
//^ delay
//^ primes
//^ arithmeticProgression
//^ geometricProgression
//^ toSafeInteger
//^ isDateValid
//^ fibonacci
//^ size

//TODO Rewrite on TypeScript, for include in package

// export class Generator {
//   static arrayIterator = function* (arr) {
//     yield Random.arrayElement(arr)
//   }
//   static arrayCycleGenerator = function* (arr) {
//     let i = 0
//     while (true) {
//       yield arr[i % arr.length]
//       i++
//     }
//   }
//   static walkThrough = function* (obj) {
//     const walk = function* (x, previous = []) {
//       for (let key of Object.keys(x)) {
//         if (typeof x[key] === 'object') yield* walk(x[key], [...previous, key])
//         else yield [[...previous, key], x[key]]
//       }
//     }
//     yield* walk(obj)
//   }
// }
// export class Text {
//   static findSubstrings = (str, val) => {
//     let all = []
//     let i = 0
//     while (true) {
//       const r = str.indexOf(val, i)
//       if (r !== -1) [all, i] = [[...all, r], r + 1]
//       else return all
//     }
//   }
//   static caesarCipher = (str, shift, decrypt = false) => {
//     const s = decrypt ? (26 - shift) % 26 : shift
//     const n = s > 0 ? s : 26 + (s % 26)
//     return [...str]
//       .map((l, i) => {
//         const c = str.charAtInt(i)
//         if (c >= 65 && c <= 90) return String.fromCharCode(((c - 65 + n) % 26) + 65)
//         if (c >= 97 && c <= 122) return String.fromCharCode(((c - 97 + n) % 26) + 97)
//         return l
//       })
//       .join('')
//   }
//   static countSubstrings = (str, val) => this.findSubstrings(str, val).length
//   static replaceByDictionary = ({ source, dictionary }) => {
//     if (!source || !dictionary) {
//       throw new Error(`source and dictionary is required`)
//     }

//     const regexp = new RegExp(
//       Object.keys(dictionary)
//         .map(v => `\\b${v}\\b`)
//         .join('|'),
//       'g'
//     )
//     const regFunc = word => dictionary?.[word] ?? word

//     const result = source.replace(regexp, regFunc)

//     return result
//   }
//   static toRomanNumeral = num => {
//     const lookup = [
//       ['M', 1000],
//       ['CM', 900],
//       ['D', 500],
//       ['CD', 400],
//       ['C', 100],
//       ['XC', 90],
//       ['L', 50],
//       ['XL', 40],
//       ['X', 10],
//       ['IX', 9],
//       ['V', 5],
//       ['IV', 4],
//       ['I', 1]
//     ]
//     return lookup.reduce((acc, [k, v]) => {
//       acc += k.repeat(Math.floor(num / v))
//       num = num % v
//       return acc
//     }, '')
//   }
//   static toTitleCase = str =>
//     str
//       .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//       .map(x => x.charAt(0).toUpperCase() + x.slice(1))
//       .join(' ')
//   static isAnagram = (str1, str2) => {
//     const normalize = str =>
//       str
//         .toLowerCase()
//         .replace(/[^a-z0-9]/gi, '')
//         .split('')
//         .sort()
//         .join('')
//     return normalize(str1) === normalize(str2)
//   }
//   static palindrome = str => {
//     const s = str.toLowerCase().replace(/[\W_]/g, '')
//     return s === [...s].reverse().join('')
//   }
//   static indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), [])
//   static isISOString = val => {
//     const d = new Date(val)
//     return !Number.isNaN(d.valueOf()) && d.toISOString() === val
//   }
// }
// export class Sort {
//   static bucketSort = (arr, size = 5) => {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     const buckets = Array.from({ length: Math.floor((max - min) / size) + 1 }, () => [])
//     arr.forEach(val => {
//       buckets[Math.floor((val - min) / size)].push(val)
//     })
//     return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], [])
//   }
//   static compare = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2)
//   static arrayQuickSort = arr => {
//     const a = [...arr]
//     if (a.length < 2) return a
//     const pivotIndex = Math.floor(arr.length / 2)
//     const pivot = a[pivotIndex]
//     const [lo, hi] = a.reduce(
//       (acc, val, i) => {
//         if (val < pivot || (val === pivot && i != pivotIndex)) {
//           acc[0].push(val)
//         } else if (val > pivot) {
//           acc[1].push(val)
//         }
//         return acc
//       },
//       [[], []]
//     )
//     return [...this.arrayQuickSort(lo), pivot, ...this.arrayQuickSort(hi)]
//   }
//   static arrayMax = arr => Math.max([...arr])
//   static arrayMin = arr => Math.min([...arr])
//   static arrayUnicals = arr => [...new Set([...arr])]
//   static countBy = (arr, fn) =>
//     arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
//       acc[val] = (acc[val] || 0) + 1
//       return acc
//     }, {})
//   static groupBy = (arr, fn) =>
//     arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
//       acc[val] = (acc[val] || []).concat(arr[i])
//       return acc
//     }, {})
//   static mostFrequent = arr =>
//     Object.entries(
//       arr.reduce((a, v) => {
//         a[v] = a[v] ? a[v] + 1 : 1
//         return a
//       }, {})
//     ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0]
//   static arrayFrequencies = arr =>
//     arr.reduce((a, v) => {
//       a[v] = a[v] ? a[v] + 1 : 1
//       return a
//     }, {})
//   static differenceBy = (a, b, fn) => {
//     const s = new Set(b.map(fn))
//     return a.map(fn).filter(el => !s.has(el))
//   }
//   static deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? this.deepFlatten(v) : v)))
//   static powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]])
//   static filterNonUnique = arr => [...new Set(arr)].filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
//   static filterNonUniqueBy = (arr, fn) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))
//   static averageBy = (arr, fn) =>
//     arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length
//   static sumBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0)
//   static cartesianProduct = (a, b) => a.reduce((p, x) => [...p, ...b.map(y => [x, y])], [])
//   static bubbleSort = arr => {
//     let swapped = false
//     const a = [...arr]
//     for (let i = 1; i < a.length - 1; i++) {
//       swapped = false
//       for (let j = 0; j < a.length - i; j++) {
//         if (a[j + 1] < a[j]) {
//           ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
//           swapped = true
//         }
//       }
//       if (!swapped) return a
//     }
//     return a
//   }
// }
// export class Obj {
//   static objClone = obj => Object.assign({}, obj)
//   static objKeys = obj => Object.keys(obj)
//   static objValues = obj => Object.valueси(obj)
//   static objEntries = obj => Object.entries(obj)
//   static objFreeze = obj => {
//     Object.keys(obj).forEach(prop => {
//       if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) this.objFreeze(obj[prop])
//     })
//     return Object.freeze(obj)
//   }
//   static compactObject = obj => {
//     const data = Array.isArray(obj) ? obj.filter(Boolean) : obj
//     return Object.keys(data).reduce(
//       (acc, key) => {
//         const value = data[key]
//         if (Boolean(value)) acc[key] = typeof value === 'object' ? this.compactObject(value) : value
//         return acc
//       },
//       Array.isArray(obj) ? [] : {}
//     )
//   }
//   static flattenObject = (obj, prefix = '') =>
//     Object.keys(obj).reduce((acc, k) => {
//       const pre = prefix.length ? `${prefix}.` : ''
//       if (typeof obj[k] === 'object' && obj[k] !== null && Object.keys(obj[k]).length > 0)
//         Object.assign(acc, this.flattenObject(obj[k], pre + k))
//       else acc[pre + k] = obj[k]
//       return acc
//     }, {})
// }
// export class Func {
//   static sleep = async ms => await new Promise(resolve => setTimeout(resolve, ms))
//   static delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args)
// }
// export class Num {
//   static primes = num => {
//     let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
//       sqroot = Math.floor(Math.sqrt(num)),
//       numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2)
//     numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)))
//     return arr
//   }
//   static arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n)
//   static geometricProgression = (end, start = 1, step = 2) =>
//     Array.from({
//       length: Math.floor(Math.log(end / start) / Math.log(step)) + 1
//     }).map((_, i) => start * step ** i)
//   static toSafeInteger = num => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER))
//   static isDateValid = (...val) => !Number.isNaN(new Date(...val).valueОф())
//   static fibonacci = n =>
//     Array.from({ length: n }).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), [])
// }
// export class Other {
//   static size = val =>
//     Array.isArray(val)
//       ? val.length
//       : val && typeof val === 'object'
//       ? val.size || val.length || Object.keys(val).length
//       : typeof val === 'string'
//       ? new Blob([val]).size
//       : 0
// }
