import { wrap } from "lodash"
import { expect, it } from "vitest"
import  { createSimpleRegex } from "./regex"

it("simpleRegex matches properly", () => { 
    const regex = createSimpleRegex("[[name|link]]")

    const matches = regex.exec("[[mama|http://onet.pl]]")

    expect(matches).containSubset(["[[mama|http://onet.pl]]", "mama" , "http://onet.pl"])
})
