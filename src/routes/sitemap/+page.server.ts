import { walk, FileNode } from '../../domain/files/unist-file-walk'
import { filterMd } from '../../domain/files/filter/filter-md'
import _ from 'lodash'

export function load(): FileNode {
    const files = walk("./_notes")
    const notes = filterMd(files)
    return notes
}


export const prerender = 'auto';
