import _ from 'lodash'
import { FlattenedFile } from "../../files/flatten/flatten"
import { createSimpleRegex } from "../utils/regex"
import path from 'path'

export const transformObsidian = (contents: string, pathResolver: PathResolver): string =>
    _.chain(contents)
        .thru(unrollFuckingAnchorBrackets)
        .thru(contents => unrollThoseFuckingNamedBrackets(contents, pathResolver))
        .thru(contents => unrollThoseFuckingBrackets(contents, pathResolver))
        .value()



// [[XX]] -> [XX](XX)
const unrollThoseFuckingBrackets = (contents: string, pathResolver: PathResolver) =>
    contents.replace(createSimpleRegex("[[link]]"), (_, link) =>
        `[${link}](${encodeURI(pathResolver(link))})`
    )

// [[XX|YY]] -> [YY](XX)
const unrollThoseFuckingNamedBrackets = (contents: string, pathResolver: PathResolver) =>
    contents.replace(createSimpleRegex("[[link|title]]"), (_, link, title) =>
        `[${title}](${encodeURI(pathResolver(link))})`
    )

const unrollFuckingAnchorBrackets =  (contents: string) =>
    contents.replace(createSimpleRegex("[[#anchor]]"), (_, anchor) =>
        `[${anchor}](#${anchor})`
    )

export type PathResolver = (name: string) => string
export function createPathResolverFromFlattenedFiles(prefix: string, files: FlattenedFile[], nameMatcher: (fileName: string, name: string) => boolean): PathResolver {
    return (name: string) => {
        const filePath = files.find(file => nameMatcher(file.name, name))?.path
        if (!filePath) {
            console.error(files)
            throw Error(`Can't find shit: ${name}`)
        }
        return path.join(prefix, filePath)
    }
}
