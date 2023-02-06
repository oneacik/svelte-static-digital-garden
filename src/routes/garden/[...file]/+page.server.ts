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
    try {
        const fileTree = getFileTree()
        const flattened = flatten(fileTree)

        const pathResolver = createPathResolverFromFlattenedFiles("/garden/", flattened, (fileName, name) => fileName.toLowerCase() == `${name.toLowerCase()}.md`)
        const mdFile: MdFile | undefined = readMd(params.file)

        if (!mdFile) {
            console.error(`no file for: ${params.file}`)
            return undefined;
        }

        const contents: string = mdFile.contents
        const transformedContents = transformMd(contents, pathResolver)

        return {
            name: mdFile.name,
            contents: transformedContents
        }
    } catch (e) {
        console.error(`failed to generate page for slug ${params.file}`)
        return undefined;
    }
}

export const prerender = 'true';
export const csr = false;
