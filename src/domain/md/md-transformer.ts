import { transformObsidian, PathResolver } from "./transformers/obsidian"
import _ from "lodash"

export function transformMd(mdContents: string, pathResolver: PathResolver): string {
    return _.chain(mdContents)
        .thru(contents => transformObsidian(contents, pathResolver))
        .value()
}
