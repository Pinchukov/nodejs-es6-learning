import path from 'path'
import { fileURLToPath } from 'url'

// export function getDirName(moduleUrl) {
// 	const filename = fileURLToPath(moduleUrl)
// 	return path.dirname(filename)
// }

const filename = fileURLToPath('file:///home/ps/Desktop/node-project-today/')
export const createPath = (page) => path.resolve(filename, 'views', `${page}.ejs`);