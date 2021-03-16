export declare class Random {
    static range(min?: number, max?: number, size?: number): number | boolean;
    static number(min?: number, max?: number): number | boolean;
    static powerOfTwo(min?: number, max?: number): number | boolean;
    static boolean(chance?: number): boolean;
    static array(size?: number, value?: () => number | boolean): any[] | boolean;
    static numbers(min?: number, max?: number, size?: number): number[] | boolean;
    static arrayIndex(array: any[]): any;
    static arrayElement(array: any[]): any | boolean;
    static arrayValues(array: any[], size?: number): any[] | boolean;
    static arrayUnicals(array: any[]): any[] | boolean;
    static arrayShuffle(array: any[]): any[] | boolean;
    static objectKey(obj: object): string | boolean;
    static objectValue(obj: object): any | boolean;
    static objectEntry(obj: object): [string, any] | boolean;
}
