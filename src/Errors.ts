// import { FileSystem } from "./FileSystem"

// export default class Errors {

//   constructor(
//     private readonly LogFilePath: FileSystem.FolderAbsolutePath(__dirname)
//   )
// 	public static async SaveToFile(data: string): Promise<void> {
//     await FileSystem.CheckIsExist(this.LogFilePath)
//     await FileSystem.SaveToErrorLog
//   }
// 	public static Create(
// 		data: string | { message: string, data: any },
// 	): Promise<boolean> {
//     const info = data?.message?.length ? data.message : data

// 		const errMessage = `
// ---> New Error In Package...
// Error Data: ${}
//     `
// 	}
// 	public static Show(data: string): true {
// 		console.error('\nNew Error In Package!\n')

// 		console.error(data ?? 'Undefined Message')

// 		return true
// 	}
// }
