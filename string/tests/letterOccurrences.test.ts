import {describe, expect, it} from "vitest";
import {letterOccurrences} from "../letterOccurrences.js";

describe("Returns occurrences number of a letter in a sentence", () => {
    it("Normal case", () => {
        expect(letterOccurrences("Le petit poney est tombé dans la boue", "p")).toBe(2);
    });

    it("Letters in upper case and lower case", () => {
        expect(letterOccurrences("Le petit poney Paquerette est tombé dans la boue", "p")).toBe(3);
    });

    it("No letters in the sentence", () => {
        expect(letterOccurrences("Le petit poney Paquerette est tombé dans la boue", "w")).toBe(0)
    })

    it("There is no sentence", () => {
        expect(letterOccurrences("", "o")).toBe(0);
    })
    it("There is a number in the sentence", () => {
        expect(letterOccurrences("Le petit poney Paquerette est tombé 2 fois dans la boue", "p")).toBe(3);
    })


    it("Throws an error when sentence is not a string", () => {
        // @ts-ignore
        expect(() => letterOccurrences(42, "p")).toThrow("Sentence and letter must be a string");
    });

    it("Throws an error when letter is not a string", () => {
        // @ts-ignore
        expect(() => letterOccurrences("Le petit Poney est tombé", 42)).toThrow("Sentence and letter must be a string");
    });
    it("Throws an error when letter contains more than 1 character", () => {
        // @ts-ignore
        expect(() => letterOccurrences("Le petit Poney est tombé", "ey")).toThrow("Letter must contain exactly one character");
    });
});

