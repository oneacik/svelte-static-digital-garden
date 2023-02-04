import { flatten } from './flatten';
import { select } from 'unist-util-select';
import { describe, it, expect, beforeEach } from 'vitest';
import { walk } from '../unist-file-walk'


describe("given test _notes tree", () => {
    let tree

    beforeEach(() => {
        tree = walk("./tests/_notes/")
    })
    
    it("when flattened then not cringe", ()=>{
        const flattenedFiles = flatten(tree)

        expect(flattenedFiles).toMatchObject([
            { name: "a.md", path: "a.md" },
            { name: "b.md", path: "b.md" },
            { name: "c.md", path: "folder/c.md" },
        ])
    })
})
