import { Injectable } from "@nestjs/common";

@Injectable()
export class RandomService {
  NAME   = 'RandomService';

  constructor() {}

  get value() {
    return Math.random();
  }
  get number() {
    return ~~(this.value * 1000);
  }
  get dateValue() {
    return Date.now() - ~~this.number;
  }
  get datestamp() {
    return new Date(this.dateValue).toISOString();
  }

  get test() {
    return 
    {
      RandomService: {
        value: this.value,
        number: this.number,
        dateValue: this.dateValue,
        datestamp: this.datestamp,
      },
    };
  }
}
