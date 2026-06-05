import {describe, expect, it} from "vitest";
import {extractInitials} from "../extractInitials";

describe("returns string with the name initials", () => {
    it("The name is firstname and lastname", () => {
        expect(extractInitials("jean smith")).toBe("JS");
    });

    it("The name has tiret", () => {
        expect(extractInitials("jean-pierre pernault")).toBe("JPP");
    });

    it("The name is multiples tirets", () => {
        expect(extractInitials("Jean---Pierre Pernault")).toBe("JPP")
    })

    it("The name has points", () => {
        expect(extractInitials("Jean.Pierre.Pernault")).toBe("JPP");
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => extractInitials(42)).toThrow("Value must be a string");
    });
});

