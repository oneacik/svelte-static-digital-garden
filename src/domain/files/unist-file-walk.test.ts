import { select } from 'unist-util-select';
import { describe, it, expect, beforeEach } from 'vitest';
import { walk } from './unist-file-walk'


describe("when walk tree", () => {
    let tree

    beforeEach(() => {
        tree = walk("./src/")
    })
    
    it("then this test can be found in domain", ()=>{
        let selected = select("directory[name=domain] file[name=unist-file-walk.ts]", tree)
        expect(selected).not.toBeNull()
    })
})
