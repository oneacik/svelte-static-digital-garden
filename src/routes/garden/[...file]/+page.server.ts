import { readMd } from '../../../factory'

export interface MdFile {
    name: string,
    contents: string
} 

export function load({params}): MdFile | undefined {
    return readMd(params.file) 
}
