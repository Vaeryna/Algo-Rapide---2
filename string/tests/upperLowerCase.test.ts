import {describe, expect, it} from "vitest";
import {upperLowerCase} from "../upperLowerCase";

describe("returns string with alternance of lower case and upper case", () => {
    it("The string is all in lower case", () => {
        expect(upperLowerCase("jesuisbobleponge")).toBe("JeSuIsBoBlEpOnGe");
    });

    it("The string is all in upper case", () => {
        expect(upperLowerCase("JESUISBOBLEPONGE")).toBe("JeSuIsBoBlEpOnGe");
    });

    it("The string is has lower case and upper case", () => {
        expect(upperLowerCase("jeSuisBobLEponge")).toBe("JeSuIsBoBlEpOnGe")
    })

    it("The string is has numbers", () => {
        expect(upperLowerCase("Je42SuisBobLEponge")).toBe("Je42SuIsBoBlEpOnGe");
    })

    it("The string has special characters", () => {
        expect(upperLowerCase("jesuisbobl'eponge")).toBe("JeSuIsBoBl'ePoNgE");
    })

it("The string has accents characters", () => {
        expect(upperLowerCase("jesuisbobléponge")).toBe("JeSuIsBoBlÉpOnGe");
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => upperLowerCase(42)).toThrow("Value must be a string");
    });
});

