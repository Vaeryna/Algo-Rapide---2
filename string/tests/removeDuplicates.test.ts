import {describe, expect, it} from "vitest";
import {removeDuplicates} from "../removeDuplicates";

describe("The function remove duplicate characters", () => {
    it("The value has duplicate characters", () => {
        expect(removeDuplicates("booonjouuur")).toBe("Message normalisé: bonjour");
    });

    it("The value is a number", () => {
        expect(removeDuplicates("4222")).toBe("Message normalisé: 4222");
    });

    it("The value has duplicate characters and numbers", () => {
        expect(removeDuplicates("1000 fois boooooonjouuuur !!!")).toBe("Message normalisé: 1000 fois bonjour !")
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => removeDuplicates(true)).toThrow("Value must be a string");
    });
    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => removeDuplicates(42)).toThrow("Value must be a string");
    });
});

