import { Injectable } from '@nestjs/common';
import { format, inspect } from 'util';
import { N, O, S } from '../types';

@Injectable()
export class HelpersService {
  NAME = 'HelpersService';
  SOURCE = `${__filename} -> ${this.NAME}`;
  DIVIDER = '-'.repeat(10);
  VALUES_TEST = () => ({
    NAME: this.NAME,
    SOURCE: this.SOURCE,
    DIVIDER: this.DIVIDER,
  });

  textFirstRow = (msg: S = '') => msg.match(/^.+\n/i).join('');
  textDivider = (msg: S = '') => `\n${this.DIVIDER}\n${msg}\n${this.DIVIDER}\n`;
  textTitle = (msg: S = '') => this.textDivider(`\n---> ${msg.trim()} <---\n`);
  textMessage = (msg: S, opt?: { title?: S }) =>
    [this.textTitle(opt?.title ?? this.SOURCE), ...msg]
      .filter(Boolean)
      .map((v) => this.textDivider(v))
      .join('');

  textTest = (msg: S = this.SOURCE) => ({
    msg,
    textFirstRow: this.textFirstRow(msg),
    textTitle: this.textTitle(msg),
    textDivider: this.textDivider(msg),
    textMessage: this.textMessage(msg, { title: 'Test' }),
  });

  timeNow = () => Date.now();
  timeInst = (v?: N) => new Date(v);
  timeStamp = (v?: N) => new Date(v).toISOString();

  timeTest = () => ({
    TIME_NOW: this.timeNow(),
    TIME_INSTANCE: this.timeInst(),
    TIME_STAMP: this.timeStamp(),
    timeNow: this.timeNow(),
    timeInst: this.timeInst(),
    timeStamp: this.timeStamp(),
  });

  jsonStat = (value = 'N/A') => _objAdd({}, { typeOf: typeof value });
  jsonObj = (value = 'N/A') => _objAdd({}, { value });
  jsonStr = <T1 extends O>(obj: T1) => JSON.stringify(obj, null, 2);
  jsonInspect = <T1 extends O>(obj: T1) => inspect(obj);
  jsonFormat = <T1 extends O>(obj: T1) => format(obj);
  jsonText = <T1 extends O>(obj: T1) => ({ ...obj, text: this.jsonStr(obj) });
  jsonDetails = <T1 extends O>(obj: T1) => ({
    text: this.jsonStr(obj),
    inspect: this.jsonInspect(obj),
    format: this.jsonFormat(obj),
  });

  JSON = { SOURCE: this.SOURCE };

  JSON_STAT = this.jsonStat(this.JSON);
  JSON_OBJ = this.jsonObj(this.JSON);
  JSON_STR = this.jsonStr(this.JSON);
  JSON_INSPECT = this.jsonInspect(this.JSON);
  JSON_FORMAT = this.jsonFormat(this.JSON);
  JSON_TEXT = this.jsonText(this.JSON);
  JSON_DETAILS = this.jsonDetails(this.JSON);
  jsonTest = (value: O) => ({
    jsonObj: this.jsonObj(),
    jsonStr: this.jsonStr(value),
    jsonInspect: this.jsonInspect(value),
    jsonFormat: this.jsonFormat(value),
    jsonText: this.jsonText(value),
    jsonDetails: this.jsonDetails(value),
  });

  get test() {
    return {
      HelpersService: {
        values: this.VALUES_TEST(),
        text: this.textTest(this.SOURCE),
        time: this.timeTest(),
        json: this.jsonTest({ desc: this.SOURCE }),
      },
    };
  }
}
