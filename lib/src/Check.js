export class Check {
    static number(data, ...rest) {
        return [data, ...rest].every((v) => typeof v === 'number');
    }
    static array(data, ...rest) {
        return [data, ...rest].every((v) => !!v);
    }
    static string(data, ...rest) {
        return [data, ...rest].every((v) => typeof v === 'string');
    }
    static object(data, ...rest) {
        return [data, ...rest].every((v) => !!Object.assign({}, v));
    }
    static truthy(data, ...rest) {
        return [data, ...rest].every((v) => !!v);
    }
}
