import {describe, expect, it} from "vitest";
import {exclamationMark} from "../exclamationMark.js";

describe("exclamationMark", () => {
    it("returns true when the string ends with !", () => {
        expect(exclamationMark("Je suis très satisfait !")).toBe(true);
    });

    it("returns false when the string does not end with !", () => {
        expect(exclamationMark("Je suis très satisfait")).toBe(false);
    });

    it("returns false when the string includes ! but not end with !", () => {
        expect(exclamationMark("Bonjour ! Je suis satisfait")).toBe(false)
    })

    it("returns false when the string includes ! and end with !", () => {
        expect(exclamationMark("Bonjour ! Je suis satisfait !")).toBe(true)
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => exclamationMark(42)).toThrow("Value must be a string");
    });
});
