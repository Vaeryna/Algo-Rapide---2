import {describe, expect, it} from "vitest";
import {getLengthWithoutSpaces} from "../getLengthWithoutSpaces.js";

describe("returns sentences number of character without space", () => {
    it("normal case", () => {
        expect(getLengthWithoutSpaces("bonjour le monde")).toBe(14);
    });

    it("too much spaces", () => {
        expect(getLengthWithoutSpaces("bonjour                   le                   monde")).toBe(14);
    });

    it("with special characters", () => {
        expect(getLengthWithoutSpaces("bonjour \n le monde ")).toBe(15)
    })

    it("With numbers in the sentences", () => {
        expect(getLengthWithoutSpaces("bonjour 42 ")).toBe(9);
    })

    it("With numbers and special character", () => {
        expect(getLengthWithoutSpaces("bonjour 42 !")).toBe(10);
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => getLengthWithoutSpaces(42)).toThrow("Value must be a string");
    });
});

