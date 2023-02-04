import { Parent, Node } from "unist";
import fs from "fs"
import path from "path"


export function walk(dir: string): Directory {
    return { type: "directory", children: _walk(dir), name: dir }
}

function _walk(dir: string): FileNode[] {
    const nodes = fs.readdirSync(dir)
    return nodes.map(nodeName => {
        const nodePath = path.join(dir, nodeName)
        const type = fs.lstatSync(nodePath)

        if (type.isDirectory()) return { type: "directory", name: nodeName, children: _walk(nodePath) }
        if (type.isFile()) return { type: "file", name: nodeName, path: nodePath }
        return undefined
    }).filter(x => x != undefined) as FileNode[]

}

export type FileNode = File | Directory

export interface Directory extends Parent<Directory | File, {}> {
    type: "directory",
    name: string
}

export interface File extends Node<{ name: string, path: string }> {
    type: "file",
    name: string,
    path: string
}
