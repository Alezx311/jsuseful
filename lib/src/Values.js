import { Check } from './Check';
export class Values {
    static timeValue() {
        return Date.now();
    }
    static timeStamp() {
        return new Date(Date.now()).toLocaleTimeString();
    }
    static dateStamp() {
        return new Date(Date.now()).toISOString();
    }
    static timeDifference(time_stamp) {
        return Check.number(time_stamp) && Date.now() - time_stamp;
    }
    static calcExp(exp) {
        const calc = new Function('', `return ${exp}`);
        const result = calc();
        return Check.number(result) && result;
    }
}
