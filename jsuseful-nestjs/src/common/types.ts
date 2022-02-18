export type S = string;
export type N = number;
export type B = boolean;
export type A<T1 = any> = Array<T1> & T1[];
export type O<T1 = unknown> = Record<S, T1>;
export type F<T1 = any> = () => T1;
export type ElementOfArr<T1 extends any[]> = T1[N];
export type ElementOfObj<T1 extends O> = T1[keyof T1];

export type tNoteCharBasic = 'A' | 'B' | 'C' | 'D' | 'F' | 'E' | 'G';
export type tNoteChar = tNoteCharBasic | (tNoteCharBasic & ('b' | '#'));
