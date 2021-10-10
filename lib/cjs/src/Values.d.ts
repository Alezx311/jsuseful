import { B, N, S } from './types';
export declare class Values {
    static DateNow(): N;
    static DateValue(): Date;
    static DateStamp(): S;
    static TimeStamp(): S;
    static TimeDifference(time: N): N;
    static CalcExp(exp: S): N | B;
}
declare const _default: {
    DateNow: typeof Values.DateNow;
    DateValue: typeof Values.DateValue;
    DateStamp: typeof Values.DateStamp;
    TimeStamp: typeof Values.TimeStamp;
    TimeDifference: typeof Values.TimeDifference;
    CalcExp: typeof Values.CalcExp;
};
export default _default;
