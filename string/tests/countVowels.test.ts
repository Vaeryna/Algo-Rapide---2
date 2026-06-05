import {describe, expect, it} from "vitest";
import {countVowels} from "../countVowels.js";

describe("returns vowels number in a string", () => {
    it("The string has vowels", () => {
        expect(countVowels("Le petit poney est dans la boue")).toBe(12);
    });

    it("The string has accents vowels", () => {
        expect(countVowels("Le petit poney est tombé dans la boue")).toBe(14);
    });

    it("The string has upper case vowels", () => {
        expect(countVowels("Il y a un poney")).toBe(7)
    })


    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => countVowels(42)).toThrow("Value must be a string");
    });
});

