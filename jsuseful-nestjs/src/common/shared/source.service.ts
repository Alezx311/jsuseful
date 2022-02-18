import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class SourceService {
  NAME = 'N/A';

  _FILE = __filename;
  _NAME = 'SourceService';

  get FILE() {
    return __filename;
  }

  CONTENT = (filePath = __filename) => {
    const content = readFileSync(filePath).toString();
    return { filePath, content };
  };

  DESC = `---> Description <---
Name: ${this.NAME}
File: ${this.FILE}
  `;

  getReport = () => process.report.getReport();
  getSource = (desc = this.DESC) => `${this.FILE} -> ${desc}`;
  getTrace = (desc = this.DESC) => `---> Trace <---${desc} -> ${new Error().stack}`;
  getDesc = (desc = 'N/A') => `${this.DESC}
  Report: ${this.getReport()}
 Source: ${this.getSource(desc)}
 Trace: ${this.getTrace(desc)}
 `;

  get CURRENT() {
    return {
      Report: this.getReport(),
      Source: this.getSource(),
      Trace: this.getTrace(),
      Desc: this.getDesc(),
    };
  }

  DEFAULT = {
    FILE: this._FILE,
    NAME: this._NAME,
    ...this.CURRENT,
  };

  get test() {
    return {
      SourceService: {
        DEFAULT: this.DEFAULT,
        CURRENT: this.CURRENT,
      },
    };
  }
}
