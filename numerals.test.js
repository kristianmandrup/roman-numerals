const { numerals } = require("./numerals");

describe("numerals", () => {
  test("I", () => {
    const result = numerals("I");
    expect(result).toEqual(1);
  });

  test("II", () => {
    const result = numerals("II");
    expect(result).toEqual(2);
  });

  test("III", () => {
    const result = numerals("III");
    expect(result).toEqual(3);
  });

  test("IV", () => {
    const result = numerals("IV");
    expect(result).toEqual(4);
  });

  test("VI", () => {
    const result = numerals("VI");
    expect(result).toEqual(6);
  });

  test("XX", () => {
    const result = numerals("XX");
    expect(result).toEqual(20);
  });
});
