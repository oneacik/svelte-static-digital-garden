import {walk, FileNode} from '../../domain/files/unist-file-walk'

export function load(): FileNode{
    return walk("./")
}
