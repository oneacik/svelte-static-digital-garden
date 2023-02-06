// example: [[link]] -> [[(.*?)]]
export function createSimpleRegex(regex: string) {
    return RegExp(regex
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&') //ESCAPISM
        .replace(/[a-z]+/g, "(.*?)"),
    'g')
}
