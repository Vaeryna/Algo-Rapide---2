import {describe, expect, it} from "vitest";
import {UpperLetterName} from "../upperLetterName.js"

describe("returns string with salutation and name with first letter in upper case", () => {
    it("The name has space in the name", () => {
        expect(UpperLetterName("jean pierre")).toBe("Bonjour Jean Pierre");
    });

    it("The name has dash in the name", () => {
        expect(UpperLetterName("jean-pierre")).toBe("Bonjour Jean-Pierre");
    });

    it("The name is initials", () => {
        expect(UpperLetterName("j.c")).toBe("Bonjour J.C")
    })

    it("The name is simple name", () => {
        expect(UpperLetterName("christelle")).toBe("Bonjour Christelle");
    })

    it("The name has upper case in the middle", () => {
        expect(UpperLetterName("jeAn maRie Paule")).toBe("Bonjour Jean Marie Paule");
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => UpperLetterName(42)).toThrow("Value must be a string");
    });
});

