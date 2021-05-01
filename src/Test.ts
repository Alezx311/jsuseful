import fs, { promises as fsPromise } from 'fs'
import * as path from 'path'


export class Files {
	constructor(
		private readonly dirPath = __dirname,
		private readonly logsErrorsFile = path.resolve(__dirname, 'Errors.txt'),
		private readonly logsDebugFile = path.resolve(__dirname, 'Debug.txt'),
		private readonly logsInfoFile = path.resolve(__dirname, 'Info.txt'),
		private readonly logsDataFile = path.resolve(__dirname, 'Data.txt'),
		private readonly newFileTitle = `---> New file created at: ${new Date()} <---`,
	) {}

	public static PathJoined(): string {
		return path.join(process.cwd(), './')
	}
	public static PathResolved(): string {
		return path.resolve(process.cwd(), './')
	}

	public static Create(file: string): Promise<boolean> {
		return fsPromise.writeFile(file, this.fileTitle)
	}
	public static CheckIsExist(file: string): boolean {
		if (!file?.length) {
			return false
		}

		return fs.existsSync(file)
	}
	public static async CheckAccess(file: string): Promise<boolean> {
		if (!Files.CheckIsExist(file)) {
			await Files.Create(file)
		}
		return await fsPromise.access(file)
	}
	public static SaveToFile(
		data: string,
		file: string = this.logsFile,
	): Promise<void> {}
}
const file = './invalidFile.file'
const logsfile = './logs.txt'
const file = './Text.ts'
