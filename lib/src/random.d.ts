import { tTypeOf } from './constants';
import { A, B, DeepA, Entry, N, O, S, Value } from './types';
export declare const RANDOM_ARRAY_SIZE = 10;
export declare const RANDOM_MIN = 0;
export declare const RANDOM_MAX = 1000000;
export declare const RANDOM_CONSTANTS_SOURCES: {
    desc: string;
    value: number;
}[];
export declare const RANDOM_NUM: number;
export declare const RANDOM_BOOL: boolean;
export declare const RANDOM_INT: number;
export declare const RANDOM_STR: string;
export declare const RANDOM_SRC: {
    desc: string;
    value: number;
};
export declare const RANDOM_ARR: (string | number | boolean | {
    desc: string;
    value: number;
})[];
export declare const RANDOM_OBJ: {
    NUM: number;
    BOOL: boolean;
    INT: number;
    STR: string;
    ARR: (string | number | boolean | {
        desc: string;
        value: number;
    })[];
    SRC: {
        desc: string;
        value: number;
    };
};
export declare const RANDOM_TEXT: string;
export declare const RANDOM_VALUES_SOURCES: ({
    desc: string;
    value: number;
} | {
    desc: string;
    value: boolean;
} | {
    desc: string;
    value: string;
} | {
    desc: string;
    value: {
        desc: string;
        value: number;
    };
} | {
    desc: string;
    value: (string | number | boolean | {
        desc: string;
        value: number;
    })[];
} | {
    desc: string;
    value: {
        NUM: number;
        BOOL: boolean;
        INT: number;
        STR: string;
        ARR: (string | number | boolean | {
            desc: string;
            value: number;
        })[];
        SRC: {
            desc: string;
            value: number;
        };
    };
})[];
export declare const random: () => number;
export declare const randomBool: (chance?: N) => boolean;
export declare const randomNum: (max?: N, min?: N) => number;
export declare const randomInt: (max?: N, min?: N) => number;
export declare const randomCoin: (value1?: any, value2?: any) => any;
export declare const randomStr: (input?: N) => string;
export declare const randomArr: (size?: N, value?: any) => any[];
export declare const randomMany: (size?: N, value?: any) => any[];
export declare const randomIndex: (input?: A | S) => number;
export declare const randomElement: (input?: A | S) => any;
export declare const randomSort: (input?: A<any>) => A<any>;
export declare const randomShuffle: (input?: A<any>) => any[];
export declare const randomSource: (input?: any) => {
    value: string;
    input: any;
    desc: string;
};
export declare const randomObject: (size?: N, input?: any) => {
    [k: string]: string;
};
export declare const randomKey: (value?: O) => any;
export declare const randomValue: (value?: O) => any;
export declare const randomEntry: (value?: O) => any;
export declare const RANDOM_EXAMPLES_SOURCES: ({
    desc: string;
    value: boolean;
    func: (chance?: N) => boolean;
} | {
    desc: string;
    value: number;
    func: (max?: N, min?: N) => number;
} | {
    desc: string;
    value: any;
    func: (value1?: any, value2?: any) => any;
} | {
    desc: string;
    value: string;
    func: (input?: N) => string;
} | {
    desc: string;
    value: any[];
    func: (size?: N, value?: any) => any[];
} | {
    desc: string;
    value: any;
    func: (input?: A | S) => any;
} | {
    desc: string;
    value: A<any>;
    func: (input?: A<any>) => A<any>;
} | {
    desc: string;
    value: {
        [k: string]: string;
    };
    func: (size?: N, input?: any) => {
        [k: string]: string;
    };
})[];
export declare const genArr: (n: N, v?: any) => any[];
export declare const genNums: (n: N) => any[];
export declare const genSources: (n: N) => {
    desc: string;
    value: number;
    index: number;
}[];
export declare const randomTypeOf: () => any;
export declare const randomSourceByType: (type?: tTypeOf) => {
    desc: string;
    value: string | number | boolean | symbol | {
        [k: string]: string;
    } | (() => number) | undefined;
    type: string | undefined;
};
export declare const randomMusicNoteChar: () => any;
export declare const randomMusicNoteBemole: () => any;
export declare const randomMusicNoteSharp: () => any;
export declare const randomMusicScale: () => any;
export declare const randomMusicDurationChar: () => any;
export declare const randomMusicIntervalChar: () => any;
export declare const randomMusicOctave: () => number;
export declare const randomMusicMidiIndex: () => number;
export declare const randomMusicValues: () => {
    noteChar: any;
    noteBemole: any;
    noteSharp: any;
    scale: any;
    durationChar: any;
    intervalChar: any;
    octave: number;
    midiIndex: number;
};
export declare const randomColorClassname: () => any;
export declare const randomColorName: () => any;
export declare const randomColorCode: () => any;
export declare const randomColorValues: () => {
    className: any;
    name: any;
    code: any;
};
export declare const float: (min: number | undefined, max: number | undefined, fixedSize: N) => N;
export declare const number: (min?: N, max?: N) => N;
export declare const powerOfTwo: (min?: N, max?: N) => N;
export declare const numbersDeep: (len?: N, maxDeep?: N) => DeepA<N>;
export declare const values: (arr: A<any>) => A<any>;
export declare const boolean: (chance?: N) => B;
export declare const array: (size?: N, cb?: any) => any[];
export declare const numbers: (size?: N, min?: N, max?: N) => number[];
export declare const arrays: (size?: N, maxDeep?: N) => DeepA<N>;
export declare const arrayGrow: (arr: A<any>, growSize?: N) => A<any>;
export declare const arraySequence: (start?: N, end?: N) => A<any>;
export declare const arrayChange: (size: number | undefined, arr: A<any>) => A<any>;
export declare const arrayMerge: (...arr: A<any>) => A<any>;
export declare const arrayDouble: (arr: A<any>) => A<any>;
export declare const arrayRepeats: (arr: A<any>, repeats?: N) => A<any>;
export declare const arrayIndex: (arr: A<any>) => N;
export declare const arrayElement: (arr: A<any>) => O;
export declare const arrayElements: (arr: A<any>, size?: N) => A<any>;
export declare const arrayUnicals: (arr: A<any>) => A<any>;
export declare const arrayShuffle: (arr: A<any>) => A<any>;
export declare const arrayPart: (arr: A<any>) => A<any>;
export declare const arrayDeepSomeValues: (arr: A<any>, chance?: N) => DeepA<A>;
export declare const joinedStrings: (parts: S[], size?: N) => S;
export declare const objectKey: (obj?: O) => S;
export declare const objectValue: (obj?: O) => Value;
export declare const objectEntry: (obj?: O) => Entry;
