import { readMd } from '../../../factory'
import { getFileTree } from '../../../factory'
import { transformMd } from "../../../domain/md/md-transformer"
import { createPathResolverFromFlattenedFiles } from "../../../domain/md/transformers/obsidian"
import { flatten } from "../../../domain/files/flatten/flatten"

export interface MdFile {
    name: string,
    contents: string
}

export function load({ params }): MdFile | undefined {
    const fileTree = getFileTree()
    const flattened = flatten(fileTree)

    const pathResolver = createPathResolverFromFlattenedFiles("/garden/", flattened, (fileName, name) => fileName.toLowerCase() == `${name.toLowerCase()}.md`)
    const mdFile: MdFile = readMd(params.file)
    const contents: string = mdFile.contents
    const transformedContents = transformMd(contents, pathResolver)

    console.log(transformedContents)

    return {
        name: mdFile.name,
        contents: transformedContents

    }
}

export const prerender = 'true';
export const csr = false;
