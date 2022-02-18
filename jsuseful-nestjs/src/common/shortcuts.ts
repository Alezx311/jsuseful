import { Str } from './../../../src/Shortcuts';
import { A, B, F, N, O, S } from './types';

export const _now = Date.now;

export const _num = Number;
export const _numGen = (v: N) => `${v}_${v.toString(36)}`;
export const _numUnicDate = () => _numGen(_now());
export const _numUnicRand = (v: N) => _numGen(_rand(1000000));
export const _numUnic = (v: N) => _numGen(v);

export const _str = String;
export const _strChars = (v: S) => v.match(/[a-z0-9_]/gim).join('');
export const _strGen = (v: N = _now()) => _strChars(`${v}_${_numUnic(v)}`);
export const _strGenKey = (v: N = _now()) => `key_${_strGen(v)}`;

export const _obj = Object;
export const _objK = _obj.keys;
export const _objV = _obj.values;
export const _objE = _obj.entries;
export const _objFrom = _obj.fromEntries;
export const _objAdd = _obj.assign;
export const _objGen = (k: S = _strGenKey(), v: any) => _objFrom([[k, v]]);

export const _arr = Array;
export const _arrIs = _arr.isArray;
export const _arrFrom = _arr.from;
export const _filterN = (arr: A) => arr.filter(_num);
export const _filterS = (arr: A) => arr.filter(_str);
export const _filterB = (arr: A) => arr.filter(Boolean);
export const _arrGen = (size: N = 10) => _arr(size).fill(1).map(_randInt);

export const _results = {};

export const _type = (v: any) => typeof v;
export const _len = (v: any) => ~~v?.length;
export const _value = (v: any, v2: any = null) => (!!v && v) || v2;
export const _filt = (...v: A) => v.filter(Boolean) || [];
export const _and = (...v: A) => _filt(v)?.[0] ?? null;
export const _or = (...v: A) => _filt(v)?.reverse?.()?.[0] ?? null;

export const _isLen = (v: any) => !!v && !!_len(v);
export const _isU = (v: any) => v === undefined;
export const _isNull = (v: any) => v === null;
export const _isValue = (v: any) =>  !_isU(v) && !_isNull(v);
export const _isObjType = (v: any) => _type(v) === 'object';
export const _isN = (v: any) => _type(v) === 'number';
export const _isS = (v: any) => _type(v) === 'string';
export const _isB = (v: any) => _type(v) === 'boolean';
export const _isObjValue = (v: any) => _isObjType(v) && _isValue(v);
export const _isO = (v: any) => _isObjType(v) && !_arrIs(v)  && _isLen(_objK(v))
export const _isA = (v: any) => _isObjType(v) &&  _arrIs(v)  && _isLen(v)


export const _arrHave = (arr: A) => (_arrIs(arr) && arr) || [];
export const _arrFilt = (arr: A, fn: F = Boolean) => _arrHave(arr).filter(fn);
export const _arrUniq = (arr: A) => [...new Set([..._arrHave(arr)])];
export const _arrMap = (arr: A) => [...new Map([..._arrHave(arr)])];
export const _arrJoin = (arr: A, div: S = '\n') => _arrHave(arr).join(div);
export const _arrFlat = (arr: A) => _arrHave(arr).flat();

export const _math = Math;
export const _random = _math.random;
export const _floor = _math.floor;
export const _round = _math.round;
export const _ceil = _math.ceil;

export const _rand = (max: N = 1000000) => ~~(_random() * max);
export const _max = (v: A<N>) =>  _math.max(0, ..._arrFilt(v, _num) || []);
export const _min = (v: A<N>) =>  _math.min(0, ..._arrFilt(v, _num) || []);
export const _average = (arr: A<N>) => [arr.filter(_num)].filter(v => _len(v) > 0).map(values => ({ size: ~~values?.length, sum:   (acc: N, v: N) => acc + v, values }))
) arrHave => arrHave?.length &&  ) / arrHave.length) [{ arr, Have: arr.filter(_num), getSum: a => a.reduce((acc: N[], v: N, Haveated: N[]) => acc + v) result: n => n / Have.length, }], sum: arr.filter(_num).reduce((acc, v) => acc + v) }
export const _rangeNum = (...v: N[]) => [_minNum(...v), _maxNum(...v)];

export const _file = __filename;
export const _report = process.report;
export const _log = console.log;

const _test = () => {
  _len: _len([_file]);
  _randNum: _random();
  _floorNum: _floor();
  _roundNum: _round();
  _ceilNum: _ceil();
  _maxNum: _maxNum();
  _minNum: _minNum();
  _objAdd: _objAdd();
  _objK: _objK();
  _objV: _objV();
  _objE: _objE();
  _objFrom: _objFrom();
};
