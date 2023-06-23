// Write your tests here!
const {caesar} = require("../src/caesar.js");
const { expect } = require("chai");

describe("caesar", () => {
    it("should return a new string with all characters offset by the shift", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is 0, < -25, or > 25", () => {
        const actual = [caesar("thinkful", 0), caesar("thinkful", -28), caesar("thinkful", 26)];
        const expected = [false, false, false];
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const actual = caesar("THINKFUL", 2);
        const expected = "vjkpmhwn";
        expect(actual).to.equal(expected);
    });
    it("should handle the case of going past the alphabet, wrapping around to the beginning", () => {
        const actual = caesar("thinkful", 10);
        const expected = "drsxupev";
        expect(actual).to.equal(expected);
    });
    it("should maintain spacing and other nonalphabetic symbols", () => {
        const actual = caesar("thinkful is great!" , 2);
        const expected = "vjkpmhwn ku itgcv!";
        expect(actual).to.equal(expected);
    });
})
