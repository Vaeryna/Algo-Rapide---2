import {describe, expect, it} from "vitest";
import {isPalindrome} from "../isPalindrome";

describe("returns true / false if the value is a palindrome", () => {
    it("The sentence is a palindrome without special character", () => {
        expect(isPalindrome("eh ca va la vache")).toBe(true);
    });

    it("The sentence is a palindrome with special character", () => {
        expect(isPalindrome("eh ça va la vache")).toBe(true);
    });

    it("The sentence is a palindrome with upper case", () => {
        expect(isPalindrome("Eh ca va la vache")).toBe(true)
    })

    it("The sentence is a palindrome with special character, upper case and punctuation", () => {
        expect(isPalindrome("Eh ! ça va la vache ?")).toBe(true);
    })

    it("The sentence is not a palindrome", () => {
        expect(isPalindrome("eh ça va ?")).toBe(false);
    })

    it("throws an error when value is not a string", () => {
        // @ts-ignore
        expect(() => isPalindrome(42)).toThrow("Value must be a string");
    });
});

