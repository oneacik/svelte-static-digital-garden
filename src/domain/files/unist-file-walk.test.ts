import { select } from 'unist-util-select';
import { u } from 'unist-builder';
import { describe, it, expect, beforeEach } from 'vitest';
import { walk } from './unist-file-walk'

describe("when walk tree", () => {
    let tree

    beforeEach(() => {
        tree = walk("./src/")
    })

    it("then this test can be found in domain", () => {
        const tree = u('blockquote', [
            u('paragraph', [u('text', 'Alpha')]),
            u('paragraph', [u('text', 'Bravo')]),
            u('code', 'Charlie'),
            u('paragraph', [u('text', 'Delta')]),
            u('paragraph', [u('text', 'Echo')]),
            u('paragraph', [u('text', 'Foxtrot')]),
            u('paragraph', [u('text', 'Golf')])
        ])

        console.info(JSON.stringify(tree, undefined, 4))
        let selected = select("directory[name=domain] file[name=unist-file-walk.ts]", tree)
        expect(selected).not.toBeNull()
    })
})
