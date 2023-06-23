// Write your tests here!
const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

describe("polybius", () => {
    it("should translate i and j to 42", () => {
        const actual = [polybius("i"), polybius("j")];
        const expected = ["42", "42"];
        expect(actual).to.eql(expected);
    });
    it("should translate 42 to (i/j) when decoding", () => {
        const actual = polybius("42", false);
        const expected = "(i/j)";
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = polybius("MESSAGE");
        const expected = polybius("message");
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message after encoding", () => {
        const actual = polybius("this message");
        const expected = "44324234 23513434112251";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message after decoding", () => {
        const actual = polybius("44324234 23513434112251", false);
        const expected = "th(i/j)s message";
        expect(actual).to.equal(expected);
    })
})