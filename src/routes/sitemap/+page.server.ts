import { walk, FileNode } from '../../domain/files/unist-file-walk'
import { filterMd } from '../../domain/files/filter/filter-md'
import {getFileTree} from '../../factory'

import _ from 'lodash'


export function load(): FileNode {
    const files = getFileTree()
    const notes = filterMd(files)
    return notes
}


export const prerender = 'auto';
