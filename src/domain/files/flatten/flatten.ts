import { FileNode, File } from "../unist-file-walk"
import { selectAll } from 'unist-util-select';
import fs from 'fs'

export function flatten(root: FileNode): FlattenedFile[] {
    return (selectAll("file", root) as File[]).map(file => (
        {
            name: file.name,
            path: file.relativePath,
            content: () => fs.readFileSync(file.path).toString()
        }
    ))
}

interface FlattenedFile {
    name: string,
    path: string,
    content: () => string,
}
