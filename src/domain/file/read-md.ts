import _ from 'lodash'
import fs from 'fs'
import path from 'path'



export interface MdFile {
    name: string,
    contents: string
} 

export function readMd(filePath): MdFile | undefined {
    console.log(filePath)
    console.warn(fs.readdirSync("_notes/public/Knowledge/"))

    if(!fs.existsSync(filePath)){
        console.warn("fuck")
        return undefined;
    }

    return {
        contents: fs.readFileSync(filePath).toString(),
        name: "fuck you"
    }
}
