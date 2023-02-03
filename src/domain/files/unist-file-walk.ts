import { Parent, Node } from "unist";
import fs from "fs"
import path from "path"


export function walk(dir: string): Directory {
    return { type: "directory", children: _walk(dir), data: { name: dir } }
}

function _walk(dir: string): FileNode[] {
    const nodes = fs.readdirSync(dir)
    return nodes.map(nodeName => {
        const nodePath = path.join(dir, nodeName)
        const type = fs.lstatSync(nodePath)

        if (type.isDirectory()) return { type: "directory", data: { name: nodeName }, children: _walk(nodePath) }
        if (type.isFile()) return { type: "file", data: { name: nodeName } }
        return undefined
    }).filter(x => x != undefined) as FileNode[]

}

export type FileNode = File | Directory

export interface Directory extends Parent<Directory | File, { name: string }> {
    type: "directory"
}

export interface File extends Node<{ name: string }> {
    type: "file"
}
