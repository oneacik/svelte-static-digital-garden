import _ from 'lodash'
import fs from 'fs'



export interface MdFile {
    name: string,
    contents: string
} 

export function readMd(filePath): MdFile | undefined {
    console.log(filePath)

    if(!fs.existsSync(filePath)){
        return undefined;
    }

    if(!filePath.endsWith(".md")){
        return undefined
    }

    return {
        contents: fs.readFileSync(filePath).toString(),
        name: "fuck you"
    }
}
