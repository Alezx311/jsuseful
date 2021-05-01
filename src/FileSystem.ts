import fs, { promises as fsPromise } from 'fs'
import * as path from 'path'

export type FileExtension = 'txt' | 'json'


export class FileSystem {
	public static IsExists(file: string): Promise<boolean> {
		const accessCheck = await fsPromise.access(file)

		
		return !!accessCheck
	}
	public static readonly PathJoined(p: string = './'): Promise<path.ParsedPath> {
	public static readonly PathResolved(dir: string = './'): Promise<path.ParsedPath> {
		return path.resolve(process.cwd(), dir)
	}
	async public static readonly FolderPath
	async public static readonly createFileTitle
	async public static readonly extName
	async public static readonly resolvedPath
	async public static readonly read
	async public static readonly check
	async public static readonly write
	async public static readonly append
	async public static readonly create
	async public static readonly readJson
	async public static readonly writeJson
}
	port class FileSystem {

	public static Touch(filePath: string): Promise<boolean> {
		if(!filePath) {
			this.logger.error(`Invalid filepath to create new file!`)
			return false
		} else {
			await FileSystem.)
		}
	}
	public static readonly CreateFileTitle = `Created at ${new Date()}`

	public static GetFileExtension(file: string): string {
		return path.extname(file)
	}

	public static resolvedPath(p: string, rootDir = __dirname): string {
		return path.resolve(rootDir, p)
	}

	public static async read(file: string): Promise<string> {
		const resolvedPath = FileSystem.resolvedPath(file)

		return await fsPromise.readFile(resolvedPath, { encoding: 'utf8' })
	}

	public static async check(file: string): Promise<boolean> {
		const resolvedPath = FileSystem.resolvedPath(file)
		const parentDir = path.dirname(resolvedPath)
		const content = await fsPromise.readdir(parentDir)

		return content.includes(file)
	}

	public static async write(file: string, data: string): Promise<void> {
		const resolvedPath = FileSystem.resolvedPath(file)

		return await fsPromise.writeFile(resolvedPath, data, 'utf8')
	}

	public static async append(file: string, data: string): Promise<void> {
		const resolvedPath = FileSystem.resolvedPath(file)

		return await fsPromise.appendFile(resolvedPath, data, 'utf8')
	}

	public static async create(file: string, data = this.CreateFileTitle): Promise<void> {
		return await this.write(file, data)
	}

	public static async readJson(file: string): Promise<any> {
		const data = await this.read(file)

		return JSON.parse(data)
	}

	public static async writeJson(file: string, data: any): Promise<void> {
		const json = JSON.stringify(data, null, '\t')

		return await this.write(file, json)
	}
}

export const methodsList = [
	'extName',
	'resolvedPath',
	'read',
	'check',
	'write',
	'append',
	'create',
	'readJson',
	'writeJson',
]
