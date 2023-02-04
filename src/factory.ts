import path from 'path'

import { readMd as _readMd} from './domain/file/read-md'

const pathToNotes = "./_notes/"

const slugToPath = (filePath: string) => path.join(pathToNotes, filePath)

export const getFileTree = () => {}
export const readMd = (slug: string) => _readMd(slugToPath(slug))
