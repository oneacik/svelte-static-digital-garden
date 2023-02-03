import { Parent, Node } from "unist";
import fs from "fs"
import path from "path"


export function walk(dir: string): Directory {
    return { type: "directory", children: _walk(dir) }
}

function _walk(dir: string): FileNode[] {
    const nodes = fs.readdirSync(dir)
    return nodes.map(nodeName => {
        const nodePath = path.join(dir, nodeName)
        const type = fs.lstatSync(nodePath)

        if (type.isDirectory()) return { type: "directory", name: nodeName, children: _walk(nodePath) }
        if (type.isFile()) return { type: "file", name: nodeName }
        throw new Error(`${nodePath}: Not a file nor directory`)
    })

}

type FileNode = File | Directory

interface Directory extends Parent<Directory | File, { type: "directory", name: string }> {
}

interface File extends Node<{ type: "file", name: string }> {
}
