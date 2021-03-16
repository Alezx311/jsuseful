export class Check {
  static number(data: number, ...rest: number[]): boolean {
    return [data, ...rest].every((v: any): boolean => typeof v === 'number')
  }

  static array(data: any[], ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!v)
  }

  static string(data: string, ...rest: string[]): boolean {
    return [data, ...rest].every((v: any): boolean => typeof v === 'string')
  }

  static object(data: any, ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!Object.assign({}, v))
  }

  static truthy(data: any, ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!v)
  }
}
