import {describe, expect, it} from "vitest";
import {longestSequence} from "../longestSequence";

describe("returns the longest repeated sequence", () => {
    it("longest sequence", () => {
        expect(longestSequence("aaabbbbbcccc")).toBe("bbbbb");
    });

    it("returns the sequence at the end if it is the longest", () => {
        expect(longestSequence("aaabbbcccccc")).toBe("cccccc");
    });

    it("returns the first sequence when there is a tie", () => {
        expect(longestSequence("aaabbbcc")).toBe("aaa")
    })

    it("returns the first character when there are no repetitions", () => {
        expect(longestSequence("abcdef")).toBe("a");
    })

    it("returns an empty string for an empty input", () => {
        expect(longestSequence("")).toBe("");
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => longestSequence(42)).toThrow("Input must be a string");
    });
});

