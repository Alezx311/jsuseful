import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class LoggerService {
  NAME = 'LoggerService';

  METHODS = [
    'log',
    'error',
    'warn',
    'info',
    'debug',
    'count',
    'dir',
    'debug',
    'table',
    'error',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'group',
  ];

  getTestMethods = (msg = this.NAME) => {
    return this.METHODS.map((m) => {
      console[m](`Example of Console.${m}`);
      console[m](msg);
    });
  };

  get test() {
    this.getTestMethods('Test Message');

    return {
      LoggerService: {
        METHODS: this.METHODS,
      },
    };
  }
}
