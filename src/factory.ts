import path from 'path'
import _ from 'lodash'

import { readMd as _readMd } from './domain/file/read-md'
import { walk } from './domain/files/unist-file-walk'


const pathToNotes = "./_notes/"

const slugToPath = (filePath: string) => path.join(pathToNotes, filePath)

export const getFileTree = _.memoize(() => walk(pathToNotes))
export const readMd = (slug: string) => _readMd(slugToPath(slug))
