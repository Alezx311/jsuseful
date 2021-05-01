import { LogData } from './types'

export
export function ArrayToMessage(arr: any[]): string {
  const str = arr?.reduce((a, v, i) => `${a}\n${typeof v === 'string' ? v : CuteMessage(v)}`, '')
  return StringToCuteMessage(str)
}
export function ObjectToMessage(data: any): string {
  const str = JSON.stringify(data, null, '\t')
  return StringToCuteMessage(str)
}
export function StringToCuteMessage(data: string): string {
  const cuteMessage = data?.trim()

  return `${cuteMessage}`
}
  if(data?.trim?.length > 0) {
    return data
  } else if ([...data]) {
  }
  } else if ({...data}) {
    console.
  }
}
export default class Logger {
  public static Cute(data: LogData, logType: LogType): Promise<void> {
  public static Console(data: LogData, logType: LogType): Promise<void> {
    try {
      const message = this.Cute(data)
      
      console?.[logType](message)

      return true
    } catch (e) {
      if()
    }
  }
  public static Show(data: LogData, logType: LogType): Promise<void> {
    if(typeof data !== 'string') {
      return console.log
    } 
  }
}