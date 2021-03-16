export class Check {
  //* Very simple validate of number arguments
  static number(data: number, ...rest: number[]): boolean {
    return [data, ...rest].every((v: any): boolean => typeof v === 'number')
  }

  //* Very simple validate of array arguments
  static array(data: any[], ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!v)
  }

  //* Very simple validate of string arguments
  static string(data: string, ...rest: string[]): boolean {
    return [data, ...rest].every((v: any): boolean => typeof v === 'string')
  }

  //* Very simple validate of object arguments
  static object(data: any, ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!Object.assign({}, v))
  }

  //* Very simple validate of truthy arguments
  static truthy(data: any, ...rest: any[]): boolean {
    return [data, ...rest].every((v: any): boolean => !!v)
  }
}
