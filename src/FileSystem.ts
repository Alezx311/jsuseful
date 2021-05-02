import fs, { promises as fsPromise } from 'fs'
import * as path from 'path'

export type FileExtension = 'txt' | 'json'

export class FileSystem {
	// public static async IsExists
	// public static async FolderPath
	// public static async CreateFileTitle
	// public static async ExtName
	// public static async ResolvedPath
	// public static async Read
	// public static async Check
	// public static async Write
	// public static async Append
	// public static async Create
	// public static async ReadJson
	// public static async WriteJson

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

	public static async create(file: string, data: string = ''): Promise<void> {
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
