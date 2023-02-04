import { File, Directory } from '../unist-file-walk'
import {filter} from 'unist-util-filter'

export function filterMd(files: Directory): Directory {
    return filter(files, node => node.type === "directory" || (node.type === "file" && (node as File).name.endsWith(".md")))
}
