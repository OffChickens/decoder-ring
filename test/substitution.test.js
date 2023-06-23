// Write your tests here!
const { substitution } = require("../src/substitution.js");
const { expect } = require("chai");

describe("substitution", () => {
    it("should return false if the new alphabet isn't 26 chars long", () => {
        const actual = substitution("thinkful", "abcdjlks");
        const expected = false;
        expect(actual).to.equal(false);
    });
    it("should correctly translate a given phrase with the new alphabet", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);
    });
    it("should return false if there are duplicate letters in the new alphabet", () => {
        const actual = substitution("message", "ababababababababababababab");
        const expected = false
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message when encoding", () => {
        const actual = substitution("this message", "plmoknijbuhvygctfxrdzeswaq");
        const expected = "djbr ykrrpik";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message when decoding", () => {
        const actual = substitution("djbr ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
        const expected = "this message";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq");
        const expected = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    });
})