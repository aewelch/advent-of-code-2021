import { partOne, partTwo } from "./day-1";
import { readFile } from "./utils";

describe("Day 1", () => {
  it("should solve part 1 with the test input", () => {
    const result = partOne([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]);
    expect(result).toEqual(7);
  });

  it("should solve part 1 with the real input", () => {
    const input = readFile("src/day-1-input.txt")
      .split("\n")
      .map((s) => parseInt(s, 10));
    const result = partOne(input);
    expect(result).toEqual(1288);
  });

  it("should solve part 2 with the test input", () => {
    const result = partTwo([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]);
    expect(result).toEqual(5);
  });

  it("should solve part 2 with the real input", () => {
    const input = readFile("src/day-1-input.txt")
      .split("\n")
      .map((s) => parseInt(s, 10));
    const result = partTwo(input);
    expect(result).toEqual(1311);
  });
});
