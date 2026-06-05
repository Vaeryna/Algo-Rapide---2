import {describe, expect, it} from "vitest";
import {truncate} from "../truncate";

const description = "Ceci est une très longue description d'un produit"

describe("returns string truncate with dot", () => {
    it("The size truncate in space", () => {
        expect(truncate(description, 8)).toBe("Ceci est...");
    });

    it("The size truncate into a word", () => {
        expect(truncate(description, 20)).toBe("Ceci est une très...");
    });

    it("throws an error when input is not a string", () => {
        // @ts-ignore
        expect(() => truncate(42)).toThrow("Input must be a string");
    });
    it("throws an error when size is not a number", () => {
        // @ts-ignore
        expect(() => truncate(description, "3")).toThrow("Size must be a number");
    });
});

