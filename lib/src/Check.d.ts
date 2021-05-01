export declare class Check {
    static number(data: number, ...rest: number[]): boolean;
    static array(data: any[], ...rest: any[]): boolean;
    static string(data: string, ...rest: string[]): boolean;
    static object(data: any, ...rest: any[]): boolean;
    static truthy(data: any, ...rest: any[]): boolean;
}
