import {describe, expect, it} from "vitest";
import {maskString} from "../maskString";

describe("returns string with number cards masked except the N last", () => {
    it("The card number with 4 last numbers unmasked", () => {
        expect(maskString("0000111122223333", 4)).toBe("************3333");
    });

    it("The card number with 3 last numbers unmasked and tiret between numbers", () => {
        expect(maskString("0000-1111-2222-3333", 3)).toBe("****-****-****-*333");
    });

    it("The card number with 4 last numbers unmasked and points between numbers", () => {
        expect(maskString("0000.1111.2222.3333", 4)).toBe("****.****.****.3333")
    })

    it("The card number with 0 last numbers unmasked and tiret between numbers", () => {
        expect(maskString("0000-1111-2222-3333", 0)).toBe("****-****-****-****");
    })

    it("The small card number with 4 last numbers unmasked", () => {
        expect(maskString("1234", 4)).toBe("1234");
    })

    it("throws an error when cardNumber is not a string", () => {
        // @ts-ignore
        expect(() => maskString(42, 2)).toThrow("Card number must be a string");
    });
    it("throws an error when last number is not a string", () => {
        // @ts-ignore
        expect(() => maskString("0000", "2")).toThrow("Last number must be a number");
    });
});

