export declare type B = boolean;
export declare type S = string;
export declare type N = number;
export declare type O = any;
export declare type A<T = any> = Array<T>;
export declare type DeepA<T> = A<T | A<T>>;
export declare type V = void;
export declare type U = undefined;
export declare type DateStr = Date | S;
export declare type E = Error | {
    message?: S;
};
export declare type P<T = void> = Promise<T>;
export declare type Value = S | N | B;
export declare type Data = Value | A | O;
export declare type Entry = Record<S, unknown>;
export declare type R = RegExp;
