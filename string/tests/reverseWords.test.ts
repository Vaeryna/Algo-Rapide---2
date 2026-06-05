import {describe, expect, it} from "vitest";
import {reverseWords} from "../reverseWords.js";


describe("returns string with words in the reverse order", () => {
    it("medium size sentence", () => {
        expect(reverseWords("Je mange une pomme")).toBe("pomme une mange Je");
    });

    it("one word sentence", () => {
        expect(reverseWords("bonjour")).toBe("bonjour");
    });

    it("empty string", () => {
        expect(reverseWords("")).toBe("")
    })

    it("many spaces", () => {
        expect(reverseWords("je   mange   une   pomme")).toBe("pomme une mange je");
    })

    it("the sentence has punctuation", () => {
        expect(reverseWords("je mange une pomme !")).toBe("! pomme une mange je");
    })
it("the sentence has numbers", () => {
        expect(reverseWords("je mange 42 pomme !")).toBe("! pomme 42 mange je");
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => reverseWords(42)).toThrow("Value must be a string");
    });
});

