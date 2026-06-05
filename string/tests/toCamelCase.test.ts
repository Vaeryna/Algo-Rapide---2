import {describe, expect, it} from "vitest";
import {toCamelCase} from "../toCamelCase.js";

describe("returns string in camelCase", () => {
    it("The string has spaces", () => {
        expect(toCamelCase("user first name")).toBe("userFirstName");
    });

    it("The string has underscores", () => {
        expect(toCamelCase("user_first_name")).toBe("userFirstName");
    });

    it("The string has tirets", () => {
        expect(toCamelCase("user-first-name")).toBe("userFirstName")
    })

    it("The string has underscores and/or tirets and/or spaces", () => {
        expect(toCamelCase("user first_name")).toBe("userFirstName");
    })


    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => toCamelCase(42)).toThrow("Value must be a string");
    });
});

