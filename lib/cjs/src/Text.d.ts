import { A, B, S } from './types';
export declare class Text {
    static isLength: (str: S) => B;
    static isIncludes: (str: S, findChars: A<S>) => B;
}
declare const _default: {
    isLength: (str: string) => boolean;
    isIncludes: (str: string, findChars: A<string>) => boolean;
};
export default _default;
