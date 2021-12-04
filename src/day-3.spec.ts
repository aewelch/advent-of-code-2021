import { partOne, partTwo } from "./day-3";
import { readFile } from "./utils";

describe("Day 3", () => {
  it("should solve part 1 with the test input", () => {
    const result = partOne([
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ]);
    expect(result).toEqual(198);
  });

  it("should solve part 1 with the real input", () => {
    const input = readFile("src/day-3-input.txt").split("\n");
    const result = partOne(input);
    expect(result).toEqual(852500);
  });

  it("should solve part 2 with the test input", () => {
    const result = partTwo([
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ]);
    expect(result).toEqual(230);
  });

  it("should solve part 2 with the real input", () => {
    const input = readFile("src/day-3-input.txt").split("\n");
    const result = partTwo(input);
    expect(result).toEqual(1007985);
  });
});
